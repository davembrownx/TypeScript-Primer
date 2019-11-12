var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    return Teacher;
}());
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
//Student and Teacher have same shape
var student = new Student("Jason", "Robert", "Monroe");
var teacher = new Teacher();
teacher = student; //valid typescript
document.body.innerHTML = greeter(student);
console.log(greeter(teacher));
