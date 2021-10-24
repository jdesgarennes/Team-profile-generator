// This is the intern class that will of course inherit the team class attributes

const team = require('./team');

class intern extends team {
    constructor(name,id,email,school){
        super(name,id,email);
        this.school=school;
    }

    getSchool(){
        return this.school
    };

    getTitle(){
        return "intern"
    };
}

module.exports = intern