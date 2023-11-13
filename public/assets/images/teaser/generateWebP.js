import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const inputDir = '.'; // Directory containing PNG images
const outputDir = '.'; // Directory to save WebP images

// Read the input directory
fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error('Error reading input directory', err);
    return;
  }

  files.forEach(file => {
    if (path.extname(file).toLowerCase() === '.png') {
      const inputFilePath = path.join(inputDir, file);
      const outputFilePath = path.join(outputDir, path.basename(file, '.png') + '.webp');

      // Convert the image to WebP format
      sharp(inputFilePath)
        .toFormat('webp')
        .toFile(outputFilePath, (err) => {
          if (err) {
            console.error('Error converting image', file, err);
          } else {
            console.log('Converted', file, 'to WebP');
          }
        });
        console.log('done')
    }
  });
});
