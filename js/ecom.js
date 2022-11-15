

console.log("HI")
const navOpen = document.querySelector(".nav__hamburger");
const navClose = document.querySelector(".close__toggle");
const menu = document.querySelector(".nav__menu");
const navContainer = document.querySelector(".nav__menu");


navOpen.addEventListener("click",() => {
    menu.classList.add("open");
    document.body.classList.add("active");
    navContainer.style.left = "0";
    navContainer.style.width = "30rem";
});

navClose.addEventListener("click",() => {
    menu.classList.remove("open");
    document.body.classList.remove("active");
    navContainer.style.left = "-30rem";
    navContainer.style.width = "0";
});

const popup = document.querySelector(".popup");
const closepopup = document.querySelector(".popup__close");

/*
if(popup){
    closepopup.addEventListener("click", () => {
        popup.classList.add("hide__popup");
    });

    window.addEventListener('load',() =>{
        setTimeout(() => {
            popup.classList.remove("hide__popup");
        }, 500);
    });
}*/


const navBar = document.querySelector(".navigation");
const gototop = document.querySelector(".goto-top");
const scrollLink = document.querySelectorAll(".scroll-link");

Array.from(scrollLink).map(link => {
    link.addEventListener("click" , e =>{
        e.preventDefault();

        const id = e.currentTarget.getAttribute("href").slice(1);
        console.log(id);
        const element = document.getElementById(id);
        const navHeight = navBar.getBoundingClientRect().height;
        const fixnav = navBar.classList.contains("fix__nav");
        let position = element.offsetTop - navHeight;

        if(!fixnav){
            console.log("here");
            position = position - navHeight;
        }
        console.log("here");
        window.scrollTo({
            
            left: 0,
            top: position,
        });
        
        navContainer.style.left = '-30rem';
        
        document.body.classList.remove("active");
    });
});

window.addEventListener("scroll" , e => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;

    if(scrollHeight > navHeight){
        navBar.classList.add("fix__nav");

    }else{
        navBar.classList.remove("fix__nav")
    }

    if(scrollHeight >300){
        gototop.classList.add("show-top");
    }else{
        gototop.classList.remove("show-top");
    }
});



AOS.init();

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}