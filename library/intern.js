// importing Employee constructor     
 const Employee = require('./employee');

 // intern constructor extends emplayee constructor
 class Intern extends Employee {
    constructor (name, ID, email, school){
        // calls employee constructor
        super (name,ID,Email)

        this.school = school;

    }

    //retrieves school input
    getSchool(){
        return this.school;
    }

    // overrides to intern role
    getRole (){
        return "Intern";
    }
    }

module.exports = Intern;