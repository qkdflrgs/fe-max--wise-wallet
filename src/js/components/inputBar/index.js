import { initCategorySwitcher } from "./categorySwitcher.js";
import { initDefaultDate } from "./dateInput.js";
import { initDropdown } from "./dropdown.js";
import { initDefaultPrice } from "./priceInput.js";

export const initInputBar = () => {
  initDefaultDate();
  initDefaultPrice();
  initDropdown();
  initCategorySwitcher();
};
