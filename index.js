/*  */
const pageOne = document.querySelector(".page-1");
const pageTwo = document.querySelector(".page-2");
const previousStepButton = document.querySelector(".previous-step-button");
const nextStepButton = document.querySelector(".next-step-button");
const nextStepContainer = document.querySelector(".next-step-container");
const navbarStepNumber = document.querySelectorAll(".step-number");
const mainContianer = document.querySelector(".main-container");

const nameField = document.querySelector(".name-textarea");
const emailField = document.querySelector(".email-textarea");
const phoneField = document.querySelector(".phone-textarea");
const warningMsg = document.querySelectorAll(".warning-msg");

let currentPageIndex = 0;
pageOne.classList.add("appear");
pageOne.classList.add("show");
navbarStepNumber[currentPageIndex].classList.add("active");

nextStepButton.addEventListener("click", () => {
  turnNextPage(currentPageIndex);
});
previousStepButton.addEventListener("click", () => {
  turnPreviousPage(currentPageIndex);
});

function turnNextPage(index) {
  if (nameField.value === "") {
    warningMsg[0].classList.add("active");
    nameField.classList.add("invalid");
  } else {
    warningMsg[0].classList.remove("active");
    nameField.classList.remove("invalid");
  }
  if (emailField.value === "") {
    warningMsg[1].classList.add("active");
    emailField.classList.add("invalid");
  } else {
    warningMsg[1].classList.remove("active");
    emailField.classList.remove("invalid");
  }
  if (phoneField.value === "") {
    warningMsg[2].classList.add("active");
    phoneField.classList.add("invalid");
  } else {
    warningMsg[2].classList.remove("active");
    phoneField.classList.remove("invalid");
  }

  if (
    nameField.value !== "" &&
    emailField.value !== "" &&
    phoneField.value !== ""
  ) {
    currentPageIndex = index + 1;
    let windowSize = window.innerWidth;

    if (windowSize >= 700) {
      mainContianer.classList.add("disappear");

      setTimeout(function () {
        if (currentPageIndex === 1) {
          pageOne.classList.remove("show");
          pageTwo.classList.add("appear");
          previousStepButton.classList.add("appear");
        } else if (currentPageIndex === 2) {
          pageTwo.classList.remove("show");
          pageThree.classList.add("appear");
        } else if (currentPageIndex === 3) {
          pageThree.classList.remove("show");
          pageFour.classList.add("appear");
        }
      }, 300);
    } else {
      if (currentPageIndex === 1) {
        pageOne.classList.remove("show");
        pageTwo.classList.add("appear");
        previousStepButton.classList.add("appear");
      } else if (currentPageIndex === 2) {
        pageTwo.classList.remove("show");
        pageThree.classList.add("appear");
      } else if (currentPageIndex === 3) {
        pageThree.classList.remove("show");
        pageFour.classList.add("appear");
      }
    }

    setTimeout(function () {
      navbarStepNumber.forEach((stepNumber, index) => {
        if (index === currentPageIndex) {
          stepNumber.classList.add("active");
        } else {
          stepNumber.classList.remove("active");
        }
      });
      if (currentPageIndex === 1) {
        pageOne.classList.remove("appear");
        pageTwo.classList.add("show");
        previousStepButton.classList.add("show");
        nextStepContainer.classList.add("both-buttons");
      } else if (currentPageIndex === 2) {
        pageTwo.classList.remove("appear");
        pageThree.classList.add("show");
      } else if (currentPageIndex === 3) {
        pageThree.classList.remove("appear");
        pageFour.classList.add("show");
      }

      if (windowSize >= 700) {
        mainContianer.classList.remove("disappear");
      }
    }, 300);
  }
}

