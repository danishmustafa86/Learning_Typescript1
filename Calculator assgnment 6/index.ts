import chalk from "chalk"
import inquirer from "inquirer";
async function calculator() {

    var resul = await inquirer.prompt([{
        type: "number",
        message: "Enter a number1",
        name: "num1"
    }, {
        type: "number",
        message: "Enter a number2",
        name: "num2"
    }, {
        type: "list",
        name: "operation",
        message: "perform a operation",
        choices: ["add", "subtract", "multiply", "division", "remainder", "enxponent"]
    }])
    switch (resul.operation) {
        case "add":
            console.log(chalk.bgRed(`sum of these numbers is`, (resul.num1 + resul.num2)));
            break;
        case "subtract":
            console.log(chalk.bgBlue(`subtraction of these numbers is`,(resul.num1 - resul.num2)));
            break; case "multiply":
            console.log(chalk.yellow.bgGray(`product of these numbers is`, (resul.num1 * resul.num2)));
            break; case "division":
            console.log(chalk.green.bgYellow(`division of these numbers is`, (resul.num1 / resul.num2)));
            break;
            break; case "remainder":
            console.log(chalk.black.bgBlue(`modulus of these numbers is`, (resul.num1 % resul.num2)));
            break;
            break; case "enxponent":
            console.log(chalk.black.bgGreen(`exponent of these numbers is`, (resul.num1 ** resul.num2)));
            break;
        default:
            break;
    }
    var againAns = await inquirer.prompt([{
        type: "confirm",
        name: "response",
        message: `would you like to repeat the calculation`,
        choices: ["Y", "N"]
    }])
    if (againAns.response) {
        calculator()

    } else {
        console.log(`your calculation is completed successfully`);
    }

}
calculator()


