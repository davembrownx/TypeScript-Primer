class Student {
    
    fullName: string;
    constructor(public firstName: string, public middleInitial:string, public lastName:string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
class Teacher{
    firstName: string;
    lastName: string;
}
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Teacher) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let student = new Student("Jason", "Robert", "Monroe");

document.body.innerHTML = greeter(student);