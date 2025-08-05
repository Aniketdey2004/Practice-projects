let gameSeq=[];
let userseq=[];
let colors=["red","yellow","blue","green"];
let start=false;
let level=0;
let button=document.querySelector("button");
button.addEventListener("click",function(){
    if(start==false)
    {
        start=true;
        levelUp();
    }
});
function gameFlash(randBtn)
{
    randBtn.style.backgroundColor="white";
    setTimeout(()=>{
        randBtn.style.backgroundColor="";
    },250);
}
function levelUp()
{
    level++;
    let lev=document.querySelector("h2");
    lev.innerText=`Level: ${level}`;
    let random=Math.floor(Math.random()*4);
    let randColor=colors[random];
    let randBtn=document.querySelector(`.${randColor}`);
    gameFlash(randBtn);
    gameSeq.push(randColor);
    userseq=[];
}
function check(idx){
    if(userseq[idx]==gameSeq[idx])
    {
        if(idx==gameSeq.length-1)
        {
            userseq=[];
            setTimeout(()=>{
                levelUp();
            },500);
        }
    }
    else{
        reset();
    }
}

let btns=document.querySelectorAll(".btn");
for(b of btns){
    b.addEventListener("click",function(){
        this.style.backgroundColor="white";
        setTimeout(()=>{
            this.style.backgroundColor="";
        },250);
        let color=this.getAttribute('id');
        userseq.push(color);
        check(userseq.length-1);
    });
}

function reset(){
    // console.log("reset");
    gameSeq=[];
    userseq=[];
    let over=document.querySelector("h2");
    over.innerHTML=`Game Over. Your score is ${level} <br> Click on start to try again`;
    start=false;
    level=0;
}