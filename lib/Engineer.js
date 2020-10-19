// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

var inquirer = require("inquirer");

 /// ENGINEER QUESTIONS/.THEN FUNCTION ///

 function askEngineer() {
    inquirer.prompt ([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "checkbox",
            message: "What is your role with the company?",
            name: "role",
            choices: ["Intern", "Engineer", "Team Manager", "None"]
        },
        {
            type: "input",
            message: "What is your ID number?",
            name: "number"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is your Github username?",
            name: "Github"
        }
    ]).then(function(response){
        console.log(response);

                /// GET FUNCTION TO WORK ///
    })
}            

