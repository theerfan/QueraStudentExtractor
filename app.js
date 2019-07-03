const fs = require('fs');
const crawler = require("./src/htmlGetter");
const script = require("./src/nodeScript");
const jsdom = require('jsdom');
const path = require("path");

let userMode = process.argv[2];
// let userMode = "offline";
let document = {};
let source = process.argv[3];
// let source = "Quera.htm"
let string = '';
let people = {};

if (userMode === "online")
{
    string = crawler(source);
    document = jsdom.JSDOM.fromURL(source);
}
else {
    string = fs.readFileSync(path.join(__dirname, source)).toString();
}

document = new jsdom.JSDOM(string);
document = document.window.document;

script(document).then((humans) => {
    fs.writeFileSync("Students.json", JSON.stringify(humans, null, 2));
}).catch((err) => {
    console.log(err);
});
