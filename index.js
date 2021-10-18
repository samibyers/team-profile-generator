const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const test = require('./util/generateHtml');
const fs = require('fs');

function enterManager() {
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
    ]); //then either add engineer, add intern, of finish building team
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
            message: '',  
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the employee\'s github username?',  
        },
    ]); //then user is taken back to the menu choices    
};

function getIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: '',
            message: '',  
        },
        {
            type: 'input',
            name: '',
            message: '',  
        },
        {
            type: 'input',
            name: '',
            message: '',  
        },
        {
            type: 'input',
            name: '',
            message: '',  
        },
        {
            type: 'input',
            name: '',
            message: '',  
        },
    ])
}