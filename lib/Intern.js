const inquirer = require('inquirer');
const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email)
        this.role = 'Intern'
        this.school = school
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

    Manager.prototype.getSchool = function () {
    return this.school;
};

    Manager.prototype.getRole = function () {
    return this.role
};