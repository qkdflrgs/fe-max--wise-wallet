import { initDefaultDate } from "./components/dateInput.js";
import { addButtonEventListener, initMonthView } from "./components/monthCarousel.js";

document.addEventListener("DOMContentLoaded", () => {
  // 헤더 연월 carousel
  initMonthView();
  addButtonEventListener();

  // 일자 입력란
  initDefaultDate();
});
