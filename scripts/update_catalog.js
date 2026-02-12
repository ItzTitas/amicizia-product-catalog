const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../lib/products.ts');
const fileContent = fs.readFileSync(filePath, 'utf8');

// specific markers
const startMarker = 'export const products: Product[] = [';
const endMarker = '];'; // We need to be careful if this appears inside string, but unlikely in this file structure

const startIndex = fileContent.indexOf(startMarker);
const lastIndex = fileContent.lastIndexOf(endMarker);

if (startIndex === -1 || lastIndex === -1) {
    console.error('Could not find products array');
    process.exit(1);
}

const arrayContent = fileContent.substring(startIndex + startMarker.length, lastIndex + 1);

let products;
try {
    // We remove the trailing semicolon if captured, though lastIndex + 1 includes ;? 
    // Wait, lastIndex is index of start of "];" or end? indexOf returns start.
    // "];" length is 2.
    // substring(start, end) excludes end.
    // We want the string `[ ... ]`.
    // startMarker ends with `[`.

    // Let's refine the extraction
    const arrayString = fileContent.substring(startIndex + startMarker.length - 1, lastIndex + 1);
    // This should be `[ ... ]`

    products = eval(arrayString);
} catch (e) {
    console.error('Failed to parse products array', e);
    // fallback
    process.exit(1);
}

// ---------------------------------------------------------
// UPDATES
// ---------------------------------------------------------

const updates = {
    "aquarena": { variants: ["100 ml", "500ml", "1 Lit", "5 Lit"] },
    "avimec-tablets": { rename_id: "avimec", name: "Avimec", variants: ["1 ml", "10 ml", "100 ml", "10 mg tablet"] },
    "bcom-plus": { variants: ["1 L", "100 ml", "500 ml", "5 L"] },
    "c-cure": { variants: ["500 ml", "1 L"] },
    "canotil-bolus": { rename_id: "canotil", name: "Canotil", variants: ["100 mg", "200 mg"] },
    "cough-null": { variants: ["1 L", "100 ml", "500 ml"] },
    "coxiguard": { variants: ["80 mg", "100 mg"] },
    "diaronil-bolus": { rename_id: "diaronil", name: "Diaronil", variants: ["4's strip"] },
    "enciflox": { variants: ["50 mg", "100 mg"] },
    "fenvet-tablets": { rename_id: "fenvet", name: "Fenvet", variants: ["1.5 mg", "150 mg"] },
    "floxin-l": { rename_id: "floxin", name: "Floxin", variants: ["1 L", "100 ml", "500 ml"] },
    "gout-null": { variants: ["250 ml", "500 ml", "1 L"] },
    "grow-best": { variants: ["250 ml", "500 ml", "1 L", "5 L"] },
    "growbest-power": { name: "Grow-Best Power", variants: ["250 ml", "500 ml", "1 L", "5 L"] },
    "gumbo-null": { variants: ["500 ml", "1 L"] },
    "ibh-shield": { variants: ["500 ml", "1 L"] },
    "immune": { variants: ["1 L", "100 ml", "500 ml"] },
    "iroliv": { variants: ["1 L", "100 ml", "500 ml", "5 L"] },
    "iroliv-power": { variants: ["1000 ml"] },
    "kalshine-gold": { variants: ["1 L", "2 L", "5 L", "10 L", "500 ml"] },
    "more-grow": { variants: ["1 kg", "500 mg"] },
    "more-pork": { variants: ["100 mg", "500 mg", "1 kg", "30 kg"] },
    "neoxy-forte": { variants: ["50 mg"] },
    "no-coli": { variants: ["500 ml", "1 L"] },
    "oxy-gold-bolus": { rename_id: "oxygold", name: "Oxygold", variants: ["4's strip"] },
    "oxy-vetgold": { variants: ["100 mg"] },
    "pgf": { variants: ["1 kg", "250 mg", "500 mg"] },
    "pipzin-vet": { variants: ["30 ml"] },
    "primasol": { variants: ["100 ml", "500 ml"] },
    "pyronull-bolus": { rename_id: "pyronull", name: "Pyronull", variants: ["4's strip"] },
    "safety-vet": { variants: ["1.125 mg", "125 mg", "1 mg", "250 mg", "2 mg", "500 mg", "3 mg"] },
};

const newProductsList = [
    { name: "Amido", variants: ["1 ml"] },
    { name: "Amixin", variants: ["20 mg"] },
    { name: "Avical", variants: ["1 L", "100 ml", "500 ml", "5 L"] },
    { name: "Darmel", variants: ["50 mg"] },
    { name: "Deltrin", variants: ["5 mg", "50 mg"] },
    { name: "Farmsafe", variants: ["1 L", "250 ml", "500 ml", "5 L"] },
    { name: "Furavet", variants: ["50 mg"] },
    { name: "Good Habit", variants: ["30 tabs"] },
    { name: "Growbest Pet Gel", variants: ["200 mg"], category: "Canine" },
    { name: "Orasol", variants: ["1 L", "250 ml", "500 ml", "5 L"] },
    { name: "Piggo csfEND", variants: ["100 ml"] },
    { name: "Piggo Farmsafe", variants: ["100 ml"] },
];

function generateId(name) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function generateSkus(productId, variants) {
    return variants.map((v, i) => {
        const prefix = productId.substring(0, 3).toUpperCase();
        return {
            id: `${productId}-${i}`,
            name: v,
            code: `${prefix}-${i + 1}`,
            unitSize: v,
            packSize: "1 Unit"
        };
    });
}

// 1. Apply Updates
products.forEach(p => {
    const update = updates[p.id];
    if (update) {
        if (update.rename_id) {
            p.id = update.rename_id;
            p.slug = update.rename_id;
        }
        if (update.name) {
            p.name = update.name;
        }
        if (update.variants) {
            p.skus = generateSkus(p.id, update.variants);
        }
    }
});

// 2. Add New Products
newProductsList.forEach(np => {
    const id = generateId(np.name);
    // Check if ID already exists (after renames)
    const existing = products.find(p => p.id === id);
    if (!existing) {
        const newProd = {
            id: id,
            slug: id,
            name: np.name,
            category: np.category || "Livestock",
            description: `${np.name} by Amicizia Life Science.`,
            composition: "",
            indications: "",
            dosage: "",
            packaging: "Standard Packaging",
            images: [],
            skus: generateSkus(id, np.variants)
        };
        products.push(newProd);
    }
});

// Reconstruct file
const header = fileContent.substring(0, startIndex);
// We want to skip the original array content
const footer = fileContent.substring(lastIndex + 1);

// We want to verify `footer` doesn't capture `];` twice?
// lastIndex is index of `];`?
// `];` matches endMarker.
// lastIndexOf returns index of start of match.
// So arrayContent ended at lastIndex + 1 (end of `]`).
// Wait, `lastIndex` is index of `]`. The endMarker is `];`.
// arrayString should be `[...]`.
// `JSON.stringify` produces `[...]`.
// We need to add `;` after.

const newContent = header + "export const products: Product[] = " + JSON.stringify(products, null, 2) + ";" + footer;
fs.writeFileSync(path.join(__dirname, '../lib/products.ts'), newContent);
console.log('Updated lib/products.ts');
