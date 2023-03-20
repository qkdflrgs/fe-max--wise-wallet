const inputBar = document.querySelector(".input-bar");

const checkDateInput = () => {
    
}


const checkAllInputValues = () => {
    checkDateInput();
    // checkPriceInput();
    // checkContentInput();
    // checkPaymentInput();
    // checkCategoryInput();
}

inputBar.addEventListener("click", checkAllInputValues);
inputBar.addEventListener("input", checkAllInputValues);
