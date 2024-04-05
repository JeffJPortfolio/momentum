//const is non changing variable, while let can be updated
const a = 5;
const b = 6;
let myName = "Jeff";
const amIFat = true ;
//null have to be assigned but undefined value can be created by making only const while not defining it, so it can only be used with let
let something;
//array format
const arr1 = [a, b, myName, amIFat, something];


console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("Ore Wa" + myName);
console.log(arr1);

myName = "HyunOh";

console.log("My Korean Name is" + myName) ;

//to get item at certain index use array[index]
arr1.push("weeks");
console.log(arr1);

const player = {
    name: "Jeff",
    point: 0,
    fat: true,
    sayHello1: function(otherName){
        console.log("Hello " + otherName);
    }
} ;

console.log(player);
console.log(player.name);
console.log(player["name"]);
player.fat = false;
//if you want to add new property you could do
player.lastName = "Jeon";
player.point = player.point + 15 ;

function sayHello(nameOfPerson, age){
    console.log("Hello I am " + nameOfPerson + " and I am "  + age + " years old") ;
}

sayHello(player.name, 26);

const calculator = {
    add: function(x , y){
        console.log(x+y);
    } ,
    sub: function(x , y){
        console.log(x-y);
    } ,
    mult: function(x , y){
        console.log(x*y);
    } ,
    div: function(x , y){
        console.log(x/y);
    } ,
    power: function(x , y){
        console.log(x**y);
    } 
}
//dont use it cos we cant design it
const age = parseInt(prompt("How Old Are You?"));
console.log(age);
//isNaN give boolean answer if  the variable is a number or not so if it is flase then it give ture
console.log(isNaN(age));

parseInt("15")

// ||  or && and
if (isNaN(age)) {
    console.log("Please write a number");
} else if (age < 18) {
    console.log("You are too young");
} else if (age >= 18 && age < 50) {
    console.log("You are old enough to drink");
} else {
    console.log("Thank");
}