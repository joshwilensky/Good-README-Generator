"use strict";
var inquirer = require("inquirer");

console.log("Hello and Welcome to The Inquirer Burger!");

var questions = [
  {
    type: "input",
    name: "toBeDelivered",
    message: "Will this be for pick-up or delivery?",
  },
  {
    type: "input",
    name: "phone",
    message: "What's your phone number?",
    validate: function (value) {
      var pass = value.match(
        /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
      );
      if (pass) {
        return true;
      }

      return "Please enter a valid phone number";
    },
  },
  {
    type: "input",
    name: "addressObject",
    message: "What is your address?",
  },
  {
    type: "checkbox",
    name: "burger",
    message: "What kind of burger would you like?",
    choices: ["Classic", "Breakfast", "Bacon Cheese Burger", "Impossible"],
  },
  {
    type: "input",
    name: "quantity",
    message: "How many do you need?",
    validate: function (value) {
      var valid = !isNaN(parseFloat(value));
      return valid || "Please enter a number";
    },
    filter: Number,
  },
  {
    type: "expand",
    name: "toppings",
    message: "Which toppings would you like?",
    choices: [
      {
        key: "b",
        name: "bacon",
        value: "bacon",
      },
      {
        key: "c",
        name: "onions",
        value: "onions",
      },
      {
        key: "e",
        name: "egg",
        value: "egg",
      },
      {
        key: "Kitchen Sink",
        name: "Would you like the whole kitchen sink?",
        value: "sink",
      },
    ],
  },
  {
    type: "checkbox",
    name: "beverage",
    message: "As a promotion today, you get a free 2-Ltr drink!",
    choices: ["RC Cola", "Pepsi Clear", "Slice Orange", "TAB", "Surge"],
  },
  {
    type: "input",
    name: "comments",
    message: "Would you like to leave a comment about your experience?",
    default: "No, thank you! You were perfect today!!!",
    when: function (answers) {
      return answers.comments !== "No, thank you! You were perfect today!!!";
    },
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log("\nOrder receipt:");
  console.log(JSON.stringify(answers, null, "  "));
});
