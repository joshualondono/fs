const fs = require('fs');
const path = require('path');
const mainFile = 'randomText.txt'


const makeDir = fs.mkdir(path.join(__dirname, 'content'), (err) => {
                if (err) {
                    console.log(error(err));
                }
                console.log('content folder created');
              });

const makeFile = fs.appendFile(mainFile, 'Author: Joshua Londono', (err) => {
                  if (err) {
                    console.log(err);
                  }
                  else {
                    console.log('randomtext.txt created');
                  }
                });

const copyFile = fs.copyFile(mainFile, 'verbage.txt', (err) => {
          if (err) {
            console.log(err);
          }
          else {
          console.log('verbage.txt created');
           }
                });

  const delFile = setTimeout(function(){
    fs.rmdir('content', () => {
      console.log('deleted');

    });
  }, 2000);

//console.log(data);
makeDir;
makeFile;
copyFile;
delFile;
