// let landingPage = document.querySelector(".home");

// let imageArray = ["home1.jpg" , "home2.jpg" , "home3.jpg"];

// landingPage.style.backgroundImage = 'url("img/home1.jpg)';


// let randomNumber = Math.floor(Math.random() * imageArray.length );


// let randomOption = true;


// function randomizeImgs(){
//   if( randomOption === true){
//     setInterval(() => {

//       let randomNumber = Math.floor(Math.random() * imageArray.length );

//       landingPage.style.backgroundImage = 'url("img/'+  imageArray[randomNumber] +'")';

//     }, 4000);

//   }
// }
// randomizeImgs();

const header = document.getElementById("header");
const navbar = document.getElementById("navbar");
const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile-menu");
const logo = document.querySelector(".logo");
const navLinks = document.querySelectorAll("#nav-links a");
const spans = document.querySelectorAll("#nav-links a span");
const navLinksMobile = document.querySelectorAll("#mobile-menu a");
const spansMobile = document.querySelectorAll("#mobile-menu a span");
const bars = document.querySelector("#menu-icon i");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("bg-white", "shadow-md");
    navbar.classList.remove("text-white");
    navbar.classList.add("text-black");
    navLinks.forEach(link => {
      link.classList.remove("text-[#ff2c1f]");
      link.classList.add("text-black");
    });
    spans.forEach(span => {
      span.classList.remove("bg-[#ff2c1f]");
      span.classList.add("bg-black");
    });
    navLinksMobile.forEach(link => {
      link.classList.remove("text-[#ff2c1f]");
      link.classList.add("text-black");
    });
    spansMobile.forEach(span => {
      span.classList.remove("bg-[#ff2c1f]");
      span.classList.add("bg-black");
    });
    bars.classList.add("text-black");
  } else {
    header.classList.remove("bg-white", "shadow-md");
    navbar.classList.remove("text-black");
    navbar.classList.add("text-white");
    navLinks.forEach(link => {
      link.classList.remove("text-black");
      link.classList.add("text-[#ff2c1f]");
    });
    spans.forEach(span => {
      span.classList.remove("bg-black");
      span.classList.add("bg-[#ff2c1f]");
    });
    navLinksMobile.forEach(link => {
      link.classList.remove("text-black");
      link.classList.add("text-[#ff2c1f]");
    });
    spansMobile.forEach(span => {
      span.classList.remove("bg-black");
      span.classList.add("bg-[#ff2c1f]");
    });
    bars.classList.remove("text-black");
  }
});

menuIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

window.onscroll = () => {
  mobileMenu.classList.add("hidden");
};


