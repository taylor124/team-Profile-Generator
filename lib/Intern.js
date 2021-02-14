const inquirer = require('inquirer')
const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email)
        this.role = role
        role = 'Intern'
        this.school = school
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return this.role
    }

}

module.exports = Intern