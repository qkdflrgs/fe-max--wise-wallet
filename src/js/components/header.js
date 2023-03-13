const current = new Date();
const setMonth = function (diff) {
  current.setMonth(current.getMonth() + diff);
};

export const initMonthInfo = () => {
  const carouselChildren = document.querySelector(
    ".month-carousel--current"
  ).children;
  const monthYearInfo = [
    current.getFullYear(),
    current.getMonth() + 1,
    current.toLocaleString("en-US", { month: "long" }),
  ];

  for (let i = 0; i < carouselChildren.length; i++) {
    carouselChildren[i].textContent = monthYearInfo[i];
  }
};

export const initCarouselButton = () => {
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  prevBtn.addEventListener("click", () => {
    setMonth(-1);
    initMonthInfo();
  });
  nextBtn.addEventListener("click", () => {
    setMonth(1);
    initMonthInfo();
  });
};
