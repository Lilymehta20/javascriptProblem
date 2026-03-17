//functions without argument

function hello() {
    console.log("lily mehta");
}

hello();

function print1to5(){
    for(let i=0;i<=5;i++){
        console.log(i);
    }
}
print1to5();

function isAdult(){
    let age =13;
    if(age>=18){
        console.log("adult");
    }
    else{
        console.log("not adult");
    }
}
isAdult();

function poem(){
    console.log("Twinkle-Twinkle little star");
    console.log("How I wonder what you are");
    console.log("Up above the world so high");
    console.log("like a diamond in the sky!!");
}

poem();

function dice(){
    let roll = Math.floor(Math.random()*6) +1;
    console.log(roll);
}
dice();

//functions with argument

function printName(name){
    console.log(name);
}
printName("lily");


function sum(a,b){
    console.log(a+b);
}
sum(5,5);

function average(a,b,c){
    console.log((a+b+c)/3);
}
average(5,10,6);

function table(n){
    for(let i=1;i<=10;i++){
        console.log(n*i);
    }
}
table(5);


// return keyword
function table1(a,b){
        return a+b;
    }
console.log(table1(20,5));


function sumOfN(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum +=i;
    }
    return sum;
}
console.log(sumOfN(5));


let str = ["hello","hi","I","am","lily"];
function concat(str){
    let result ="";

    for(let i=0;i<str.length;i++){
        result += str[i];
    }
    return result;
}
console.log(concat(str));


//function scope
let sum1=54;  //global scope

function calSum(a,b) {
    let sum1 = a+b;     //function scope
    console.log(sum1);
}
calSum(3,5);
console.log(sum1);


// lexical scope
function OuterFunc(){
    let x=5;
    let y=6;
    function innerFunc(){
        console.log(x);
    }
    innerFunc();
}


let greet="hello";

function changeGreet(){
    let greet ="namaste";
    console.log(greet);
    function innerGreet(){
        console.log(greet);
    }
}
console.log(greet);
changeGreet();

// function expression

let sum2 = function(a,b){
    return a+b;
}

//highorder function
function multipleGreet(func,count){
    for(let i=1;i<=count;i++){
        func();
    }
}

    let greet1 = function(){
        console.log("hello");
    }
    multipleGreet(greet1,5);


function oddEvenTest(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }
    else if(request=="even"){
        return function(n){
            console.log(n%2==0);
        }
    }else{
        console.log("wrong request");
    }
}

//function method

const calculator = {
    num: 55,
    add: function(a,b){
        return a+b;
    },

    sub: function(a,b){
        return a-b;
    },

    mul: function(a,b){
        return a*b;
    }
};




