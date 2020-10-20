// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
var inquirer = require("inquirer");

 /// MANAGER QUESTIONS/.THEN FUNCTION  ///

//  askTeamManager();

 class Manager {
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

 module.exports = Manager;