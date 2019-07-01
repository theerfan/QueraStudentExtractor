var fs = require('fs');
var crawler = require("./crawler");
var script = require("./script");
var jsdom = require('jsdom');
var path = require("path");

let userMode = process.argv[2];
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
people = script(document)

fs.writeFileSync("Students.json", JSON.stringify(people, null, 2));