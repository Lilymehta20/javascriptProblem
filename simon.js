let gameSeq=[];
let userSeq=[];

let btns = ["yellow","red","purple","green"];

let level=0;
let started=false;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started");
        started=true;
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    }, 250);
}

function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;

    //random btn choose
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns(randIdx);
    let randBtn = document.querySelector(`.${randColor}`);

    console.log(randIdx)
    console.log(randBtn);
    console.log(randColor);
    btnFlash(randBtn);
}