const main = require("./../../src/index.js");

function Test() {

    const outputOfTask = main();

    if (outputOfTask == "Task 1, uncomment this code") {
        console.log("Success Completing first task");
    } else {
        console.error("Failed in completing first task");
        process.exit(1);
    }
}

module.exports = Test;