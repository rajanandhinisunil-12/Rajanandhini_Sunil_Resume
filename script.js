/* Typing Animation */

const words = [

"Web Developer",
"Java Programmer",
"Python Learner",
"Problem Solver",
"Future Software Engineer"

];

let wordIndex = 0;
let letterIndex = 0;

let currentWord = "";
let currentLetters = "";

function type(){

if(wordIndex < words.length){

currentWord = words[wordIndex];

currentLetters =
currentWord.slice(0, ++letterIndex);

document.getElementById("typing")
.textContent = currentLetters;

if(currentLetters.length ==
currentWord.length){

wordIndex++;

letterIndex = 0;

if(wordIndex == words.length){

wordIndex = 0;

}

setTimeout(type,1500);

}else{

setTimeout(type,120);

}

}

}

type();

/* Dark Light Mode */

const toggle =
document.getElementById("themeToggle");

toggle.addEventListener("click",()=>{

document.body.classList.toggle(
"light-mode"
);

});


/* COUNTER */

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

const updateCounter=()=>{

const target=
+counter.getAttribute("data-target");

const count=
+counter.innerText;

const increment=
target/100;

if(count<target){

counter.innerText=
Math.ceil(count+increment);

setTimeout(updateCounter,20);

}else{

counter.innerText=target;

}

}

updateCounter();

});

/* SCROLL REVEAL */

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(section=>{

const top =
section.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

section.classList.add("active");

}

});

});




/* Animate Skills */

const skillBars =
document.querySelectorAll(".skill-progress");

const skillsSection =
document.querySelector("#skills");

window.addEventListener("scroll",()=>{

const sectionTop =
skillsSection.offsetTop - 400;

if(window.scrollY > sectionTop){

skillBars.forEach(bar=>{

bar.style.width =
bar.classList.contains("html") ? "95%" :
bar.classList.contains("css") ? "90%" :
bar.classList.contains("js") ? "85%" :
bar.classList.contains("python") ? "80%" :
bar.classList.contains("java") ? "82%" :
"78%";

});

}

});



/* CERTIFICATE POPUP */

const certificateModal =
document.getElementById(
"certificateModal"
);

const certificateImage =
document.getElementById(
"certificateImage"
);

const closeCertificate =
document.getElementById(
"closeCertificate"
);

function openCertificate(src){

certificateModal.style.display="flex";

certificateImage.src=src;

}

closeCertificate.onclick=function(){

certificateModal.style.display="none";

};

window.onclick=function(event){

if(event.target===certificateModal){

certificateModal.style.display="none";

}

};



window.addEventListener("load",()=>{
setTimeout(()=>{
document.getElementById("loader").style.display="none";
},1500);
});



window.addEventListener("scroll", () => {

  const footer = document.querySelector(".footer");

  const position = footer.getBoundingClientRect().top;

  if(position < window.innerHeight - 100){
      footer.classList.add("show-footer");
  }

});


// Reveal animation on scroll

const projectCards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
},{
    threshold:0.2
});

projectCards.forEach(card=>{
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.8s ease";
    observer.observe(card);
});


