// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
var Employee = require("./employee.js");

 /// ENGINEER QUESTIONS///

 class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

    getRole() {
        return "Engineer"
    }

    getGithub() {
        return this.github
    }


 }


module.exports = Engineer;   