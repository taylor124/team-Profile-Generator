const inquirer = require('inquirer');
const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.role = 'Manager'
        this.officeNumber = officeNumber
    }
};

    Manager.prototype.getInquirerName = function () {
    return inquirer
    .prompt({
    type: 'text',
    name: 'name',
    message: 'What is your name?'
});
};

    Manager.prototype.getOfficeNumber = function () {
    return this.officeNumber;
};

    Manager.prototype.getRole = function () {
    return this.role
};

module.exports = Manager