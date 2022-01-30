// import { add } from './data.js';

// temeplate literas
// object destrcutring
// array destructuring
// object literal is basically if we have decalared variables and we dont want to declare it onc again but we want the same values so in that case we can use keys of the objects
//for of loop
//spread operator with array and obj is basically if we want to use the same values as above array or object then we dont have to copy the whole array of object we can simply use ... with name of the array or object
// Rest Operator is basiclly when we are passing paramter in function and we dont know how many arguments are we going to assign then we use rest operator '...'
// arrow function
//8:default params is basically if you're not passing the argumnt then you can directly assing that argument in paramter itself
//include is basiclly it returns true or false 
//import and export
//classes and inheritance
//promises is basically if and then rules only if this happend then do this otherwise dont
//fetch is basically if you want to get the data of any api you can use fetch for that purpose with .then
//async and await
//set is basically something which stores vavlues like arrays but it will not count the repeated values

// 1:object destructuring
const player = {
    name : "aslma",
    lst: "khan",
    age:22,
    eduction: "b.e",
    projects: {
        html: "hyd"
    }
};
const { name, age , projects: {html}} = player;
console.log(name);
console.log(age);
console.log(html);

// 2:array destructuring
let [name,brother,bro] = ["aslam","zubair","azher"];
console.log(name);
console.log(brother);
console.log(bro);



// 3:object literal
let fname = "aslam";
let lname = "khan";

console.log(fname);
console.log(lname);

let person ={
    fname,
    lname
}
console.log(person);

// 4:for of loop

let fruits = ["orange","apple","mango"]
for (const fruit of fruits) {
    console.log(fruits);
}

const students = [
    { name:"john",city:"hyd"},
    { name:"aslam",city:"delhi"}
]
console.log(students);
for (const student of students) {
    console.log(`${student.name} lives in ${student.city}`);
}

// 5:spread operator with array

let contacts = ["aslm","khan","zubair","khan"];

console.log(contacts);

let personal = [...contacts,"azher","rab"];
console.log(personal);

// with obj

let person ={
    name:"aslam",
    last:"khan"
}
console.log(person);
let contact = { 
    ...person,
    postion:"hr",
    salary:233333.00
}
console.log(contact);

const shop = ["milk","nut","butter"];
const basket = ["peanut",...shop,"pan"];
console.log(shop);
console.log(basket);


// 6:Rest Operator

function add(...num) {
    console.log(num);
}
add(4,5,56,6,4,345);

// 7: arrow function
const add = ()=>{
    console.log("this is arrow function");
}
add();

// 8:default params
const singer = (artist = "aslam")=>{
    console.log(`${artist} is great singer`)
}
singer("chris");

const food = (ok = "something")=>{
    console.log(`im going to buy ${ok} from market`);
}
food("milk");

// 9:includes
let arr = ["this","great","tut"];
console.log(arr.includes("this"));

const list = ["flour","sugar","eggs"];
if(list.includes("sugar")){
    console.log("we are making")
}else{
    console.log("we are not making anything");
}
// 10:import and export
let result = add(7,8);
console.log(result);

// 11:classes and inheritance

class Player {
    constructor(name,country){
        this.name = name;
        this.country = country;
    }
    add() {
        console.log(`${this.name} was born in ${this.country}`);
    }
}
console.log(Player);
let player = new Player("messi","argentina");
player.add();

class tennis extends Player{
    constructor(name, age,country){
        super(name,country);
        this.age = age;
    }
    sub(){
        console.log(`${this.name} is ${this.age} old and lives in ${this.country}`);
    }
}

let ten = new tennis("sania",34,"pakistan");
ten.sub();

// 12:promises

function buy() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const error = true;
            if(error){
                reject("sorry we can't pay");
            }else{
                resolve("thank you");
            }
        },3000);
    })
    
}
buy().then((success)=>{
    console.log(success);
}).catch((error)=>{
    console.log(error)
})

const user = new Promise((resolve,reject)=>{
    const error = false;
    setTimeout(() => {
        if(error){
            reject("sorry we cannt proceed");
        }else{
            resolve({
                name:"aslam",
                last:"khan",
                email:"akkhans@gmail.com"
            });
        }
    }, 3000);
    
})
user.then((success)=>{
    console.log(success);
}).catch((error)=>{
    console.log(error);
})

// 13:fetch https://jsonplaceholder.typicode.com/todos/

fetch('https://jsonplaceholder.typicode.com/todos/').then(response => response.json()).then(data => console.log(data));

fetch('https://jsonplaceholder.typicode.com/Comments', {
    method : 'POST',
    body: JSON.stringify({
        postId: 1,
        name:"aslam",
        age:22,
        email:"akkhans@gmail.com",
        body:"this is great",
    })
}).then((response) => response.json()).then((data)=> console.log(data));

const user = new Promise((resolve,reject)=>{
    const error = false;
    setTimeout(() => {
        if(error){
            reject("no");
        }else{
            resolve({
                name:"aslam",
                last:"khan"
            })
        }
    }, 2000);  
})
user.then((success)=>{
    console.log(success);
}).catch((error)=>{
    console.log(error);
})

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json()).then((data)=> console.log(data));

// 14:Async and await

const photos = [];
async function upload() {
    let status = new Promise((resolve , reject) =>{
        setTimeout(() => {
            photos.push("profile.pic");
            resolve("uploaded");
        }, 3000);
    })
    let result = await status;
    console.log(result);
    console.log(photos.length);
    
}
upload();

const api = "https://api.chucknorris.io/jokes/random";
async function joke() {
    let status = await fetch(api);
    let data = await status.json();
    console.log(data.value);
}
joke();

const data = "https://api.chucknorris.io/jokes/random";
async function random() {
    let response = await fetch(data);
    let rej = await response.json();
    console.log(rej.value);
}
random();

// 15:set

let list = new Set([1,2,2,3,4,4,55,6,6,7,8,99,9,]);
console.log(list.size);
list.add(90);
console.log(list);
console.log(list.has(3));



