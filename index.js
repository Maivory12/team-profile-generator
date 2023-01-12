// Packages needed for this application

const fs = require("fs")
const inquirer = require("inquirer")

// Package for team memebers

const employee = require("./library/employee")
const engineer = require("./library/engineer")
const intern = require("./library/intern")
const manager = require("./library/manager")

// Package for generated html file

const generatedHtml = require("./src/genereatedHtml")

// Team members
const team = [];

// Prompts for adding a manager
const addManager = () => {
    return inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"What is the name of the manager of the team?",
        },
        {
            type:"input",
            name:"ID",
            message:"What is the manager employee ID?",
        },
        {
            type:"input",
            name:"email",
            message:"what is the manager email address?",
        },
        {
            type:"input",
            name:"officeNumber",
            message:"What is the office number?",
        },
    ])
        .then (managerInput=>{
            const {name, ID, email, officeNumber} = managerInput;
            const manager = new Maneger (name, ID, email, officeNumber);
            team.push(manager);
            console.log(manager);
        })
    
}

