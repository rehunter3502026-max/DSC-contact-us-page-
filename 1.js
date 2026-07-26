/* ======================================================
   DSC JIIT CONTACT PAGE
   FINAL FIXED SCRIPT.JS
====================================================== */


/* ======================================================
   INITIALIZATION
====================================================== */

document.addEventListener("DOMContentLoaded",()=>{


    console.log("🚀 DSC JIIT SYSTEM STARTING");


    createStars();

    createParticles();

    revealElements();

    bootAnimation();


});




/* ======================================================
   STAR GENERATOR
====================================================== */


function createStars(){


const container =
document.createElement("div");


container.className="stars";


document.body.appendChild(container);



for(let i=0;i<120;i++){


const star =
document.createElement("span");



star.className="star";


star.style.left =
Math.random()*100+"%";


star.style.top =
Math.random()*100+"%";


let size =
Math.random()*3+1;



star.style.width=size+"px";

star.style.height=size+"px";



star.style.animationDuration =
(Math.random()*4+3)+"s";



container.appendChild(star);



}


}






/* ======================================================
   PARTICLES
====================================================== */


function createParticles(){


const container =
document.querySelector(".particles");



if(!container)return;



for(let i=0;i<50;i++){


let p =
document.createElement("span");



p.style.left =
Math.random()*100+"%";



p.style.animationDuration =
(Math.random()*15+8)+"s";



p.style.animationDelay =
Math.random()*5+"s";



container.appendChild(p);


}


}








/* ======================================================
   REVEAL SYSTEM FIX
====================================================== */


function revealElements(){



const elements =
document.querySelectorAll(
".heading,.status-card,.contact-box,.node,.right-panel,footer"
);



elements.forEach((el,index)=>{


setTimeout(()=>{


el.classList.add("active");


},index*150);



});


}




/* ======================================================
   FORM SUBMISSION
====================================================== */


const form =
document.getElementById("contactForm");



if(form){


form.addEventListener(
"submit",
async(e)=>{


e.preventDefault();



const button =
form.querySelector("button");



button.disabled=true;



button.innerHTML =
`
<i class="fa-solid fa-circle-notch fa-spin"></i>
TRANSMITTING...
`;



try{


let response =
await fetch(
form.action,
{

method:"POST",

body:new FormData(form),

headers:{

"Accept":"application/json"

}

}
);



if(response.ok){


button.innerHTML =
`
<i class="fa-solid fa-check"></i>
MESSAGE SENT
`;



form.reset();


}

else{

throw Error();

}



}

catch{


button.innerHTML =
`
<i class="fa-solid fa-xmark"></i>
FAILED
`;



}



setTimeout(()=>{


button.disabled=false;



button.innerHTML =
`
SEND MESSAGE
<i class="fa-solid fa-paper-plane"></i>
`;



},2500);



});


}








/* ======================================================
   INPUT GLOW
====================================================== */


document
.querySelectorAll("input,textarea")
.forEach(input=>{


input.addEventListener(
"focus",
()=>{


input.style.boxShadow =
"0 0 20px rgba(0,191,255,.5)";


});



input.addEventListener(
"blur",
()=>{


input.style.boxShadow="";


});


});







/* ======================================================
   CURSOR GLOW
====================================================== */


const cursor =
document.createElement("div");


cursor.className="cursor-glow";


document.body.appendChild(cursor);



document.addEventListener(
"mousemove",
(e)=>{


cursor.style.left =
e.clientX+"px";


cursor.style.top =
e.clientY+"px";


});







/* ======================================================
   BUTTON RIPPLE
====================================================== */


document
.querySelectorAll("button")
.forEach(btn=>{


btn.addEventListener(
"click",
function(e){



let ripple =
document.createElement("span");


ripple.className="ripple";



let size =
Math.max(
this.clientWidth,
this.clientHeight
);



ripple.style.width=size+"px";

ripple.style.height=size+"px";


ripple.style.left =
e.offsetX-size/2+"px";


ripple.style.top =
e.offsetY-size/2+"px";



this.appendChild(ripple);



setTimeout(()=>{

ripple.remove();

},600);



});


});







/* ======================================================
   HUD PARALLAX FIX
====================================================== */


const hud =
document.querySelector(".hud");



document.addEventListener(
"mousemove",
(e)=>{


if(!hud)return;



if(window.innerWidth<768){

hud.style.transform="";

return;

}



let x =
(window.innerWidth/2-e.clientX)/80;


let y =
(window.innerHeight/2-e.clientY)/80;



hud.style.transform =
`
translate(${x}px,${y}px)
`;



});







/* ======================================================
   SOCIAL NODE PULSE
====================================================== */


setInterval(()=>{


const nodes =
document.querySelectorAll(
".node-circle"
);



if(!nodes.length)return;



let random =
nodes[
Math.floor(
Math.random()*nodes.length
)
];



random.style.transform=
"scale(1.15)";



setTimeout(()=>{


random.style.transform="";


},700);



},2500);








/* ======================================================
   DSC CORE BOOT
====================================================== */


function bootAnimation(){


const core =
document.querySelector(".center-circle");



if(!core)return;



core.style.opacity="0";

core.style.transform="scale(.5)";



setTimeout(()=>{


core.style.transition="1s ease";


core.style.opacity="1";


core.style.transform="scale(1)";



},500);



}








/* ======================================================
   LOADER FIX
====================================================== */


window.addEventListener(
"load",
()=>{


const loader =
document.querySelector(".page-loader");



if(loader){


loader.style.opacity="0";



setTimeout(()=>{


loader.remove();


},800);



}



console.log(
"✅ DSC JIIT SYSTEM ONLINE"
);



});
