// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

var inquirer = require("inquirer");

  /// INTERN QUESTIONS/.THEN FUNCTION ///

  function askIntern () {
    inquirer.prompt([
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
            message: "What school do you go to?",
            name: "school"
        }

    ]).then(function(response){
        askEngineer(response.name.role.number.email.school);

        ///     GET FUNCTION TO WORK

    });
}