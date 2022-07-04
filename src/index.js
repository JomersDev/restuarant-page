import initalPageLoad from "./initial";
import loadContactPage from "./contact";
import loadMenuPage from "./menu";
import loadHomePage from "./home";

initalPageLoad();

const menuButton = document.getElementById("menu");
menuButton.addEventListener('click', loadMenuPage);

const homeButton = document.getElementById("home");
homeButton.addEventListener('click', loadHomePage);

const contactButton = document.getElementById("contact");
contactButton.addEventListener('click', loadContactPage);