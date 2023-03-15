import {
  addButtonEventListener,
  initMonthView,
} from "./components/header/monthCarousel.js";
import { initDefaultDate } from "./components/inputBar/dateInput.js";
import { addPaymentSelectBoxClickListener } from "./components/inputBar/paymentTypeSelect.js";
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
  // 결제수단 선택란
  addPaymentSelectBoxClickListener();
});
