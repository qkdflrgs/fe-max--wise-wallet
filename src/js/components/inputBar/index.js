import { initCategorySwitcher } from "./categorySwitcher.js";
import { initDefaultDate } from "./dateInput.js";
import { initDropdown } from "./dropdown.js";
import { initDefaultPrice } from "./priceInput.js";
import "./validator.js";

export const initInputBar = () => {
  initDefaultDate();
  initDefaultPrice();
  initDropdown();
  initCategorySwitcher();
};
