var inquirer = require("inquirer");
var fs = require("fs");
var util = require("util");
var writeFileAsync = util.promisify(fs.writeFile);

// Array of questions for the user
function promptUser() {
  return inquirer.prompt([{
      type: "input",
      name: "name",
      message: "Please enter your name:"
    },
    {
      type: "input",
      name: "month",
      message: "What month did you complete this project?",
    },
    {
      type: "number",
      name: "year",
      message: "What year did you complete this project?",
    },
    {
      type: "input",
      name: "projectTitle",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "What is the description of your project?",
    },
    {
      type: "input",
      name: "screenshots",
      message: "Please enter any URLs for screenshots relevant to this project, or type <skip>. If you type <skip>, that portion of the document will not generate.",
    },
    {
      type: "input",
      name: "installation",
      message: "What instructions are necessary to install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "How would you describe the usage of your project:",
    },
    {
      type: "list",
      name: "license",
      message: "Which License would you like to use? If you choose not to include a license, that portion of the document will not generate:",
      choices: ["MIT", "GNU General Public", "Apache", "None"],
    },
    {
      type: "input",
      name: "contributing",
      message: "If you would like people to contribute to your work, please explain how they can:",
    },
    {
      type: "input",
      name: "tests",
      message: "Please describe any tests you conducted with the proper results:",
    },
    {
      type: "input",
      name: "questions",
      message: "Please provide your email for questions related to the project:",
    },
    {
      type: "input",
      name: "github",
      message: "Please enter your GitHub username and repository URL for this project:",
    },
  ]);
}