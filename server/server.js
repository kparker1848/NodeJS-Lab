const path = require('path');
const fs = require('fs');
const request = require('request');


let dataPath = path.join(__dirname, '../chirps.json');

fs.readFile(dataPath, {
    encoding: "UTF-8"
}, (err, chirps) => {

console.log(chirps)

});


