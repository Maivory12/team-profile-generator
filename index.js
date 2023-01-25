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
    
    .then (employeeInput =>{
        let {role, name, ID, email, github, school, anotherEmployee} = employeeInput;
        let Employee;

        // Assigning input to engineer
        if (role === "Engineer"){
            Employee = new Engineer (name, ID, email, github);
            console.log(Employee)
        }

        //Assigning input to Intern
        if (role === "Intern"){
            Employee = new Intern (name, ID, email, school)
            console.log(Employee)
        }
        team.push(Employee);

        // to add more employees
        if (anotherEmployee){
            return addEmployee(team);
        }
        else {
            return team;
        }
    })
   
}

// function to generate the HTML
const writeFile = data =>{
    fs.writeFile("./dist/newHtml.html", data, err=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("Your team profile has been generated successfully! Please check the newHtml.html")
        }
    })
};

// Function call to initialize app and path to step through command line
addManager()
    .then (addEmployee)
    .then (team =>{
        return generatedHtml(team)
    })
    .then (pageHTML=>{
        return writeFile(pageHTML);
    })
    .catch (err=>{
        console.log(err);
    })