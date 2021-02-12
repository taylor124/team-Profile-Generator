const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email)
        this.role = 'Engineer'
        this.github = github
    }
};

    Engineer.prototype.getInquirerName = function () {
    return inquirer
    .prompt({
    type: 'text',
    name: 'name',
    message: 'What is your name?'
});
};

    Engineer.prototype.getGithub = function () {
    return this.github;
};

    Engineer.prototype.getRole = function () {
    return this.role
};

module.exports = Engineer