import { getCategories } from "../../contants/categories.js";
import { deactivateSelectBox, updateSelectBox } from "./dropdown.js";

const INITIAL_SELECT_BOX_CONTENT = "선택하세요";

const initCategorySwitcher = () => {
  const switcher = document.querySelector("#sign-switcher");
  switcher.addEventListener("change", switchCategory);
};

const switchCategory = (e) => {
  const categories = getCategories(e.currentTarget.checked);
  const dropdown = document.querySelector(".input-bar__item--category .dropdown");
  const categoryElements = createCategoryElements(categories);
  const originCategories = dropdown.firstElementChild;

  updateSelectBox(dropdown, INITIAL_SELECT_BOX_CONTENT);
  deactivateSelectBox(dropdown);

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

export { initCategorySwitcher };
