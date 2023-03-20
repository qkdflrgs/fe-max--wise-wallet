import { PAYMENT_TYPES } from "../../constants/paymentTypes.js";
import { getCategories } from "../../constants/categories.js";

const inputBar = document.querySelector(".input-bar");

const isValidDate = () => {
  const date = inputBar.querySelector("#input-date").value;
  const regex = /^\d{4}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/;
  return regex.test(date);
};

const isValidPrice = () => {
  const price = inputBar.querySelector("#input-price").value;
  const sign = inputBar.querySelector("#sign-switcher").checked ? -1 : 1;
  return price * sign !== 0;
};

const isValidContent = () => {
  const content = inputBar.querySelector("#input-content").value;
  return typeof content === "string" && content.trim().length !== 0;
};

const isValidPayment = () => {
  const payment = inputBar.querySelector("#input-payment-type").value;
  return PAYMENT_TYPES.includes(payment);
};

const isValidCategory = () => {
  const category = inputBar.querySelector("#input-category").value;
  const isOutcome = inputBar.querySelector("#sign-switcher").checked;
  return getCategories(isOutcome).includes(category);
};

const checkAllInputValues = () => {
  if (isValidDate() && isValidPrice() && isValidContent() && isValidPayment() && isValidCategory()) {
    const checkButton = inputBar.querySelector('.input-bar__check-button');
    checkButton.classList.toggle('active');
  }
};

// inputBar.addEventListener("click", checkAllInputValues);
inputBar.addEventListener("input", checkAllInputValues);
inputBar.addEventListener("click", checkAllInputValues);
