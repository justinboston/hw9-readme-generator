// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (license !== 'no license') {
    return `
  ![Liscense](https://img.shields.io/github/license/justinboston/hw9-readme-generator)
    `;
  } else {
    return ' ';
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
  return `
  [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
  return `
  ## License
  The application is covered under the following license:
  ${renderLicenseLink(license)}
    `;
  } else {
    return ' ';
  }
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

  ${renderLicenseBadge(data.license)}

  ## Table of Contents 
  * [Description](#description)
  * [User Story](#userStory)
  * [Usage](#usage)
  * [Technologies] (#technologies)
  * [Credits] (#credits)
  * [Contributors](#contributors)
  * [License](#license)
  * [GitHub](#githubUsername)
  * [Email](#email)

  ## Description
  ${data.description}

  ## Project Links
  ${data.userStory}

  ## Usage
  ${data.usage}

  ## Technologies
  ${data.technologies}

  ## Liscense
  ${data.license}

  ## GitHub
  ${data.githubUsername}

  ## Email
  ${data.email}

  ` ;
}

module.exports = generateMarkdown;
