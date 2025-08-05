let search=document.querySelector(".search-icon");
search.addEventListener("click",function(){
    findUni();
});
async function findUni()
{
    let ul=document.querySelector(".search-list ul");
    if(ul!=null)
        ul.remove();
    let searchPrompt=document.querySelector(".search-prompt");
    if(searchPrompt!=null)
    searchPrompt.remove();
    let countryInputField=document.querySelector("#country");
    let uniInputField=document.querySelector("#university");
    let country=countryInputField.value.toLowerCase();
    countryInputField.value="";
    if(country!="")
    {
        let h1=document.querySelector(".search-results h1");
        h1.innerText=`Universities in ${country}`;
        console.log(h1);
    }
    let university=uniInputField.value.toLowerCase();
    uniInputField.value="";
    let data= await getData();
    let filteredData=data.filter(function(obj){
        if (obj.country.toLowerCase()==country && obj.name.toLowerCase()==university)
            return true;
        else if(obj.country.toLowerCase()==country && university=="")
            return true;
        else if(country=="" && obj.name.toLowerCase()==university)
            return true;
        else
            return false;
    });
    displayData(filteredData);
}
async function getData(university,country)
{
    try{
        let res=await fetch(`https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json`);
        return res.json();
    }
    catch(err)
    {
        console.log("error occured while fetching the data");
    }
}
function displayData(data)
{
    let searchList=document.querySelector(".search-list");
    let ul=document.createElement("ul");
    searchList.append(ul);
    data.forEach((e)=>{
        let listItem=createList(e);
        ul.append(listItem);
    })
}
function createList(e)
{
    let li=document.createElement("li");
    let uniname=document.createElement("div");
    let unilocation=document.createElement("div");
    let uniwebsite=document.createElement("a");
    uniname.innerText=e.name;
    uniname.classList.add("uniname");
    li.append(uniname);
    if(e["state-province"]==null)
        unilocation.innerText=e.country;
    else
        unilocation.innerText=e["state-province"]+","+e.country;
    unilocation.classList.add("unilocation");
    li.append(unilocation);
    let caps=document.createElement("span");
    caps.innerText="Link";
    caps.classList.add("capsule");
    uniwebsite.append(caps);
    uniwebsite.setAttribute("href",e.web_pages[0]);
    uniwebsite.classList.add("uniwebsite");
    li.append(uniwebsite);
    return li;
}
    
