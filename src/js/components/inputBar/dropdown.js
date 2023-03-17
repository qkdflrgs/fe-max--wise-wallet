const handleDropdown = () => {
  const selectBoxes = document.querySelectorAll(".select-box");
  const dropdowns = document.querySelectorAll(".dropdown");

  selectBoxes.forEach((s) => {
    s.addEventListener("click", toggleDropdown);
  });
  dropdowns.forEach((d) => {
    d.addEventListener("click", selectItem);
  });

  document.addEventListener("click", hideActiveDropdown);
};

const toggleDropdown = (e) => {
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
  const item = e.target.closest(".dropdown-item");
  if (item.classList.contains("item-addition")) {
    hideActiveDropdown();
    return;
  }

  const content = item.firstElementChild.firstElementChild.textContent;
  const dropdown = item.closest(".dropdown");
  updateSelectBox(dropdown, content);
  activateSelectBox(dropdown);
  hideActiveDropdown();
};

const updateSelectBox = (dropdown, content) => {
  const selectBox = dropdown.previousElementSibling;
  selectBox.firstElementChild.textContent = content;
};

const activateSelectBox = (dropdown) => {
  const selectBox = dropdown.previousElementSibling;
  if (!selectBox.classList.contains("selected")) {
    selectBox.classList.add("selected");
  }
}

const deactivateSelectBox = (dropdown) => {
  const selectBox = dropdown.previousElementSibling;
  selectBox.classList.remove('selected');
}

handleDropdown();
export { updateSelectBox, deactivateSelectBox };
