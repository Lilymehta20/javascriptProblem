// this keyword
// const student = {
//     name : "simran",
//     age : 23,
//     eng : 95,
//     math : 93,
//     phy : 97,
//     getAvg(){
//         console.log(this)
//         let avg = (this.eng+this.math+this.phy)/3;
//         console.log(`${this.name} got avg marks = ${avg}`);
//     }
// }

// try & catch
// console.log("hello");
// console.log("hello");
// let a=55;
// try{
// console.log(a);
// }catch(err){
//     console.log("error! a is not define");
//     console.log(err);
// }
// console.log("hello");
// console.log("hello");

// arrow functions
// const sum = (a,b) => {
//     console.log(a+b);
// };

// const cube = n => {
//     return n*n*n;
// };

// const pow = (a,b) => {
//     return a**b;
// };

// const  hello = () => {
//     console.log("hello BABE!")
// };

//    implicit return in arror function

// const mul = (a,b) => (
//     a*b
// );

// const cub = n => n+n+n;


// setTimeOut
// console.log("Hi there!");

// setTimeout(() => {
//     console.log("Jharkhand");
// }, 4000);

// console.log("welcome to");

// set interval
// let id = setInterval(() =>{
//     console.log("apna college");
// },2000);
// console.log(id);

// this with arrow function
// const obj = {
//   name: "Alice",
//   sayHi:() => {
//     console.log(this.name);
//   }
// };

// obj.sayHi(); 

const square = a => {
    return a*a;
};

let id=setInterval(() => {
    console.log("hello world");
}, 2000);


setTimeout( () => {
    clearInterval(id);
    console.log("clear interval run");
}, 10000);