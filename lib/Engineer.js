const inquirer = require('inquirer')
const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name, id, email)
        this.role = role
        role = 'Engineer'
        this.github = github
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return this.role
    }
}

module.exports = Engineer