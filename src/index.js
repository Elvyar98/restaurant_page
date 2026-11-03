import { RenderContactPage } from "./contactPage.js";
import { RenderHomePage } from "./homePage.js";
import { RenderMenuPage } from "./menuPage.js";
import "./styles.css";

RenderHomePage();

const homebtn = document.getElementById("home");
const menubtn = document.getElementById("menu");
const contactbtn = document.getElementById("contact");
const contentBox = document.getElementById("content");

homebtn.addEventListener("click", () => {
  contentBox.textContent = "";
  RenderHomePage();
});

menubtn.addEventListener("click", () => {
  contentBox.textContent = "";
  RenderMenuPage();
});

contactbtn.addEventListener("click", () => {
  contentBox.textContent = "";
  RenderContactPage();
});
