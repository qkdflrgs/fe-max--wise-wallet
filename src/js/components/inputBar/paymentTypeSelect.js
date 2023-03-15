const selectBox = document.querySelector(".input-bar__item--payment-type .select-box");
const dropdown = document.querySelector(
  ".input-bar__item--payment-type + .dropdown"
);

const isClosedInClassNameList = () => {
  return dropdown.classList.contains("closed");
};

const handleSelectBoxClick = () => {
  if (isClosedInClassNameList()) {
    dropdown.classList.remove("closed");
    return;
  }
  dropdown.classList.add("closed");
};

const addPaymentSelectBoxClickListener = () => {
  selectBox.addEventListener("click", handleSelectBoxClick);
};

export { addPaymentSelectBoxClickListener };
