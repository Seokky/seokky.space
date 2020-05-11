/* eslint-disable */
const fs = require('fs');
const webp = require('webp-converter');
const articleImagesDir = './src/assets/img/article-images/';

/* convert to webp */
fs.readdir(articleImagesDir, (err, files) => {
  files.forEach(file => {
    const [ name, ext ] = file.split('.');
    const input = `${articleImagesDir}${file}`;
    const output = `${articleImagesDir}${name}.webp`;

    if (ext !== 'webp') {
      webp.cwebp(input, output, '-q 80', (status, error) => {
        // if conversion successful status will be '100' else 101
        if (status === '101') {
          throw new Error(`FAILED: ${input} ---> ${output}`);
        }
      });
    }
  });
});