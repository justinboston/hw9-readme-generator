// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project.',
    },    

    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description explaining the what, why, and how of your project.',
    },

    {
        type: 'input',
        name: 'userStory',
        message: 'Please describe the intended user story for your application using the following syntax; As a [intended user], I want to [intended solution], so that [intended problem that your application resolves].',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use your application. Feel free to include examples, screenshots and/or demos as needed.',
    },

    {
        type: 'checkbox',
        name: 'technologies',
        message: 'From the below list, please select the technologies used to build your application. Please select "Other" to list additional credits (ie; APIs, Development Frameworks, etc.).',
        choices: [
            { name: 'HTML', value: 'html' },
            { name: 'CSS', value: 'css' },
            { name: 'JavaScript', value: 'javascript' },
            { name: 'Other (please list)', value: 'other' },
        ]
    },   
    
    {
        type: 'input',
        name: 'credits',
        message: 'If you selected "Other" to the above question, please list all credits below (ie; 3rd party APIs, Development Frameworks, etc.)',

    },

    {
        type: 'confirm',
        name: 'confirmContributors',
        message: 'Will you be working with any contributors for this project?',
        default: true,
    },

    {
        type: 'input',
        name: 'contributors',
        message: 'Please provide instructions for how to contribute to this project.',
        default: true,

        when: ({ confirmContributers }) => {
            if (confirmContributers) {
                return true;
            } else {
                message: 'N/A - No Contributors';
            }
        },
        validate: contributerInput => {
            if (contributerInput) {
                return true;
            } else {
                return false;
            }
        }
    },

    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project repository.',
        choices: [
                    'MIT', 
                    'GNU Generic Public Liscense v3.0', 
                    'Apache Liscense 2.0', 
                    'Mozilla Public Liscense 2.0',
                    'Eclipse Public Liscense 2.0',
                    'No License',
                ]
    },

    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub Username? (Required)',
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./output/README.md', fileContent, err => {
        if (err) {
            return console.log(err); 
        }
        resolve({
            ok: true,
            message: 'Your README file has been created!',
        });
            return console.log(message);
        });
};

// TODO: Create a function to initialize app
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Your README has been created! Please refer to the output folder')
    });
};

function init() {
    inquirer.prompt(questions)
    .then(data => {
        const readmeData = generateMarkdown(data);
        writeToFile('./output/README.md', readmeData);
    });
};

// Function call to initialize app
init();
