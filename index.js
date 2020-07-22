var inquirer = require("inquirer");
var fs = require("fs");
var util = require("util");
var writeFileAsync = util.promisify(fs.writeFile);

// Array of questions for the user
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter your name:",
    },
    {
      type: "number",
      name: "year",
      message: "What year is it?",
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
      message:
        "Please enter any URLs for screenshots relevant to this project; or type <skip>. If you type <skip>, the screenshot portion of the document will not generate.",
    },
    {
      type: "input",
      name: "installation",
      message: "What installations did you use to build your README file?",
    },
    {
      type: "input",
      name: "usage",
      message: "Describe the usage of your project:",
    },
    {
      type: "list",
      name: "license",
      message:
        "Which license will you be using for your README file? (If you choose not to include a license, that portion of the document will not generate):",
      choices: ["MIT", "GNU General Public", "Apache", "None"],
    },
    {
      type: "confirm",
      name: "contributing",
      message: "Would you like people to contribute to your work?",
      default: ["Y/N"],
    },
    {
      type: "input",
      name: "tests",
      message:
        "Please describe the tests you generated with the proper results:",
    },
    {
      type: "input",
      name: "questions",
      message:
        "Please provide your email for questions related to the project:",
    },
    {
      type: "input",
      name: "github",
      message:
        "Please enter your GitHub username and repository URL for this project:",
    },
  ]);
}

// function to write README file

function generateREADME(answers) {
    // Logic for if the user declares they don't want to include screenshots in their README
    let showScreenshots = answers.screenshots !== "<skip>";

    if (answers.screenshots === "<skip>") {
        answers.screenshots = "";
    }
