
const crawler = require("./src/queraCrawler");
const fs =require('fs');
const writeToFile = require("./src/writeToJSON");
const path = require("path");

// online, offline
let userMode = process.argv[2];

if (userMode === "online")
{
    email = process.argv[3];
    password = process.argv[4];
    courseName = process.argv[5];
   
    crawler(email, password, courseName);
}
else {
    source = process.argv[3];
    string = fs.readFileSync(path.join(__dirname, source)).toString();
    writeToFile(string)
}



