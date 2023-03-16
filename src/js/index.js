import { initDefaultDate } from "./components/inputBar/dateInput.js";
import {
  addButtonEventListener,
  initMonthView,
} from "./components/header/monthCarousel.js";
import {
  addPriceInputEventListener,
  initDefaultPrice,
} from "./components/inputBar/priceInput.js";
import './components/inputBar/dropdown.js';
import './components/button.js';

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
