// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'CC0v1':
      return '![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)';
      break;
    
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;

    case 'GNU GPLv3':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
      break;

    case '':
      return '';
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'CC0v1':
      return '[Learn more here](http://creativecommons.org/publicdomain/zero/1.0/)';
      break;
    
    case 'MIT':
      return '[Learn more here](https://opensource.org/licenses/MIT)';
      break;

    case 'GNU GPLv3':
      return '[Learn more here](https://www.gnu.org/licenses/gpl-3.0)'
      break;

    case '':
      return '';
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var licenseText;
  switch (license) {
    case 'CC0v1': licenseText = `This application is covered under the ${license} license.`;
      break;
    
    case 'MIT': licenseText = `This application is covered under the ${license} license.`;
      break;

    case 'GNU GPLv3': licenseText = `This application is covered under the ${license} license.`;
    break;

    case '':
      licenseText = "No license"
  }
  return licenseText;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var licenseBadge = renderLicenseBadge(data.license);

  return `# ${data.title}


  ## Description

  ${data.description}
  
  ${licenseBadge}


  ## Table of Contents

  [Installation](#installation)

  [Usage](#usage)

  [Contribution Guidelines](#contribution-guidelines)

  [Testing](#testing)

  [License](#license)

  [Questions](#questions)


  ## Installation

  ${data.installation}


  ## Usage

  ${data.usage}


  ## Contribution Guidelines

  ${data.contribute}


  ## Testing

  ${data.test}


  ## License

  ${renderLicenseSection(data.license)} ${renderLicenseLink(data.license)}

  ## Questions

  If you have questions, please visit my GitHub page ${data.github} or email me ${data.email}.

`;
}

module.exports = generateMarkdown;
