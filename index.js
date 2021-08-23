// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [

        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'gitAccount'
        },
        {
            type: 'input',
            message: 'What is the title of your Project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Give a discription of your project',
            name: 'description'
        },
        {
            type: 'list',
            message: 'Does your repository have a license?, if so which one?',
            choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" license', 'BSD 3-Clause "New" or "Revised" license', 'Boost Software License 1.0'],
            name: 'license'
        }

    ]

 
// TODO: Create a function to write README file

function writeToFile(fileName, data){
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log('The file was saved!')
})
}

// TODO: Create a function to initialize app
function init() {
    
inquirer.prompt(questions)
    .then (answers => {
        const md = generateMarkdown(answers)
        writeToFile("README.md", md)
    })
}

// Function call to initialize app
init();