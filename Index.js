const inquirer = require('inquirer');
// Employee is important for the name, id and email.
const Employee = require('./lib/Employee');
// Everything else uses super() to import the same name, id and email parameters from Employee.
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

let manager = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'What is the Manager\'s name?'
            },
            {
                type: 'input',
                name: 'managerID',
                message: 'What is the Manager\'s id?'
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'What is the Manager\'s Email?'
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: 'What is the Manager\'s Office Number?'
            }
        ]);
};

let intern = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'What is the Intern\'s name?'
            },
            {
                type: 'input',
                name: 'internID',
                message: 'What is the Intern\'s id?'
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'What is the Intern\'s Email?'
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'What is the Intern\'s School?'
            }
        ]);

}

let engineer = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is the Engineer\'s name?'
            },
            {
                type: 'input',
                name: 'engineerID',
                message: 'What is the Engineer\'s id?'
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'What is the Engineer\'s Email?'
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'What is the Engineer\'s Github?'
            }
        ]);
};

const displayFunctions = async () => {
    let responses = await manager();

    console.log(responses.managerName);
    console.log(responses.managerID);
    console.log(responses.managerEmail);
    console.log(responses.managerOfficeNumber);

    displayFunctions2();
};

const displayFunctions2 = async () => {
    let responses2 = await intern();

    console.log(responses2.internName);
    console.log(responses2.internID);
    console.log(responses2.internEmail);
    console.log(responses2.internSchool);
    displayFunctions3();
};

const displayFunctions3 = async () => {
    let responses3 = await engineer();

    console.log(responses3.engineerName);
    console.log(responses3.engineerID);
    console.log(responses3.engineerEmail);
    console.log(responses3.engineerGithub);
};


displayFunctions()