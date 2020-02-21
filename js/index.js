  
/*let stud1 = {name:"JJ Dela Cruz", section:"2ITH", age:21};
let stud2 = {name:"Pedo Bear", section:"2ITH", age: 22};
function displayInfo(){
    console.log(`${this.name}, ${this.age} is enrolled in section ${this.section}`)
}
let x = displayInfo.bind(stud1);
x();
------------------------------------------------------------------------------------------------------------------
class Student{
    constructor(name, section, age){
        this.name = name;
        this.section = section;
        this.age = age;
    }
    static study(subject){
        document.write(`<h2>${this.name} is enrolled in ${subject}</h2>`);
    }
}
let stud1 = new Student("Cathy Garcia", "2ITH", 69);
Student.study("ICS2609");

------------------------------------------------------------------------------------------------------------------

class Student{
    setName(name){
        this.name = name;
}
getName(){
    return this.name;
    }
}

let stud1 = new Student();
stud1.setName("JJ DC");
document.write(stud1.getName());

------------------------------------------------------------------------------------------------------------------

function Student(name, age, school){
    this.name = name;
    this.age = age;
    this.school = school;
}

Student.prototype.school = "UST";
Student.prototype.study = function(subject) {
    console.log(`${this.name} is enrolled in ${this.school}`)
}

let stud1 = new Student("jj", 21, "UST");
let stud2 = new Student("janjan", 19, "UST");

console.log(stud1.school);
console.log(stud2.school);

stud2.study("Math");

--------------------------------------------------------------------------------------------------------------------
let stud1 = {fname: "juan", lname: "dela cruz"};
let stud2 = {fname: "pedro", lname: "penduko"};

let details = [21, "IT"]

let displayName = function(age, course){
    console.log(`${this.fname} ${this.lname}, ${age}, is taking ${course}`)
}

displayName.apply(stud1, details);
--------------------------------------------------------------------------------------------------------------------------

let stud1 = {fname: "juan", lname: "dela cruz"};
let stud2 = {fname: "pedro", lname: "penduko"};


let displayName = function(age, course){
    console.log(`${this.fname} ${this.lname}`)
}

let function1 = displayName.bind(stud1);

function1();

--------------------------------------------------------------------------------------------------------------------------


class Student{
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    
}
let stud1 = new Student();
    stud1.setName("jjj");
    console.log(stud1.getName());

--------------------------------------------------------------------------------------------------------------------------


class Person{
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
    }

    walk(distance){
        console.log(`${this.name} can walk ${distance} kms per day.`)
    }
}


class Student extends Person{
    constructor(name, gender, course){
        super(name, gender);
        this.course = course;
    }

    study(subject){
        console.log(`${this.name} is enrolled in ${subject}`)
    }
}

let p1 = new Person("JJ dela pena", "rather not say");
let s1 = new Student("Gerome lang", "male", "Engineering");


p1 = s1;//p1 contains address and equating it to s1 then it's address now points towards s1
p1.study("Algebra")

--------------------------------------------------------------------------------------------------------------------------


function sayHello(){
    
}

try{
    sayHello()
}catch(e){
    console.log("an error has occured...");
}finally{
    console.log("finally block has executed...");
}

--------------------------------------------------------------------------------------------------------------------------


try{
    throw{message:"error bitch", description: "custom error..."}
}catch(e){
    console.log(e.description)
}finally{

}

--------------------------------------------------------------------------------------------------------------------------

*/

let add = function(num1, num2){
    return num1 + num2 ;
}

function fun(callback){
    let sum = callback(4, 5);
    console.log("sum = " + sum);
}
fun(add);