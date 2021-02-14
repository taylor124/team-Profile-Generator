const inquirer = require('inquirer');
const fs = require('fs');
// Employee is important for the name, id and email.
const Employee = require('./lib/Employee');
// Everything else uses super() to import the same name, id and email parameters from Employee.
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Choices = require('inquirer/lib/objects/choices');
const { callbackify } = require('util');

let askManager = () => {
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
                name: 'managerRole',
                message: 'What is the Manager\'s Role?'
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: 'What is the Manager\'s Office Number?'
            }
        ]);
};

let askIntern = () => {
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
                name: 'internRole',
                message: 'What is the Intern\'s Role?'
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'What is the Intern\'s School?'
            }
        ]);

};

let askEngineer = () => {
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
                name: 'engineerRole',
                message: 'What is the Engineer\'s Role?'
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'What is the Engineer\'s Github?'
            }
        ]);
};

let manager = [];
let intern = [];
let engineer = [];

const teamCreate = () => {

    inquirer
        .prompt([{
            type: 'list',
            name: 'otherMember',
            message: 'Would you like to add another Team Member?',
            choices: ['Engineer', 'Intern', 'Finish Building Team']
        }])

        .then(data => {
            if (data.otherMember === 'Engineer') {
                displayEngineer();
            } else if (data.otherMember === 'Intern') {
                displayIntern();
            } else {

                console.log(manager);
                console.log(intern);
                console.log(engineer);
                let html = displayHtml();
                console.log(html);
                fs.writeFile('./src/index.html', html, function (err) {
                    if (err) {
                        throw err;
                    };
                    console.log('Successfully finished creating Team.');
                })
            }
        });

};

const displayManager = async () => {
    let responses = await askManager();
    manager.push(new Manager(responses.managerName, responses.managerID, responses.managerEmail, responses.managerRole, responses.managerOfficeNumber));

    console.log(manager);

    teamCreate();
};

const displayIntern = async () => {
    let responses2 = await askIntern();
    intern.push(new Intern(responses2.internName, responses2.internID, responses2.internEmail, responses2.internRole, responses2.internSchool));

    console.log(intern);

    teamCreate();
};

const displayEngineer = async () => {
    let responses3 = await askEngineer();
    engineer.push(new Engineer(responses3.engineerName, responses3.engineerID, responses3.engineerEmail, responses3.engineerRole, responses3.engineerGithub));

    console.log(engineer);

    teamCreate();
};

let displayHtml = () => {
    function renderManager() {
        return `<div class="card border-info mb-3" style="max-width: 18rem;">
        <div class="card-header">${manager[0].name}</div>
        <div class="card-body text-info">
          <h5 class="card-title"></h5>
          <p class="card-text">
          Id: ${manager[0].id}
          Email: ${manager[0].email}
          Role: ${manager[0].role}
          Office Number: ${manager[0].officeNumber}
          </p>
        </div>
      </div> `
    };
    function renderEngineers() {
        let engineerHtml = ''
        engineer.forEach(eng => {
            engineerHtml += `<div class="card border-info mb-3" style="max-width: 18rem;">
        <div class="card-header">${eng.name}</div>
        <div class="card-body text-info">
          <h5 class="card-title"></h5>
          <p class="card-text">
          Id: ${eng.id}
          Email: ${eng.email}
          Role: ${eng.role}
          Github: https://github.com/${eng.github}
          </p>
        </div>
      </div> `  
        })
        return engineerHtml;
    };
    function renderIntern() {
        let internHtml = ''
        intern.forEach(int => {
            internHtml += `<div class="card border-info mb-3" style="max-width: 18rem;">
        <div class="card-header">${int.name}</div>
        <div class="card-body text-info">
          <h5 class="card-title"></h5>
          <p class="card-text">
          Id: ${int.id}
          Email: ${int.email}
          Role: ${int.role}
          School: ${int.school}
          </p>
        </div>
      </div> ` 
        })
        return internHtml;
    };
    const markup = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
      <title>Document</title>
    </head>
    <body>
    
     ${renderManager()}
     ${renderEngineers()}
     ${renderIntern()}

    </body>
    </html>`
    return markup;
}


displayManager();