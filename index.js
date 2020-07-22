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
        "Please enter your GitHub username and repo URL for this project:",
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

    if (answers.license === "MIT") {
      badge =
          "[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)";
      answers.license = `MIT License
Copyright (c) ${answers.year} -- ${answers.name}
  
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
  
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
  
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;
  }