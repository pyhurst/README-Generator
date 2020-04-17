const fs = require('fs');
const inquirer = require('inquirer');
const util = require("util");

const writeToFile = util.promisify(fs.writeFile);

const questions = [
    {
        type: 'input',
        message: 'What is your project\'s title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Describe your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'How do you install?',
        name: 'install'
    },
    {
        type: 'input',
        message: 'What is the use of your application?',
        name: 'use'
    },
    {
        type: 'input',
        message: 'Which licenses do you have?',
        name: 'license'
    },
    {
        type: 'input',
        message: 'What tests did you use?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Which is your Github email?',
        name: 'email'
    }
];

function generateReadMe(answers){
    return `
# ${answers.title}

### Description

${answers.description}

### Table of Contents

[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)
[Tests](#tests)

### Installation

${answers.install}

### Usage

${answers.use}

### License

${answers.license}

### Contributors

[![GitHub contributors](https://img.shields.io/github/contributors/${answers.username}/${answers.title})](https://GitHub.com/${answers.username}/${answers.title}/graphs/contributors/)

### Tests

${answers.tests}

### Github
`
}

// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data);
// }

function init() {
    return inquirer.prompt(questions);
}

init()
    .then(function(answers){
        const readMe = generateReadMe(answers);

        return writeToFile('README.md', readMe)
    })
    .then(function(){
        console.log('Successfully wrote to README.md');
    })
    .catch(function(err){
        console.log(err)
});


// ![](https://img.shields.io/badge/license-MIT-green)
// ![Repo size](https://img.shields.io/github/repo-size/pyhurst/Phils-Portfolio)
