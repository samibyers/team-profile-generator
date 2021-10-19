const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const team = require('./util/generateHtml');
const fs = require('fs');
const employees = []

function startManager() {
    inquirer.prompt([
       {
            type: 'input',
            name: 'name',
            message: 'What is the team manager\'s name?',  
       }, 
       {
            type: 'input',
            name: 'id',
            message: 'What is the team manager\'s employee id?',  
       },
       {
            type: 'input',
            name: 'email',
            message: 'What is the team manager\'s email address?',  
       },
       {
            type: 'input',
            name: 'office',
            message: 'What is the team manager\'s office number?',  
       },
    ]).then(({name, id, email, office}) => {
        employees.push(new Manager(name, id, email, office));
        menu();
    });
};

function menu() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Continue building your team?',
            choices: ['Add Engineer', 'Add Intern', 'Finish building team'],  
       },  
    ]).then(answers => {
        switch (answers.menu) {
            case 'Add Engineer':
                getEngineer();
                break;
            case 'Add Intern':
                getIntern();
                break;
            default: 
                init();
                break;
        };
    });
};

function getEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer\'s name?',  
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the engineer\'s employee id?',  
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineer\'s email?',  
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the employee\'s github username',  
        },
    ]).then(({name, id, email, github}) => {
        employees.push(new Engineer(name, id, email, github));
        menu();  
    });
};

function getIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the intern\'s name?',  
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the intern\'s employee id?',  
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the intern\'s email?',  
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school does the intern attend?',  
        },
    ]).then(({name, id, email, school}) => {
        employees.push(new Intern(name, id, email, school));
        menu();  
    });
};

function init() {
    fs.writeFile('./dist/Employees.html', team(employees), (err) => err ? console.log(err) : console.log('Success!'));
};

startManager();

