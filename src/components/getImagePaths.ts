import fs from 'fs';
import path from 'path';

export function getImagePaths(directory = 'public/images/vd') {
  const dirPath = path.join(process.cwd(), directory);
  const files = fs.readdirSync(dirPath);

  return files
    .filter((file) => /\.(png|jpe?g|webp|gif|svg)$/.test(file)) // Filter image files
    .map((file) => `/images/vd/${file}`); // Add public folder prefix
}
