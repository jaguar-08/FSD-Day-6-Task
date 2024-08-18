
class person{
    constructor(name, college, address, email,job, salary) {
        this.name = name;
        this.college = college;
        this.address = address;
        this.email = email;
        this.job = job;
        this.salary = salary;
    }

    getDetails() {
        return ( "This person "  + this.name  + " is studied in "  + this.college)
       
    }
}

const person1 = new person("dhanush", "panimalar", "alangayam", "dhanushjayakumar2","webdeveloper", 100000);

const person2 = new person("tharun", "pec", "vnb", "tharungaming","fullstackdeveloper", 200000);

console.log(person1.getDetails())
console.log(person2.getDetails())
