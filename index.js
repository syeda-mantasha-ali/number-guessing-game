#! usr/bin/env node
import inquirer from "inquirer";
let number = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    { message: "Enter Your Number", name: "userNumber", type: "number" }
]);
if (number === answers.userNumber) {
    console.log('Congratulation! you guessed correct number');
}
else {
    console.log('Oops! Try Again');
    console.log("The number was " + number);
}
