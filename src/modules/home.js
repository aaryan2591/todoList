import homeBG from "../images/homeBG.jpeg";
import "../styles.css";


export function home(){
    let homeDiv = document.createElement("div");
    homeDiv.classList.add("homeDiv");
    document.getElementById("content").appendChild(homeDiv);

    const greeting = document.createElement("div");
    greeting.classList.add("greeting");
    greeting.textContent = "Welcome!";

    const name = document.createElement("div");
    name.classList.add("name");
    name.textContent = "Fine Dine";

    const about = document.createElement("div");
    about.classList.add("about");
    about.textContent = "Crafted with passion. Served with elegance.";

    const bgImage = document.createElement("img");
    bgImage.classList.add("bgImage");
    bgImage.src = homeBG;
  
  
    homeDiv.appendChild(greeting);
    homeDiv.appendChild(name);
    homeDiv.appendChild(about);  
    homeDiv.appendChild(bgImage);
}