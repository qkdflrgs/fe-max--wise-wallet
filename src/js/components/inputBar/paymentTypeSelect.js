const selectBox = document.querySelector(".input-bar__item--payment-type .select-box");
const dropdown = document.querySelector(
  ".input-bar__item--payment-type + .dropdown"
);

const handleSelectBoxClick = () => {
  dropdown.hidden = !dropdown.hidden;
};

const addPaymentSelectBoxClickListener = () => {
  selectBox.addEventListener("click", handleSelectBoxClick);
};

export { addPaymentSelectBoxClickListener };
