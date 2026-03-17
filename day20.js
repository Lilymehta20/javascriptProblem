//print from 1-5 using forEach method of an array
let arr = [1,2,3,4,5];

let print = function (el) {
    console.log(el);
};
arr.forEach(print);

arr.forEach((el) => {
    console.log(el);
});

arr.forEach(function (el) {
    console.log(el);
});


const student = [
    {
        name : "simran",
        marks : 95,
    },
    {
        name : "gaurav",
        marks : 92,
    },
    {
        name : "lily",
        marks : 97,
    },
];

student.forEach((el) => {
    console.log(el.marks);
});

//map array method
let num = [1,2,3,4];

let double = num.map((el) => {
    return el*2;
});

let gpa = student.map((el) =>{
    return el.marks/10;
});

//filter array method
let nums = [1,2,3,4,7,8,9,10,11,12];
let ans = nums.filter((ele) => {
    return ele %2 == 0;
});


// reduce method 
let result =[2,4,6,3];
let final = result.reduce((res,el) => {
    console.log(res);
    return res-el;
});
console.log(final);


let arr1 = [1,4,2,5,6,7,2,9,2];
 let max = arr1.reduce((res,el) => {
    if(res > el){
        return res;
    }else{
        return el;
    }
 });
 console.log(max);


 //check if all numbers in our array are multiples of 10 or not
 let arr2 = [10,20,50,60,80,600];
 let multipleOfTen = arr2.every( (res) => (res % 10 == 0));
 console.log(multipleOfTen);
 

 // create a function to find the minimum number in an array
 function getMin(number){
    let min = number.reduce((res,el) => {
    if(res < el){
        return res;
    }else{
        return el;
    }
 });
 return min;
 }
 let number = [0, -1, 3, 5, 4];
 console.log(getMin(number));

 //default parameter
 function add(a,b){
    return a+b;
 }

 //spread
 const data = {
    email : "lilymehta20@gmail.com",
    password : "abcde",
 };

 const dataCopy = {...data, id:123};

 //rest
 function addition(...args) {
    for(let i =0;i<args.length;i++){
        console.log("you gave us",args[i]);
    }
 }

 function min(){
    console.log(arguments);
 }

 //Destructuring
 let names = ["tony","lily","dimpi","seema"];
//  let winner = names[0];
//  let runnerup = names[1];

let [winner , runnerup, ...others] = names;
console.log(winner,runnerup,...others);

