const fs = require('fs');
const path = require('path');

try {
    const content = fs.readFileSync(path.join(__dirname, 'lib/products.ts'), 'utf8');
    const products = [];
    const lines = content.split('\n');
    let currentName = null;

    lines.forEach(line => {
        // Check for product name (indentation 4 spaces)
        // "name": "Value",
        const nameMatch = line.match(/^    "name": "([^"]+)",/);
        if (nameMatch) {
            currentName = nameMatch[1];
        }

        // Check for category (indentation 4 spaces)
        // "category": "Value",
        const categoryMatch = line.match(/^    "category": "([^"]+)",/);
        if (categoryMatch && currentName) {
            products.push({ name: currentName, category: categoryMatch[1] });
            currentName = null; // Reset after finding pair
        }
    });

    const categories = {};
    products.forEach(p => {
        if (!categories[p.category]) categories[p.category] = [];
        categories[p.category].push(p.name);
    });

    console.log(JSON.stringify(categories, null, 2));

} catch (err) {
    console.error(err);
}
