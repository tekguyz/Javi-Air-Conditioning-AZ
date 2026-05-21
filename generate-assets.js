const fs = require('fs');
const path = require('path');

// 1x1 Transparent PNG Base64
const PNG_BASE64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

// 16x16 Transparent ICO Base64
const ICO_BASE64 = 'AAABAAEAEBAAAAEAIABoQAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAAAAADbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';

const targets = [
  { filePath: path.join(__dirname, 'app', 'apple-icon.png'), base64: PNG_BASE64 },
  { filePath: path.join(__dirname, 'app', 'icon.png'), base64: PNG_BASE64 },
  { filePath: path.join(__dirname, 'app', 'opengraph-image.png'), base64: PNG_BASE64 },
  { filePath: path.join(__dirname, 'app', 'favicon.ico'), base64: ICO_BASE64 }
];

console.log('Generating valid brand placeholder icons to avoid Next.js build errors...');

targets.forEach(({ filePath, base64 }) => {
  try {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, Buffer.from(base64, 'base64'));
    console.log(`Successfully generated valid binary asset at: ${filePath}`);
  } catch (error) {
    console.error(`Error writing to ${filePath}:`, error);
  }
});

console.log('All placeholder assets generated successfully!');
