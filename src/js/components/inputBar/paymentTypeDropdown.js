const selectBoxContent = document.querySelector(
  ".input-bar__item--payment-type .select-box p"
);
const dropdown = document.querySelector(
  ".input-bar__item--payment-type + .dropdown"
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

const handleItemClick = (e) => {
  if (isAdditionItem(e.target)) {
    dropdown.hidden = true;
    return;
  }
  const contentElement = findContentElementFromItem(e.target);
  selectBoxContent.textContent = contentElement.textContent;
  dropdown.hidden = true;
};

const addPaymentDropdownSelectListener = () => {
  dropdown.addEventListener("click", handleItemClick);
};

export { addPaymentDropdownSelectListener };
