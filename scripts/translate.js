const translate = require('google-translate-api-x');
const fs = require('fs');
const path = require('path');

const showHelp = process.argv.includes('--help');
if (showHelp) {
    console.log(`
    Usage: node scripts/translate.js [options]

    Options:
      --force       Force re-translation of all keys (overwrites existing translations)
      --lang <code?> Only translate specific language(s) (comma separated)
    `);
    process.exit(0);
}

const force = process.argv.includes('--force');
const specificLangs = process.argv.find(arg => arg.startsWith('--lang='))?.split('=')[1]?.split(',');

const enPath = path.join(__dirname, '../messages/en.json');
const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));

// Map of our app content to Google Translate codes
// Some might differ, e.g. 'mni' -> 'mni-Mtei' if needed, but 'mni' usually works in recent versions
const languages = {
    'hi': 'hi',
    'bn': 'bn',
    'as': 'as',
    'mni': 'mni-Mtei', // Manipuri Meitei
    'lus': 'lus',      // Mizo
    'kha': 'kha',      // Khasi (Experimental/Recent)
    'brx': 'brx',      // Bodo (Experimental)
    'ne': 'ne',
    'or': 'or'
};

const targetLangs = specificLangs
    ? Object.keys(languages).filter(l => specificLangs.includes(l))
    : Object.keys(languages);

// Helper to traverse and translate object
async function translateObject(source, target, langCode) {
    const result = { ...target }; // Start with existing

    for (const key in source) {
        if (typeof source[key] === 'object' && source[key] !== null) {
            result[key] = await translateObject(source[key], result[key] || {}, langCode);
        } else if (typeof source[key] === 'string') {
            // Translate if missing or forced
            if (force || !result[key] || result[key] === source[key]) {
                try {
                    // Skip short/invariant strings if needed, but for now translate everything
                    // Simple rate limit / delay could be added here if needed
                    const res = await translate(source[key], { to: languages[langCode] || langCode, autoCorrect: true });
                    result[key] = res.text;
                    console.log(`[${langCode}] Translated: ${key.substring(0, 15)}... -> ${res.text.substring(0, 15)}...`);
                } catch (e) {
                    console.error(`[${langCode}] Error translating ${key}:`, e.message);
                    result[key] = source[key]; // Fallback to English
                }
                // Small delay to be polite to the free API
                await new Promise(r => setTimeout(r, 200));
            }
        }
    }
    return result;
}

(async () => {
    console.log('Starting translation...');
    console.log('Targets:', targetLangs.join(', '));

    for (const lang of targetLangs) {
        const filePath = path.join(__dirname, `../messages/${lang}.json`);
        let existingData = {};
        if (fs.existsSync(filePath)) {
            existingData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        }

        console.log(`\nProcessing ${lang}...`);
        const translatedData = await translateObject(enData, existingData, lang);

        fs.writeFileSync(filePath, JSON.stringify(translatedData, null, 4));
        console.log(`Saved ${lang}.json`);
    }

    console.log('\nAll translations complete!');
})();
