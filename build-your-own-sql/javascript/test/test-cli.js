const fs = require("fs");
const Test = require("./01-intro");

// const cliIntro = require("./cliIntro.js");
// const pushCodeToGit = require("./pushCodeToGit.js");

const fileContents = fs.readFileSync("test/testToDo.txt", "utf-8");
console.log(fileContents);

if (fileContents === "1") {
	Test();
}

const newValue = parseInt(fileContents) + 1;
fs.writeFileSync("test/testToDo.txt", newValue.toString(), "utf-8");

// cliIntro();

// pushCodeToGit();
