import { home } from "./modules/home.js";
import { menu } from "./modules/menu.js";
import { about } from "./modules/about.js";
import "./styles.css";

const content = document.getElementById("content");
const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");

function setActive(clickedButton){
    homeButton.classList.remove('active');
    menuButton.classList.remove('active');
    aboutButton.classList.remove('active');
    clickedButton.classList.add('active');
}

homeButton.addEventListener('click',()=>{
    content.textContent = "";  
    home();
    setActive(homeButton);
})

menuButton.addEventListener('click',()=>{
    content.textContent = "";
    menu();
    setActive(menuButton);
})

aboutButton.addEventListener('click',()=>{
    content.textContent = "";
    about();
    setActive(aboutButton);
})