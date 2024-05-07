#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.cyanBright.bold(" Welcome To My Currency Convertor App"));
let currency = {
    USD: 1,
    PKR: 277.70,
    INR: 84,
    EUR: 0.92,
    SOM: 89.34,
    DINAR: 0.31 //Kuwaiti Dinar
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: chalk.blueBright('Select your currency.'),
        type: 'list',
        choices: ['USD', 'PKR', 'INR', 'EUR', 'SOM', 'DINAR']
    },
    {
        name: 'amount',
        message: chalk.gray('How much ammount you want to convert?'),
        type: 'number'
    },
    {
        name: 'to',
        message: chalk.gray('Select currency you want to convert.'),
        type: 'list',
        choices: ['USD', 'PKR', 'INR', 'EUR', 'SOM', 'DINAR']
    }
]);
//perform currency convertor by using formula
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
//formula of conversion
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
//dispaly the converted amount
console.log(`converted Amount =${chalk.green(convertedAmount.toFixed(2))}`);
