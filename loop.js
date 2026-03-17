// // for(let i=1;i<=5;i++){
// //     console.log(i);
// // }

// // for(let i=1;i<=15;i=i+2){
// //     console.log(i);

// // }

// // for(let i=5;i<=15;i=i+2){
// //     console.log(i);
// // }

// for(let i=5;i<=50;i+=5){
//     console.log(i);
// }

// let n =prompt("enter number:");
// for(let i=1;i<=10;i++){
//     console.log(i*n);
// }

// for(let i=1;i<=3;i++){
//     for(let j=1;j<=3;j++){
//         console.log(j);
//     }
// }

// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// let favMovie ="Avatar";
// let guess = prompt("what's the name of movie");
// while ((guess!=favMovie) && (guess!='quit'))
// {
//     console.log("wrong");
//     guess = prompt("wrong guess , please try again");
// }
// if(guess==favMovie){
//         console.log("congrates");
//     }

// let i=1;
// while(i<=5){
//     if(i==3){
//         break;
//     }
//     console.log(i);
//     i++;
// }

// let fruits =["mango","apple","banana","litchi","orange"];
// fruits.reverse();
// for(let i=0;i<fruits.length;i++){
//     console.log(i,fruits[i]);
// }

// let heroes =[["ironman","spiderman","thor"],
// ["superman","wonder women","flash"]];

// for(let i=0;i<heroes.length;i++){
//     console.log(i,heroes[i],heroes[i].length);
//     for(let j=0;j<heroes[i].length;j++){
//         console.log(heroes[i][j]);
//     }
// }

// let fruits =["mango","apple","banana","litchi","orange"];
// for(fruit of fruits){
//     console.log(fruit);
// }


// for(char of "apnacollege"){
//     console.log(char);  q1a2ws45f6gty78hui9ko0p
// }

// let heroes =[["ironman","spiderman","thor"],
//  ["superman","wonder women","flash"]];
//  for(list of heroes){
//     for(hero of list){
//     console.log(hero);
//  }
// }

// let arr=[1,2,3,4,5,6,2,3];
// let num=2;
// for(let i=0;i<arr.length;i++){
//    if(arr[i]==2){
//      arr.splice(i,1);
//    }
// }
// console.log(arr);

// let num =287152;
// let count =0;
// // let copy=num;

// while(num>0){
//    count++;
//    num=Math.floor(num/10);
// }
// console.log(count);

// let num = 287152;
// let sum =0;
// while(num>0){
//    digit=num%10;
//    sum += digit;
//    num=Math.floor(num/10);
// }
// console.log(sum);

// let num=prompt("enter a number");
// let fact =1;
// for(let i=1;i<=num;i++){
//    fact=fact*i;
// }
// console.log(fact)

// let arr=[22,15,20,25,55,58];
// let largest=0;
// for(let i=0;i<arr.length;i++){
//    if(largest<arr[i]){
//       largest=arr[i];
//    }
// }
// console.log(largest);