const Employee = require("./Employee")

class Engineer extends Employee {

    constructor(name, id, email, gitHubUser) {
        super(name, id, email);
        this.github = gitHubUser;
    }   

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;
