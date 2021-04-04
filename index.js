const fs = require('fs')

const inquier = require('inquirer');
const {
    inflateRawSync
}  = require('zlib');

const Engineer = require('./library/Engineer')
Const Employee = require()
Const Intern = require()
const Manager = require()

const generatePage = require()
const writeHTML = require()

const team = []


function getInfo () {
    inquier.prompt([{
            type: 'input'
            name: "name"
            message: "Employees Name"
            validate: nameInput => {
                if (nameInput) {
                    if (nameInput) {
                        return true;
                    }   else {
                        console.log("Please enter team members name.")
                    }
                }
            }
    }]
}