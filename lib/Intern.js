const inquirer = require('inquirer');
const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email)
        this.role = 'Intern'
        this.school = school
    }
};

    Intern.prototype.getInquirerName = function () {
    return inquirer
    .prompt({
    type: 'text',
    name: 'name',
    message: 'What is your name?'
});
};

    Intern.prototype.getSchool = function () {
    return this.school;
};

    Intern.prototype.getRole = function () {
    return this.role
};

module.exports = Intern