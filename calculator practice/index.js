import inquirer from "inquirer";
async function calculator() {
    var result = await inquirer.prompt([{
            type: "number",
            message: "enter first number",
            name: "num1",
        },
        {
            type: "number",
            message: "enter second number",
            name: "num2",
        }, {
            type: "list",
            name: "operations",
            message: "perform the operation of your choice",
            choices: ["addition", "subtraction", "multiplication", "division", "remainder", "exponent"]
        }]);
    switch (result.operations) {
        case "addition":
            console.log(`sum of these numbers is`, result.num1 + result.num2);
            break;
        case "subtraction":
            console.log(`subtraction of these numbers is`, result.num1 - result.num2);
            break;
        case "multiplication":
            console.log(`multiplication of these numbers is`, result.num1 * result.num2);
            break;
        case "division":
            console.log(`division
                 of these numbers is`, result.num1 / result.num2);
            break;
        case "remainder":
            console.log(`remainder of these numbers is`, result.num1 % result.num2);
            break;
        case "exponent":
            console.log(`exponent of these numbers is`, result.num1 ** result.num2);
            break;
        default:
            break;
    }
}
calculator();