function turnPreviousPage(index) {
  currentPageIndex = index - 1;

  let windowSize = window.innerWidth;

  if (windowSize >= 700) {
    mainContianer.classList.add("disappear");

    setTimeout(function () {
      if (currentPageIndex === 0) {
        pageOne.classList.add("appear");
        pageTwo.classList.remove("show");
        previousStepButton.classList.remove("show");
      } else if (currentPageIndex === 1) {
        pageTwo.classList.add("appear");
        pageThree.classList.remove("show");
      } else if (currentPageIndex === 2) {
        pageThree.classList.add("appear");
        pageFour.classList.remove("show");
      } else if (currentPageIndex === 3) {
        pageFour.classList.add("appear");
        pageFive.classList.remove("show");
      }
    }, 300);
  } else {
    if (currentPageIndex === 0) {
      pageOne.classList.add("appear");
      pageTwo.classList.remove("show");
      previousStepButton.classList.remove("show");
    } else if (currentPageIndex === 1) {
      pageTwo.classList.add("appear");
      pageThree.classList.remove("show");
    } else if (currentPageIndex === 2) {
      pageThree.classList.add("appear");
      pageFour.classList.remove("show");
    } else if (currentPageIndex === 3) {
      pageFour.classList.add("appear");
      pageFive.classList.remove("show");
    }
  }

  setTimeout(function () {
    navbarStepNumber.forEach((stepNumber, index) => {
      if (index === currentPageIndex) {
        stepNumber.classList.add("active");
      } else {
        stepNumber.classList.remove("active");
      }
    });
    if (currentPageIndex === 0) {
      pageOne.classList.add("show");
      pageTwo.classList.remove("appear");
      previousStepButton.classList.remove("appear");
      nextStepContainer.classList.remove("both-buttons");
    } else if (currentPageIndex === 1) {
      pageTwo.classList.add("show");
      pageThree.classList.remove("appear");
    } else if (currentPageIndex === 2) {
      pageThree.classList.add("show");
      pageFour.classList.remove("appear");
    } else if (currentPageIndex === 3) {
      pageFour.classList.add("show");
      pageFive.classList.remove("appear");
    }

    if (windowSize >= 700) {
      mainContianer.classList.remove("disappear");
    }
  }, 300);
}

const monthlyLabel = document.querySelector(".monthly");
monthlyLabel.classList.add("active");
const yearlyLabel = document.querySelector(".yearly");
const switchInput = document.querySelector(".switch-input");
const arcadeCostLabel = document.querySelector(".plan-cost.arcade");
const advancedCostLabel = document.querySelector(".plan-cost.advanced");
const proCostLabel = document.querySelector(".plan-cost.pro");
const yearlyDiscountLabels = document.querySelectorAll(".yearly-discount");

switchInput.addEventListener("change", () => {
  monthlyLabel.classList.toggle("active");
  yearlyLabel.classList.toggle("active");

  arcadeCostLabel.style.opacity = 0;
  advancedCostLabel.style.opacity = 0;
  proCostLabel.style.opacity = 0;
  yearlyDiscountLabels.forEach((yearlyDiscountLabel) => {
    yearlyDiscountLabel.style.opacity = 0;
  });

  setTimeout(function () {
    yearlyDiscountLabels.forEach((yearlyDiscountLabel) => {
      yearlyDiscountLabel.classList.toggle("active");
    });
    if (monthlyLabel.classList.contains("active")) {
      arcadeCostLabel.textContent = "$9/mo";
      advancedCostLabel.textContent = "$12/mo";
      proCostLabel.textContent = "$15/mo";
    } else {
      arcadeCostLabel.textContent = "$90/yr";
      advancedCostLabel.textContent = "$120/yr";
      proCostLabel.textContent = "$150/yr";
    }
  }, 200);

  arcadeCostLabel.style.opacity = 1;
  advancedCostLabel.style.opacity = 1;
  proCostLabel.style.opacity = 1;
  yearlyDiscountLabels.forEach((yearlyDiscountLabel) => {
    yearlyDiscountLabel.style.opacity = 1;
  });
});
