const selectBoxContent = document.querySelector(
  ".input-bar__item--payment-type .select-box p"
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

const isAdditionItem = (item) => {
  return item.closest(".item-addition") !== null;
};

const changeSelectBoxColor = () => {
    if (selectBoxContent.classList.contains('font-primary')) return;
    selectBoxContent.classList.add('font-primary');
}

const closeDropdown = () => {
  dropdown.hidden = true;
  arrowDown.classList.toggle("font-primary");
};

const handleItemClick = (e) => {
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

export { addPaymentDropdownSelectListener };
