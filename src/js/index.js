import {
  addButtonEventListener,
  initMonthView,
} from "./components/header/monthCarousel.js";
import { initDefaultDate } from "./components/inputBar/dateInput.js";
import {
  addPriceInputEventListener,
  initDefaultPrice,
} from "./components/inputBar/priceInput.js";

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
