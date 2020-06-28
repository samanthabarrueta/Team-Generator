const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require('./lib/htmlRenderer');
const employees = [];

const generateEmployees = () => {
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
            name: 'officeNumber',
            message: 'What is the manager\'s office number?',
            when: answers => answers.role === 'Manager'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is this engineers\'s github username?',
            when: answers => answers.role === 'Engineer'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Where did this intern go to school?',
            when: answers => answers.role === 'Intern'
        },
        {
            type: 'list',
            name: 'continue',
            message: 'Would you like to add another employee?',
            choices: ['yes', 'no']
        }
    ]
    inquirer.prompt(questions).then(answers => {   
        if (answers.role === 'Manager') {
            const { name, id, email, officeNumber } = answers;
            employee = new Manager(name, id, email, officeNumber);
            employees.push(employee);
        } else if (answers.role === 'Engineer') {
            const { name, id, email, github } = answers;
            employee = new Engineer(name, id, email, github);
            employees.push(employee);
        } else if (answers.role === 'Intern') {
            const { name, id, email, school } = answers;
            employee = new Intern(name, id, email, school);
            employees.push(employee);
        }

        if (answers.continue === 'yes') {
            generateEmployees();
        } else if (answers.continue === 'no') {
            fs.writeFile(outputPath, render(employees), (err) => {
                if (err) throw err;
                console.log('Saved!');
            });
        }
    });
}

generateEmployees();


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
