/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'url',
      message: 'Enter the URL to generate a QR code:',
    },
  ])
  .then((answers) => {
    const url = answers.url;

    // Generate QR code as PNG
    const qr_png = qr.image(url, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('qr-code.png'));
    console.log('QR code saved as qr-code.png');

    // Save URL in a text file
    fs.writeFile('url.txt', url, (err) => {
      if (err) throw err;
      console.log('URL saved in url.txt');
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
