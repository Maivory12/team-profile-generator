// Imports employee constructor
const Employee = require("./employee");

// manager constructor extends employee constructor
class Manager extends Employee{
    constructor (name, ID, email, officeNumber){

        super(name, ID, email);

        this.officeNumber = officeNumber;
    }

    // override employee tag to manager
        getRole(){
            return "Manager";
        }
}

// to be exported
module.exports = Manager