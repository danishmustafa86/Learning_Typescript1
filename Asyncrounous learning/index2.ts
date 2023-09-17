import inquirer from "inquirer"

inquirer.prompt([{
    name: "age",
    type: "number",
    message: "enter first number"
}])
    .then((answer) => {
        switch (answer.operation) {
            case "addition":
                console.log(answer.num1 + answer.num2);
                break;
            case "subtraction":
                console.log(answer.num1 - answer.num2);
                break;
            default:
                break;
        }
    })

