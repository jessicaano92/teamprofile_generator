const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const managerQues = [{
    type: "input",
    name: "name",
    message: "What is your manager's name?"
},
{
    type: "input",
    name: "id",
    message: "What is your id number?"
},
{
    type: "input",
    name: "email",
    message: "What is your email?"
},
{
    type: "input",
    name: "officeNumber",
    message: "What is your office number?"
}]
const engineerQues = [{
    type: "input",
    name: "name",
    message: "What is your engineer's name?"
},
{
    type: "input",
    name: "id",
    message: "What is your id number?"
},
{
    type: "input",
    name: "email",
    message: "What is your email?"
},
{
    type: "input",
    name: "gitHub",
    message: "What is your gitHub?"
}]
const internQues = [{
    type: "input",
    name: "name",
    message: "What is your intern's name?"
},
{
    type: "input",
    name: "id",
    message: "What is your id number?"
},
{
    type: "input",
    name: "email",
    message: "What is your email?"
},
{
    type: "input",
    name: "school",
    message: "Where do you go to school?"
}]
const team = []

function menu() {


    function manager() {
        inquirer.prompt(managerQues).then( resp => {
        const newManager = new Manager(resp.name, resp.id, resp.email, resp.officeNumber)
        team.push(newManager)
        teamCreator();
        } )

    }

function teamCreator() {
    inquirer.prompt([
        {
            type: "list",
            name: "teamOption",
            message: "What type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add anyone else"]

        }
    ]).then(choice => {
        switch(choice.teamOption){
            case "Engineer":
                engineer();
                    break;
            case "Intern":
                intern();
                    break;
            default: 
                buildTeam();

        }
    })

}


function engineer() {
    inquirer.prompt(engineerQues).then( resp => {
        const newEngineer = new Engineer(resp.name, resp.id, resp.email, resp.gitHub)
        team.push(newEngineer)
        teamCreator();
        } )
}

function intern(){
    inquirer.prompt(internQues).then( resp => {
        const newIntern = new Intern(resp.name, resp.id, resp.email, resp.school)
        team.push(newIntern)
        teamCreator();
        } )

}

function buildTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
      }
      fs.writeFileSync(outputPath, render(team), 'utf-8');

}

manager();

}

menu();
