const fs = require('fs');
const jsdom = require('jsdom');
const script = require("./nodeScript");

async function writeToFile(string) 
{
    document = new jsdom.JSDOM(string);
    document = document.window.document;

    script(document).then((humans) => {
        fs.writeFileSync("Students.json", JSON.stringify(humans, null, 2));
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = writeToFile