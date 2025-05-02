//get the time
function clock() {
    var today = new Date();

    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();


    let prd = "AM";
    //set time period AM/PM
    if (hr >= 12) {
        prd = "PM"
    }
    //set 12 hr clock format
    var formatValue=formatSwitchBtn.getAttribute("data-format");
    if(formatValue=="12"){
    hr = hr > 12 ? hr % 12 : hr;
    }

    //add 0 for the values lower than 10
    if (hr < 10) {
        hr = "0" + hr;
    }

    if (min < 10) {
        min = "0" + min;
    }

    if (sec < 10) {
        sec = "0" + sec;
    }


    document.querySelector(".hours").innerHTML = hr;
    document.querySelector(".minutes").innerHTML = min;
    document.querySelector(".seconds").innerHTML = sec;
    document.querySelector(".period").innerHTML = prd;



}

var updateClock = setInterval(clock, 1000);

//get the date and day
var today = new Date();
const day = today.toLocaleString("default", {weekday:"long"});
const month = today.toLocaleString("default", {month:"long"});
const date = today.getDate();
const yr = today.getFullYear();


document.querySelector(".month-name").innerHTML = month;
document.querySelector(".day-name").innerHTML = day;
document.querySelector(".day-num").innerHTML = date;
document.querySelector(".year").innerHTML = yr;


//javascript for switch clock format
const formatSwitchBtn=document.querySelector(".format-switch-btn");
formatSwitchBtn.addEventListener("click",()=>{
    formatSwitchBtn.classList.toggle("active");
    var formatValue=formatSwitchBtn.getAttribute("data-format");

    if(formatValue=="12"){
        formatSwitchBtn.setAttribute("data-format","24");
    }
    else{
        formatSwitchBtn.setAttribute("data-format","12");
    }
})

//javascript for dot menu
const dotMenubtn=document.querySelector(".dot-menu-btn");
const dotMenu=document.querySelector(".dot-menu");

dotMenubtn.addEventListener("click", ()=>{
    dotMenu.classList.toggle("active");
});

document.addEventListener("click",(e)=>{
    if(e.target.id !=="active-menu"){
        dotMenu.classList.remove("active");
    }
});