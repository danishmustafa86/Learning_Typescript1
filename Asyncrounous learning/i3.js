import inquirer from "inquirer";
inquirer
    .prompt([{
        name: "danish",
        class: "bs_IT",
        message: "I am a university student",
    }, {
        name: "hamid",
        type: "string",
        message: "I am a university student",
    }, {
        name: 'operation',
        type: "list",
        message: 'perform operation',
        choices: ["addition", "sutraction", "multiplication", "division"]
    }])
    .then((result) => {
    console.log(result);
    switch (result.operation) {
        case "addition":
            console.log(result.danish + result.hamid);
            break;
        case "multiplication":
            console.log(result.danish * result.hamid);
        default:
            break;
    }
});
