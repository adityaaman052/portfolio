var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
var sidemenu=document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="700px";
}
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");/*switch off all the bar*/
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");/*switch on the bar of the current clicked tab*/
    document.getElementById(tabname).classList.add("active-tab");


    
}