const current = new Date();
const PREV = -1;
const NEXT = 1;

const initDefaultMonthYear = () => {
  const yearView = document.querySelector("#year");
  const monthView = document.querySelector("#month");
  const monthNameView = document.querySelector("#month-en");

  yearView.textContent = current.getFullYear();
  monthView.textContent = current.getMonth() + 1;
  monthNameView.textContent = current.toLocaleString("en-US", {
    month: "long",
  });
};

const updateMonthTo = (diff) => {
  current.setMonth(current.getMonth() + diff);
};

const handlePrevButtonClick = () => {
  updateMonthTo(PREV);
  initDefaultMonthYear();
};

const handleNextButtonClick = () => {
  updateMonthTo(NEXT);
  initDefaultMonthYear();
};

const initMonthYearButtons = () => {
  const prevButton = document.querySelector(".prev-month-btn");
  const nextButton = document.querySelector(".next-month-btn");

  prevButton.addEventListener("click", handlePrevButtonClick);
  nextButton.addEventListener("click", handleNextButtonClick);
};

export { initDefaultMonthYear, initMonthYearButtons };
