// TODO: Write code to define and export the Employee class
//will need inquirer.prompt to make objects of questions to prompt the user for their email, id, and specific information based on their role with the company

//also prompt the user for information about the team manager and then info about team members-can be a mix of engineers and interns





//run render on the object that holds all of the new classes


class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName () {
            return this.name
    }
    getId () {
            return this.id
    }
    getEmail () {
            return this.email
    }
    getRole() {
            return "Employee"
    }

}




module.exports = Employee;