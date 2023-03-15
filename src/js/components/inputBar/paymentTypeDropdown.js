const selectBoxContent = document.querySelector(
  ".input-bar__item--payment-type .select-box p"
);
const selectBox = document.querySelector(
  ".input-bar__item--payment-type .select-box"
);
const dropdown = document.querySelector(
  ".input-bar__item--payment-type + .dropdown"
);
const arrowDown = document.querySelector(
  ".input-bar__item--payment-type .select-box button"
);

const findContentElementFromItem = (item) => {
  if (item.className === "dropdown-item") {
    return item.firstElementChild.firstElementChild;
  }
  if (item.className === "dropdown-item__content") {
    return item.firstElementChild;
  }
  return item;
};

const isAdditionItem = (item) => item.closest(".item-addition") !== null;

const changeSelectBoxColor = () => {
  if (selectBoxContent.classList.contains("font-primary")) return;
  selectBoxContent.classList.add("font-primary");
};

const closeDropdown = () => {
  dropdown.hidden = true;
  arrowDown.classList.remove("font-primary");
};

const handleItemClick = (e) => {
  e.stopPropagation();

  if (isAdditionItem(e.target)) {
    closeDropdown();
    return;
  }
  const contentElement = findContentElementFromItem(e.target);
  selectBoxContent.textContent = contentElement.textContent;
  changeSelectBoxColor();
  closeDropdown();
};

const addPaymentDropdownSelectListener = () => {
  dropdown.addEventListener("click", handleItemClick);
};

const preventButtonDefaultEvnet = (e) => {
  if (e.target === arrowDown) {
    e.preventDefault();
  }
};

const handleSelectBoxClick = (e) => {
  e.stopPropagation();
  preventButtonDefaultEvnet(e);
  dropdown.hidden = !dropdown.hidden;
  arrowDown.classList.toggle("filter-primary");
};

const addPaymentSelectBoxClickListener = () => {
  selectBox.addEventListener("click", handleSelectBoxClick);
};

const handleOutsideDrowndownClick = () => {
  closeDropdown();
};

const addPaymentDropdownOutsideClickListener = () => {
  document.addEventListener("click", handleOutsideDrowndownClick);
};

export {
  addPaymentDropdownSelectListener,
  addPaymentSelectBoxClickListener,
  addPaymentDropdownOutsideClickListener,
};
