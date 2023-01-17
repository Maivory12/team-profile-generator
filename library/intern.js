// importing Employee constructor     
 const Employee = require('./employee');

 // intern constructor extends emplayee constructor
 class Intern extends Employee {
    constructor (name, ID, email, school){
        // calls employee constructor
        super (name,ID,Email)

        this.school = school;

    }
 }