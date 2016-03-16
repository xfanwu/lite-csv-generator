/**
 *
 * Create a fake csv data file with random strings.
 *
 *
 * **/

'use strict';

const fs = require('fs');
const path = require('path');

// Generate a random string of 10 char.
function randomStr() {
  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let stringLen = Math.random() * 10;

  for( let i=0; i < stringLen; i++ )
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

// Generate row from random strings
function row (columnNb) {
  let row = [];

  while (row.length < columnNb)
      row.push(randomStr());

  return row.join();
}

// Create file to current directory.
function run(columnNb, rowNb, delimiter) {
  let file = [];

  while (file.length < rowNb)
    file.push(row(columnNb));

  let url = path.join(process.argv[1], '..', 'new_csv_file.csv');

  fs.writeFile(url, file.join('\n'), (err) => {
    if (err) throw new Error(err);
  });
}

run(process.argv[2], process.argv[3]);
