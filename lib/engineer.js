// This is the engineer class that will of course inherit the team class attributes

const team = require('./team');


class engineer extends team {
    constructor(name,id,email,github) {
        super(name,id,email);
        this.github = github;
    }

    getGithub(){
        return this.github
    };

    getTitle(){
        return "Engineer"
    };
}

module.exports = engineer