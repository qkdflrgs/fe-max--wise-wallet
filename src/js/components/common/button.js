const preventDefault = () => {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
};

preventDefault();
