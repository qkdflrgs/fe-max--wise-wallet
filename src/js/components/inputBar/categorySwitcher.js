import { getCategories } from "../../contants/categories.js";

const handleCategorySwitcher = () => {
  const switcher = document.querySelector("#sign-switcher");
  switcher.addEventListener("change", switchCategory);
};

const switchCategory = (e) => {
  const categories = getCategories(e.currentTarget.checked);
  const categoryElements = createCategoryElements(categories);

  const dropdown = document.querySelector(
    ".input-bar__item--category .dropdown"
  );
  const originCategories = dropdown.firstElementChild;
  dropdown.replaceChild(categoryElements, originCategories);
};

const createCategoryElements = (categories) => {
  const list = document.createElement("ul");
  for (const c of categories) {
    list.appendChild(createItem(c));
  }
  return list;
};

const createItem = (category) => {
  const text = document.createElement("p");
  text.textContent = category;

  const content = document.createElement("div");
  content.className = "dropdown-item__content";
  content.appendChild(text);

  const item = document.createElement("li");
  item.className = "dropdown-item";
  item.appendChild(content);

  return item;
};

handleCategorySwitcher();
