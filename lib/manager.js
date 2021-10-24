// This is the Manager class that will of course inherit the team class attributes

const team = require('./team');

class manager extends team {
    constructor(name,id,email,office){
        super(name,id,email);
        this.office=office;
    }

    getOffice(){
        return this.office
    };

    getTitle(){
        return "Manager"
    };
}

module.exports = manager