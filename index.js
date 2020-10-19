//will need inquirer.prompt to make objects of questions to prompt the user for their email, id, and specific information based on their role with the company

//also prompt the user for information about the team manager and then info about team members-can be a mix of engineers and interns

//function for team manager
//function for employees
//function for engineers
//function for interns



//run render on the object that holds all of the new classes

 

//in HTML- cards are already made


var inquirer = require("inquirer");


                /// MANAGER QUESTIONS/.THEN FUNCTION  ///

askTeamManager();

function askTeamManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
    
        {
            type: "checkbox",
            message: "What is your role with the company",
            name: "role",
            choices: ["Intern", "Engineer", "Team Manager", "None"]
        },

        {
            type: "input",
            message: "What is your ID number?",
            name: "number"
        },

        {
            type:"input",
            message: "What is your email?",
            name: "email"
        },

        {
            type: "input",
            message: "What is your office number?",
            name: "office"
        }

    ]).then(function(response) {
        askIntern(response.name.role.number)

                //GET FUNCTION TO WORK
    });

}


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
    })
}            

