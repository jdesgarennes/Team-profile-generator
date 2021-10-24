// This is the engineer class that will of course inherit the team class attributes

const team = require('./team');


class deadweight extends team {
    constructor(name,id,email,facebook) {
        super(name,id,email);
        this.facebook = facebook;
    }

    getFacebook(){
        return this.facebook
    };

    getTitle(){
        return "Deadweight"
    };
}

module.exports = deadweight