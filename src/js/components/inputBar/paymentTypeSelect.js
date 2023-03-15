const selectBox = document.querySelector(
  ".input-bar__item--payment-type .select-box"
);
const arrowDown = document.querySelector(
  ".input-bar__item--payment-type .select-box button"
);
const dropdown = document.querySelector(
  ".input-bar__item--payment-type + .dropdown"
);

const preventButtonDefaultEvnet = (e) => {
  if (e.target === arrowDown) {
    e.preventDefault();
  }
};

const handleSelectBoxClick = (e) => {
  preventButtonDefaultEvnet(e);
  dropdown.hidden = !dropdown.hidden;
  arrowDown.classList.toggle("filter-primary");
};

const addPaymentSelectBoxClickListener = () => {
  selectBox.addEventListener("click", handleSelectBoxClick);
};

export { addPaymentSelectBoxClickListener };
