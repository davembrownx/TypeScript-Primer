interface Person {
    firstName: string;
    lastName: string;
}

class Teacher implements Person{
    firstName: string;
    lastName: string;
}

class Student implements Person {
    
    fullName: string;
    constructor(public firstName: string, public middleInitial:string, public lastName:string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}


function greeter(person : Teacher) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

//Student and Teacher have same shape
let student = new Student("Jason", "Robert", "Monroe");
let teacher = new Teacher();
teacher = student;//valid typescript

document.body.innerHTML = greeter(student);
console.log(greeter(teacher));