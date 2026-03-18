import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const source = path.join(__dirname, 'public', 'image copy copy.png');
const dest = path.join(__dirname, 'public', 'ajofer-certificate.png');

try {
  const data = fs.readFileSync(source);
  fs.writeFileSync(dest, data);
  console.log('Certificate copied successfully!');
} catch (error) {
  console.error('Error copying certificate:', error.message);
  process.exit(1);
}
