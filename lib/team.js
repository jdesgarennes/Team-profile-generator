
// This module will have a class that has all the commone attributes for all the team members.
class team {
constructor (name, id, email) {
this.name = name;
this.id = id;
this.email = email;
}

getName(){
    return this.name
};
getId(){
    return this.id
};

getEmail(){
    return this.email
};



}

module.exports = team;