const priceInput = document.querySelector("#input-price");

const initDefaultPrice = () => {
  priceInput.value = 0;
};

const handlePriceInputEvent = (e) => {
  const number = Number(e.target.value.replace(/[^0-9]/g, ""));
  priceInput.value = number.toLocaleString();
};

const addPriceInputEventListener = () => {
  priceInput.addEventListener("input", handlePriceInputEvent);
};

addPriceInputEventListener();

export { initDefaultPrice };
