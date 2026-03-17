// let btns = document.querySelectorAll("button");
// console.dir(btn);

// btn.onclick = function () {
//     console.log("button was clicked");
//     alert("lily mehta");
// };

// for (btn of btns){
//     btn.onclick =  sayHello;
//     btn.onmouseenter =  function () {
//         console.log("you entered aa button");
//     };
//     console.dir(btn);

//     btn.addEventListener("click", sayHello);
//     btn.addEventListener("dbclick", function () {
//         console.log("you double click");
//     });
// }

// function sayHello() {
//     alert        ("Hello lily!");
// }

// function sayName(){
//     alert("lily");
// }

let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
    div.style.color = "white";
    console.log("color updated");
});

function getRandomColor() {
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red},${green}, ${blue})`;
    return color;
}
 
let p= document.querySelector("p");
p.addEventListener("click", function () {
    console.log("paragraph");
});

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function(){
    console.log("lily");
});


let p1 = document.querySelector(".para");
let h1 = document.querySelector("h1");
let h4 = document.querySelector("h4");
// let btn1 = document.querySelector(".btn1");

function changeColor() {
    console.dir(this.innerText);
    this.style.backgroundColor = "pink";
}

p1.addEventListener("click" , changeColor);
h1.addEventListener("click" , changeColor);
h4.addEventListener("click" , changeColor);
// btn1.addEventListener("click" , changeColor);

let inp = document.querySelector("input");
inp.addEventListener("keydown", function (){
    console.log("key was pressed");
});

let btn1 = document.querySelector(".btn1");
btn1.addEventListener("dblclick", function (event){
    console.log(event);
    console.log("button clicked");
});

let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    console.dir(form);
  
    // let int = document.querySelector(".int");
    let user = this.elements[0];  //form.elements
    let pass = this.elements[1];  //form.elements
    console.log(user.value);
    console.log(pass.value);
    // console.log("form submit");

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});

let but = document.querySelector(".but");
function changeCol() {
    console.dir(this.innerText);
    this.style.backgroundColor = "green";
}
but.addEventListener("click" , changeCol);
 