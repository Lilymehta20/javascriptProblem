//  Write a JavaScript function that returns array elements larger than a number.
let arr =  [8,6,3,4,5,9,12,23];
let num =5;

function largest(){
    for(let i=1;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}
largest(arr,num);

// Qs2. Write a JavaScript function to extract unique characters from a string. 
// Example: str = “abcdabcdefgggh” ans = “abcdefgh 
let str = "abcdabcdefggghiiiffnssmm";
let ans = "";

function uniqueChar(){
    for(let i=0;i<str.length;i++){
        if(ans.indexOf(str[i])==-1){
            ans += str[i];
        }
    }
    return ans;
}
uniqueChar(str);

//  Write a JavaScript function that accepts a list of country names as input and 
// returns the longest country name as output. 
// Example : country = ["Australia", "Germany", "United States of America"] output : 
// "United States of America"

let country = ["Australia", "Germany", "United States of America"];


function largestCountry(country){
    let ansIdk=0;
    for(let i=1;i<country.length;i++){
        if(country[i].length>country[ansIdk].length){
            ansIdk=i;
        }
    }
    return country[ansIdk];
}
largestCountry(country);

// . Write a JavaScript function to count the number of vowels in a String argument.

let str1 = "america";
function vowel(str1){
    let count =0;
    for(let i=0;i<str1.length;i++){
        if(str1[i]=='a' || str1[i]=='e' || str1[i]=='i' || str1[i]=='o' || str1[i]=='u'){
            count++;
        }
    }
    return count;
}
vowel(str1);


//  Write a JavaScript function to generate a random number within a range 
// (start, end).
function randomFunc(){
    let ran = Math.floor(Math.random()*21)+1;
    return ran;
}
randomFunc();   