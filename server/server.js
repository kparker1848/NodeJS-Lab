const path = require('path');
const fs = require('fs');

let dataPath = path.join(__dirname, '../chirps.json');

let chirps = [
    {
        "user": "Mothm@n",
        "chirp": "Walked into a lamp again"
    },
    {
        "user": "Bigfoot",
        "chirp": "Gone fishing"
    },
    {
        "user": "Ness",
        "chirp": "A great day for a swim!"
    },
    {
        "user": "theTrashMan",
        "chirp": "So anyways, I just started throwing garbage"
    },
    {
        "user": "Jimmothy Timmons",
        "chirp": "Had a normal day"
    }
]

// fs.writeFile('chirps.json', JSON.stringify(chirps),(err) => {
//     if (err) console.log(err);
// })

fs.readFile(dataPath, {
    encoding: "UTF-8"
}, (err, chirps) => {

console.log(chirps)

});
