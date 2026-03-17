let para1 = document.createElement("p");
para1.innerText = "Hey, I am lily!";
document.querySelector("body").append(para1);

para1.classList.add("red");

let h3 = document.createElement("h3");
h3.innerText = " I'm a blue h3!";
document.querySelector("body").append(h3);

h3.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1")
let p = document.createElement("p");
h1.innerText = " I'm in div!";
p.innerText = "ME TOO!";

div.append(h1);
div.append(p);
document.querySelector("body").append(div);

div.classList.add("dive");

let btn = document.createElement("button");
let input = document.createElement("input");
btn.innerText = "Click me";
document.querySelector("body").append(input);
document.querySelector("body").append(btn);

btn.setAttribute("id","button");
input.setAttribute("placeholder", "username");


btn.classList.add("button");

let h = document.createElement("h1");
h.innerText = "DOM practice!";
document.querySelector("body").append(h);

h.classList.add("h1");


let p1 = document.createElement("p");
p1.innerHTML = "Apna college <b>Delta</b> practice!";
document.querySelector("body").append(p1);

h.classList.add("h1");

