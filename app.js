const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
// const path = require("path");
// const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("htmlRenderer");

const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is the employee\'s name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee\'s I.D number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employee\'s email address?'
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is the employee\'s role in the company?',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is the manager\'s office number?',
            when: answers => answers.role === "Manager"
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is this engineers\'s github username?',
            when: answers => answers.role === "Engineer"
        },
        {
            type: 'input',
            name: 'school',
            message: 'Where did this intern go to school?',
            when: answers => answers.role === "Intern"
        }
    ]
    inquirer.prompt(questions).then(answer => {
        const employee = {
            name: answer.name,
            email: answer.email,
            role: answer.role
        }
        console.log(employee)   
    });




// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
