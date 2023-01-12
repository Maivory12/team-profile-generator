// Packages needed for this application

const fs = require("fs")
const inquirer = require("inquirer")

// Package for team memebers

const Employee = require("./library/employee")
const Engineer = require("./library/engineer")
const Intern = require("./library/intern")
const Manager = require("./library/manager")

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
            const manager = new Manager (name, ID, email, officeNumber);
            team.push(manager);
            console.log(manager);
        })
    
}

// Prompts to add an Employee
const addEmployee =() => {
    console.log(`Adding Employee`)
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            choices:["Engineer","Intern"]
        },
        {
            type:"input",
            name:"name",
            message:"What is the employee's name?",
        },
        {
            type:"input",
            name:"ID",
            message:"What is the employee's ID?",  
        }, 
        {
            type:"input",
            name:"email",
            message:"What is the employee's email address?"
        },
        {
            type:"input",
            name:"github",
            when:(input) => input.role === "Engineer",
            message:"What is the employee's github?"
        },
        {
            type:"input",
            name:"school",
            when: (input) => input.role === "Intern",
            message:"What school is the intern attending?",
        },
        {
            type:"confirm",
            name:"anotherEmployee",
            message:"Would you like to add another employee?",
            defalut: false
        }
    ])
   
}

// Function call to initialize app
addManager();