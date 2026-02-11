const fs = require('fs');
const pdf = require('pdf-parse');

const files = [
    { category: 'Poultry', path: 'C:/Users/titas/.gemini/antigravity/brain/1f8a8570-7012-4e0d-bc42-db80f2da6d5a/.tempmediaStorage/09238a93ce3f2cc0.pdf' },
    { category: 'Livestock', path: 'C:/Users/titas/.gemini/antigravity/brain/1f8a8570-7012-4e0d-bc42-db80f2da6d5a/.tempmediaStorage/d82cf48990455353.pdf' },
    { category: 'Canine', path: 'C:/Users/titas/.gemini/antigravity/brain/1f8a8570-7012-4e0d-bc42-db80f2da6d5a/.tempmediaStorage/bad1e3ea7363a175.pdf' }
];

async function extract() {
    let fullText = '';
    for (const file of files) {
        if (fs.existsSync(file.path)) {
            fullText += `\n\n--- EXTRACTING ${file.category} ---\n`;
            const dataBuffer = fs.readFileSync(file.path);
            try {
                const data = await pdf(dataBuffer);
                fullText += data.text;
            } catch (e) {
                fullText += `\nFailed to parse ${file.category}: ${e.message}\n`;
            }
        } else {
            fullText += `\nFile not found: ${file.path}\n`;
        }
    }
    fs.writeFileSync('pdf_content.txt', fullText);
    console.log('Extraction complete. Written to pdf_content.txt');
}

extract();
