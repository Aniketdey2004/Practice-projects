let add=document.querySelector(".task-adder button");
add.addEventListener("click",function(){
    let task=document.querySelector(".task-adder input");
    let t=task.value;
    if(task!="")
    {
        let li=document.createElement("li");
        let span=document.createElement("span");
        span.innerHTML=t;
        li.append(span);
        let i=document.createElement("i");
        i.classList.add("fa-solid");
        i.classList.add("fa-xmark");
        li.append(i);
        let list=document.querySelector(".task-listed ul");
        list.append(li);
        task.value="";
    }
});

let ul=document.querySelector(".task-listed ul");
ul.addEventListener("click",function(event){
    // console.dir(event.target);
    if(event.target.nodeName=="I")
    {
        let listItem=event.target;
        listItem.parentElement.remove();
    }
});