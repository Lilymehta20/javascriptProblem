console.log("Hello");
console.log("lily");
let a=5;
let b=10;
let c=a+b;
console.log("Sum:", c);
let pencilPrice = 10;
let erase =5;
console.log("total price:", pencilPrice+erase);
let output =`The total price is: ${pencilPrice+erase} Rupees.`;
console.log(output)

//operators
console.log(`Sum: ${a+b} Sub: ${a-b} Mul: ${a*b} Div: ${a/b}`);

//conditional stmt
let age = 18;
if(age>=18){
    console.log("you can vote");
}


let color ="red";
if (color!="red"){
    console.log("ready");
}
console.log("not ready");

let marks =45;
if(marks>=80){
    console.log("A+");
}
else if(marks>=60){
    console.log("A");
}
else if(marks>=30){
    console.log("B");
}
else if(marks<30){
    console.log("C")
}

let ages=21;
if(ages>=18){
    console.log("you can vote");
}else{
    console.log("you can't vote");
}

let size = 'XL';
if(size==='XL'){
    console.log("price is 250");
}else if(size==='L'){
    console.log("price is 200");
}else if(size==='M'){
    console.log("price is 100");
}
else{
    console.log("price is 50")
}

//nested if-else
let mark =50;
 if (mark>=33){
    if (mark>=80){
        console.log("Grade: O");
    }
    else{
        console.log("Grade: A");
    }
 }else{
    console.log("better luck next time");
 }

 let num = 12;
 if(num%3==0 && num+1==15 || num-1==11){
    console.log("safe");
 }else{
    console.log("unsafe");
 }

 let str = "armaan";
 if (str[0] === 'a' && str.length > 3){
    console.log("good string");
 }else{
    console.log("not a good string");
 }

 //truthy & falsy
 if(true){
    console.log("it has true value");
 }else{
    console.log("it has false value");
 }

 //switch stmt
let colors = "red";
switch(color){
    case "red" :
        console.log("Stop");
        break;
    case "yellow" :
        console.log("slow down")
        break;
    case "green" :
        console.log("Go");
        break;
    default :
        console.log("Broken light");
}


let day  = 5;
switch(day){
    case 1 :
        console.log("Monday")
        break;
    case 2 :
        console.log("Tuesday");
        break;
    case 3 :
        console.log("Wednesday");
        break;
    case 4 :
        console.log("Thrusday");
        break;
    case 5 :
        console.log("Friday");
        break;
    case 6 :
        console.log("Saturday");
        break;
    case 7 :
        console.log("Sunday");
        break;
    default :
        console.log("No days");
}

//alert & prompt
//alert("something is wrong");
console.log("lily");
console.error("this is an error msg");
console.warn("this is warning msg");

// let firstName = prompt("enter name");
// console.log(firstName);  

//Js(part-2)
let nums =80;
if(nums%10==0){
    console.log("good");
}
else{
    console.log("bad");
}

let name = prompt("enter name");
let agess=prompt("enter age");
alert(`${name} is ${agess} years old.`);
