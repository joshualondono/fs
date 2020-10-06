const fs = require('fs');
const path = require('path');
const mainFile = 'randomText.txt'
const currentPath = path.join(__dirname, 'content');


const makeDir = fs.mkdir(path.join(__dirname, 'content'), (err) => {
                if (err) {
                    return console.error(err);
                }
                return 'content folder created';});

const makeFile = fs.appendFile(mainFile, 'Author: Joshua Londono', (err) => {
                  if (err) {
                    console.log(err);
                  }
                  else {
                    console.log('randomtext.txt created');
                  }
                });

const makeCopy = fs.copyFile(mainFile, 'verbage.txt', (err) => {
                  if (err) throw err;
                  console.log('verbage.txt created');
                });


//console.log(data);
makeDir;
makeFile;
copyFile;
