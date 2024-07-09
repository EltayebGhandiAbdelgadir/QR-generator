/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import qr from 'qr-image'
import {input} from '@inquirer/prompts'
import fs from 'fs';

// step 1
const ans = await input({
    message:"Enter your ans",
 

});
console.log(`You serr!!! ${ans}`);

// step 2
var my_qr = qr.image(ans);
my_qr.pipe(fs.createWriteStream("myFirstqr.png"));

fs.writeFile('myimg.txt', ans, err => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
    }
  });