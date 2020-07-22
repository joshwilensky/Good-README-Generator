var inquirer = require("inquirer");
var fs = require("fs");
var util = require("util");
var writeFileAsync = util.promisify(fs.writeFile);

// Array of questions for the user
function promptUser() {
  return inquirer.prompt([{
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
      message: "Please enter any URLs for screenshots relevant to this project; or type <skip>. If you type <skip>, the screenshot portion of the document will not generate.",
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
      message: "Which license will you be using for your README file? (If you decide not to include a license, that section of the document will not generate)",
      choices: ["MIT", "BSD 3-Clause License", "Apache", "None"],
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
      message: "Please describe the tests you generated with the proper results:",
    },
    {
      type: "input",
      name: "questions",
      message: "Please provide your email for questions related to the project:",
    },
    {
      type: "input",
      name: "github",
      message: "Please enter your GitHub username and repo URL for this project:",
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
  if (answers.license === "BSD License") {
    badge =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    answers.license = `BSD 3-Clause License
    Note: This license has also been called the "New BSD License" or "Modified BSD License". See also the 2-clause BSD License.

Copyright <YEAR> <COPYRIGHT HOLDER>

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;
  }