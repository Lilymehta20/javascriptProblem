//write an arrow function named arrayAverage that accepts an array number
//and returns the average of those numbers.

const arrayAverage = arr =>{
    let total = 0;
    for(let num of arr){
        total += num;
    }
    return total/arr.length;
};
let arr = [10,20,30];
console.log(arrayAverage(arr));


//write an arrow function named isEven() that takes a single number as argument
// and return if it is even or odd

// let num =4;
// const isEven = (num) => num%2 == 0;

// let num =prompt("enter a number");
const isEven = num => {
    if(num%2 == 0){
        return "Even";
    }else{
        return "Odd";
    }
};
console.log(isEven(10));
console.log(isEven(7));

//what is the output of the following code:
const object = {
    message : 'Hello, World!',

    logMessage(){
        console.log(this.message);
    }
};

setTimeout(object.logMessage, 1000);

//what is the output of the following code:
let length =4;
function callback() {
    console.log(this.length);
}
const obj = {
    length : 5,
    method(callback) {
        callback();
    },
};

obj.method(callback,1,2);