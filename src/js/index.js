import { initDefaultDate } from "./components/dateInput.js";
import { addButtonEventListener, initMonthView } from "./components/monthCarousel.js";
import { addPriceInputEventListener, initDefaultPrice } from "./components/priceInput.js";

document.addEventListener("DOMContentLoaded", () => {
  // 헤더 연월 carousel
  initMonthView();
  addButtonEventListener();

  // 일자 입력란
  initDefaultDate();
  // 금액 입력란
  initDefaultPrice();
  addPriceInputEventListener();
});
