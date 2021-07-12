import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import "./style.css"; //Include the css styles

const buttons = document.querySelectorAll(".nav-btn");

function switchTab(selection) {
  if (!selection.classList.contains("nav-active")) {
    buttons.forEach((button) => {
      button.classList.remove("nav-active");
    });
    selection.classList.add("nav-active");
  }

  switch (selection.id) {
    case "homeBtn":
      loadHome();
      break;
    case "menuBtn":
      loadMenu();
      break;
    case "contactBtn":
      loadContact();
      break;
    default:
      loadHome();
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(`Click ${button.id}`);
    switchTab(button);
  });
});

switchTab(document.getElementById("homeBtn")); //Initialize webpage
