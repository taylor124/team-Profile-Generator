const inquirer = require('inquirer');

//declare the variables necessary for the Employee template
function Employee(name, id, email) {
    this.name = name
    this.id = id
    this.email = email
    this.role = 'employee'
};

Employee.prototype.getInquirerName = function () {
    return inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        });
};

Employee.prototype.getName = function () {
    return this.name;
};

Employee.prototype.getId = function () {
    return this.id;
};

Employee.prototype.getEmail = function () {
    return this.email
};

Employee.prototype.getRole = function () {
    return this.role
};

module.exports = Employee;