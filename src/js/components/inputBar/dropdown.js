const handleDropdown = () => {
  const selectBoxes = document.querySelectorAll(".select-box");
  const items = document.querySelectorAll(".dropdown-item");

  selectBoxes.forEach((s) => {
    s.addEventListener("click", showDropdown);
  });
  items.forEach((i) => {
    i.addEventListener("click", selectItem);
  });

  document.addEventListener("click", hideActiveDropdown);
};

const showDropdown = (e) => {
  e.stopPropagation();

  if (!isActiveDropdown(e)) {
    hideActiveDropdown();
  }

  const selectBox = e.currentTarget;
  const dropdown = selectBox.nextElementSibling;

  selectBox.classList.toggle("active");
  dropdown.classList.toggle("active");
  dropdown.hidden = !dropdown.hidden;
};

const hideActiveDropdown = () => {
  const activeSelectBoxes = document.querySelectorAll(".select-box.active");
  const activeDropdowns = document.querySelectorAll(".dropdown.active");

  activeSelectBoxes.forEach((s) => s.classList.toggle("active"));
  activeDropdowns.forEach((d) => {
    d.classList.toggle("active");
    d.hidden = true;
  });
};

const isActiveDropdown = (e) =>
  e.target.closest(".select-box.active") ||
  e.target.closest(".dropdown.active");

const selectItem = (e) => {
  const item = e.currentTarget;
  if (item.classList.contains("item-addition")) {
    hideActiveDropdown();
    return;
  }

  const selectBox = document.querySelector(".select-box.active");
  selectBox.firstElementChild.textContent =
    item.firstElementChild.firstElementChild.textContent;
  if (!selectBox.classList.contains("selected")) {
    selectBox.classList.add("selected");
  }
  hideActiveDropdown();
};

handleDropdown();
