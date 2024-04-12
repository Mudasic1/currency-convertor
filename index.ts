#! /usr/bin/env node

import inquirer from "inquirer";

const Currency: any = {
  USD: 1,
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280,
};

let user_answar = await inquirer.prompt([
  {
    name: "from",
    message: "Enter from Currency: ",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "to",
    message: "Enter to Currency: ",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "amount",
    message: "Enter your amount: ",
    type: "number",
  },
]);
let fromAmount = Currency[user_answar.from];
let toAmount = Currency[user_answar.to];
let Amount = user_answar.amount;
let baseAmount = Amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
