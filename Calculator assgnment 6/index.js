import inquirer from "inquirer";
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
        message: "Enter a number1",
        choices: ["+", "-", "*", "/", "%"]
    }]);
// let result2: number;
switch (resul.operation) {
    case "+":
        console.log(`sum of these numbers is`, resul.num1 + resul.num2);
        break;
    case "-":
        console.log(`subtraction of these numbers is`, resul.num1 - resul.num2);
        break;
    case "+":
        console.log(`product of these numbers is`, resul.num1 * resul.num2);
        break;
    case "/":
        console.log(`division of these numbers is`, resul.num1 / resul.num2);
        break;
        break;
    case "/":
        console.log(`modulus of these numbers is`, resul.num1 % resul.num2);
        break;
    default:
        break;
}
