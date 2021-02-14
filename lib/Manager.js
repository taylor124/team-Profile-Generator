const inquirer = require('inquirer')
const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        super(name, id, email)
        this.role = role
        role = 'Manager'
        this.officeNumber = officeNumber
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return this.role
    }

}

module.exports = Manager