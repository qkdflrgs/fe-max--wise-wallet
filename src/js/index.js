import { initHeader } from "./components/header/index.js";
import { initInputBar } from "./components/inputBar/index.js";

const initApp = () => {
  initHeader();
  initInputBar();
};

document.addEventListener("DOMContentLoaded", initApp);
