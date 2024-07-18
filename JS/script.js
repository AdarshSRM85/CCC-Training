// function fun(a,b){
//     let y = a+b;
//     console.log(y);
//     return undefined;
// }

// let p = function(){
//     console.log("hello");
// };

// let k = (a,b) =>{
//     return 65+10+a+b;
// };

// let d = k(10,10);
// console.log(d);

// let person = {
//     firstName: "raj",
//     age: 30,
//     aboutMe: function(){
//         console.log(`${this.firstName} is ${this.age}`);
//     },
//     skills:["football", "cricket"]
// };

// let copyPerson = Object.assign( { }, person);
// copyPerson.firstName = "rajat";
// copyPerson.skills[0] = "basketball";
// copyPerson.age = 40;

// console.log(copyPerson);
// console.log(person);
// console.log(person.skills[0]);
// console.log(copyPerson.skills[0]);
// console.log(person.age);
// console.log(copyPerson.age);

// destructing arrays
// let arr = [1,2, [3,4] ];
// let e = arr[0];
// let e1 = arr[1];
// let [x,y,[z,t]] = arr;
// [x,y] = [y,x];

// console.log(x,y,z,t);

// let person  = {
//     firstName: "raj",
//     age: 40,
//     skills:["programming", "cricket"],
//     a: 45
// };

// let {skills: mySkills, age, firstName} = person;
// console.log(mySkills, age, firstName);

// mySkills.push(40);
// console.log(mySkills);
// console.log(person.skills);



//spread operator ...

// let arr = [1,2,3,4]
// let h = [7,8,9];
// h.push(10);
// // console.log(h,arr);
// let t = [...h, ...arr];

// // t.push(45);
// // console.log(arr);
// console.log(t);

// let [a, ,...c] = t;
// console.log(a);
// // console.log(b);
// console.log(c);


// let person  = {
//     firstName: "raj",
//     age: 40,
//     skills:["programming", "cricket"],
// };

// let raj = {
//     height: 52,
//     ...person,
// };

// raj.firstName="kiran";
// console.log(raj);
// console.log(person);


//rest operator

// let person = {
//   firstName: "raj",
//   age: 40,
//   skills: ["programming", "cricket"],
// };

// let {firstName: fname, ...restPerson} = person;
// console.log(fname);
// console.log(restPerson);

"use strict";

/*Oop 
    inher
abstr 
polym
encap

classes
    constructor functions
    ES6 classes
    object.create()
*/

// let person = function(firstName, age)
// {
//     this.firstName = firstName;
//     this.age = age;
//     this.aboutMe = function()
//     {
//         console.log(`hi, ${this.firstName} ${this.age}`);
//     };
//     // console.log(this);
// }

// let divya = new person("adarsh", 21);
// divya.height = 5;
// console.log(divya.firstName);
// console.log(divya);
// console.log(new person());
// divya.aboutMe();

// person.prototype.gender = "None"; //property to prototype
// person.prototype.aboutMe = function() { //methods to prototype
//     console.log(`hi, ${this.firstName} ${this.age}`);
// };

// console.log(person.prototype);
// console.log(divya._proto_);
// console.log(person.prototype === divya._proto_);

// console.log(divya instanceof person);
// console.log(divya instanceof Object);

// let arr = [1,2,3];
// console.log(arr._proto_ == Array.prototype);
// console.log(Array.prototype);
// console.log(arr);

// person.staticMethod = function() {
//     console.log("i am static");
// };
// let adarsh = new person("adarsh", 20);
// console.log(person);
// person.staticMethod();

// let h = Number.parseInt("50");
// let b = 25;
// console.log(h);

// class personC1{
//     #age;
//     #firstName;

//     constructor(firstName, age){
//         this.#firstName = firstName;
//         this.#age = age;
//     }

//     getAge() {
//         return this.#age;
//     }

//     setAge(age){
//         this.#age = age;
//     }

//     getFirstName() {
//         return this.#firstName;
//     }

//     setFirstName(k) {
//         this.#firstName = k;
//     }

    // get firstName() {
    //     return this.firstName;
    // }

    // set firstName(k) {
    //     this.firstName = k;
    // }
    
//     aboutMe() {
//         console.log(`hi, ${this.#firstName} ${this.#age}`);
//     }

//     greet(msg) {
//         console.log(`${msg} ${this.#firstName}`);
//     }

//     static staticMeth() {
//         console.log(`${this.firstName} hello`);
//     }
// }

// let divya = new personC1("adarsh", 20);
// console.log(divya);
// console.log(divya.getAge());
// console.log(divya.getFirstName());

// let fruit = "apple";

// switch (fruit) {
//   case "apple":

//   case "mango":

//   case "pineapple":
//     console.log(`${fruit} is a fruit.`);

//     break;

//   default:
//     console.log(`${fruit} is not a fruit.`);

//     break;
// }

// let a = 1;

// switch (a) {
//   case 1:
//     a = "one";

//     break;

//   case 2:
//     a = "two";

//     break;

//   default:
//     a = "not found";

//     break;
// }

// console.log(`Value is ${a}`); 

// function compare()

// {

// int digital=1;

// char javascript=1;

// if(digital.tostring()===javascript)

// return true;

// else

// return false;

// } 

// let count = 0;

// while (count < 3) {
//   console.log("Hello");

//   count++;
// } 

// for (let i = 0; i < 5; i++) {
//   if (i === 2) {
//     continue;
//   }

//   console.log(i);
// } 

// for (let i = 0; i < 5; i++) {
//   if (i === 2) {
//     continue;
//   }

//   console.log(i);
// }

// let fruit = "apple";

// switch (fruit) {
//   case "apple":

//   case "mango":
//     console.log(`${fruit} is a fruit.`);

//     break;

//   default:
//     console.log(`${fruit} is not a fruit.`);

//     break;
// } 

// int size=5;

// int a=5;

// int size=4;

// for(int j=size;j>=0;j--)

// {

// console.log(a);

// a=a-2;

// } 