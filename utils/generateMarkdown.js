// TODO: Create a function that returns a license badge based on 
// which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
let generateTable = function (tableContent) {
  if (tableContent) {
  return `*[Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [Questions](#questions)
  `
  }
  else {
    return ""; 
  }
}


function generateMarkdown(data) {
  return `# ${data.title}
${generateTable(data.tableContent)}
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contribution
${data.contribution}
## Tests
${data.test}
=============
## Questions
For addition questions email: ${data.email}
Link to my Github profile: ${data.github}
`;
}

module.exports = generateMarkdown;
