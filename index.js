// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const { type } = require('os');
const genMKDN = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Project title',
        name: 'project'
    },
    {
        type: 'input',
        message: 'Describe the project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Installation instructions?',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Usage instructions?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Contribution guidelines?',
        name: 'contribute'
    },
    {
        type: 'input',
        message: 'Test instructions?',
        name: 'test'
    },
    // {
    //     type: '???',
    //     message: 'license',
    //     name: 'license'
    // }
    {
        type: 'input',
        message: 'Enter your GitHub URL',
        name: 'github'
    },
    {
        type: 'email',
        message: 'Enter your email',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        fs.writeFile('README.md', data, (err) =>
            err ? console.log(err) : console.log("Sucess!")
    );
}
    

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(({project, description, install, usage, contribute, test, github, email}), (err) =>
    err ? console.log(err) : console.log('Done')
    )
};

// Function call to initialize app
init();
