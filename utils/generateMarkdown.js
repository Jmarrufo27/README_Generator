// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

    if (license === 'None') {
        return ""
    }
    else if (license === 'Apache License 2.0') {
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    }
    else if (license === 'GNU General Public License v3.0') {
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    }
    else if (license === 'MIT License') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
    else if (license === 'BSD 2-Clause "Simplified" license') {
        return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
    }
    else if (license === 'BSD 3-Clause "New" or "Revised" license') {
        return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    }
    else if (license === 'Boost Software License 1.0') {
        return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    }

}



// function renderLicenseSection() {
//     if(license === 'None'){
//         return
//     }
//     else {
//         generateMarkdown(data).json(stringify)
//     }
// }

// TODO: Create a function that returns the github account link
function renderGitHubLink(userName) {

    return `[${userName}]("github.com/${userName}")`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'None') {
        return '';
    }
    else {
        return `License This project is covered by ${renderLicenseBadge(license)}.
     Click on the badge to see the license information`
    }

}

// TODO: Create a function to generate markdown for README
//${renderLicenseBadge(data.license)} 
function generateMarkdown(data) {
    return ` ${renderLicenseBadge(data.license)}

## ${data.title} 

-----------------------------------------

## Table of Contents

* [Description](#description)
* [Installaion Instrusctions](#instalation-instructions)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Video](#video)

-----------------------------------------

## Description
${data.description}

-----------------------------------------

## Installation Instructions
${data.installation}

-----------------------------------------

## Usage
${data.usage}

-----------------------------------------
    
${renderLicenseSection(data.license, renderLicenseBadge(data.license))} 

-----------------------------------------

## Contributing
${data.contribute}

-----------------------------------------

## Tests
${data.tests}

-----------------------------------------

## Video
[Video Link](${data.video})

## Questions
If you have any questions plese dont hessitate to email me here
${data.email}
OR follow me on GitHub
${renderGitHubLink(data.gitAccount)}

-----------------------------------------


    

`;
}

module.exports = generateMarkdown;
