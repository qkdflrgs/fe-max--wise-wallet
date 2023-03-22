const OUTCOME_CATEGORIES = [
  "생활",
  "식비",
  "교통",
  "쇼핑/뷰티",
  "의료/건강",
  "문화/여가",
  "미분류",
];
const INCOME_CATEGORIES = ["월급", "용돈", "기타수입"];

const getCategories = (isOutCome) => {
  if (isOutCome) {
    return OUTCOME_CATEGORIES;
  }
  return INCOME_CATEGORIES;
};

export { getCategories };
