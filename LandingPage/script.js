var sidenavbarr=document.querySelector(".sidenavbar")

function opensidenav(){

sidenavbarr.style.left="0"
}

function closesidenav(){

    sidenavbarr.style.left="-70%"


}

var typed=new Typed(".auto-typed",{
    strings:["Style","Taste","Look"],
    typeSpeed:150,
    backSpeed:150,
    loop:true
})