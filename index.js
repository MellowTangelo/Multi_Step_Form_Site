const pageOne = document.querySelector(".page-1");
const pageTwo = document.querySelector(".page-2");
const pageThree = document.querySelector(".page-3");
const pageFour = document.querySelector(".page-4");
const pageFive = document.querySelector(".page-5");
const previousStepButton = document.querySelector(".previous-step-button");
const nextStepButton = document.querySelector(".next-step-button");
const nextStepContainer = document.querySelector(".next-step-container");
const navbarStepNumber = document.querySelectorAll(".step-number");
const mainContianer = document.querySelector(".main-container");

const monthlyLabel = document.querySelector(".monthly");
monthlyLabel.classList.add("active");
const yearlyLabel = document.querySelector(".yearly");
const switchInput = document.querySelector(".switch-input");

const arcadeCostLabel = document.querySelector(".plan-cost.arcade");
const advancedCostLabel = document.querySelector(".plan-cost.advanced");
const proCostLabel = document.querySelector(".plan-cost.pro");
const serviceCostLabel = document.querySelector(".add-on-cost.service");
const storageCostLabel = document.querySelector(".add-on-cost.storage");
const profileCostLabel = document.querySelector(".add-on-cost.profile");
const yearlyDiscountLabels = document.querySelectorAll(".yearly-discount");

const nameField = document.querySelector(".name-textarea");
const emailField = document.querySelector(".email-textarea");
const phoneField = document.querySelector(".phone-textarea");
const warningMsg = document.querySelectorAll(".warning-msg");

const chosenPlanLabel = document.querySelector(".chosen-plan");
const planTotalLabel = document.querySelector(".plan-total");
const chosenPeriodLabel = document.querySelector(".chosen-period");
const totalPeriodLabel = document.querySelector(".total-period");
const arcadeRadio = document.querySelector(".arcade-option");
const advancedRadio = document.querySelector(".advanced-option");
const proRadio = document.querySelector(".pro-option");
const totalValueLabel = document.querySelector(".total-value");
const changePlanButton = document.querySelector(".change-plan-button");
const submitButton = document.querySelector(".submit-button");
const pageContent = document.querySelector(".page-content");

const onlineServiceContainer = document.querySelector(
  ".online-service-wrapper"
);
const largerStorageContainer = document.querySelector(
  ".larger-storage-wrapper"
);
const customizableProfileContainer = document.querySelector(
  ".customizable-profile-wrapper"
);
const onlineServiceCheckbox = document.querySelector(".online-service-option");
const largerStorageCheckbox = document.querySelector(".larger-storage-option");
const customizableProfileCheckbox = document.querySelector(
  ".customizable-profile-option"
);
const onlineServiceTotal = document.querySelector(".online-service-total");
const largerStorageTotal = document.querySelector(".larger-storage-total");
const customizableProfileTotal = document.querySelector(
  ".customizable-profile-total"
);

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

submitButton.addEventListener("click", () => {
  goToPageFive();
});

function goToPageFive() {
  pageFour.classList.remove("appear");
  nextStepContainer.classList.add("disappear");
  pageContent.classList.add("ending");
  pageFive.classList.add("appear");
}

changePlanButton.addEventListener("click", () => {
  goToPageTwo();
});

function goToPageTwo() {
  currentPageIndex = 1;
  pageFour.classList.remove("appear");
  nextStepButton.classList.remove("inactive");
  submitButton.classList.remove("active");
  pageTwo.classList.add("appear");
}

function calculateBill() {
  let planAndPeriod = "";
  let periodTotal = "";
  let valueToPay = 0;
  let planTotal = 0;
  let onlineService = 1;
  let largerStorage = 2;
  let customizableProfile = 2;

  if (arcadeRadio.checked) {
    planAndPeriod += "Arcade";
    planTotal = 9;
    planTotalLabel.textContent = "$9/mo";
  } else if (advancedRadio.checked) {
    planAndPeriod += "Advanced";
    planTotal = 12;
    planTotalLabel.textContent = "$12/mo";
  } else if (proRadio.checked) {
    planAndPeriod += "Pro";
    planTotal = 15;
  }
  valueToPay += planTotal;

  if (onlineServiceCheckbox.checked) {
    valueToPay += onlineService;
    onlineServiceContainer.classList.add("checked");
  } else {
    onlineServiceContainer.classList.remove("checked");
  }
  if (largerStorageCheckbox.checked) {
    valueToPay += largerStorage;
    largerStorageContainer.classList.add("checked");
  } else {
    largerStorageContainer.classList.remove("checked");
  }
  if (customizableProfileCheckbox.checked) {
    valueToPay += customizableProfile;
    customizableProfileContainer.classList.add("checked");
  } else {
    customizableProfileContainer.classList.remove("checked");
  }

  if (monthlyLabel.classList.contains("active")) {
    periodTotal = "mo";
    planAndPeriod += " (Monthly)";
    totalPeriodLabel.textContent = "month";
  } else {
    periodTotal = "yr";
    planAndPeriod += " (Yearly)";
    onlineService *= 10;
    largerStorage *= 10;
    customizableProfile *= 10;
    planTotal *= 10;
    valueToPay *= 10;
    totalPeriodLabel.textContent = "year";
  }

  onlineServiceTotal.textContent = `+$${onlineService}/${periodTotal}`;
  largerStorageTotal.textContent = `+$${largerStorage}/${periodTotal}`;
  customizableProfileTotal.textContent = `+$${customizableProfile}/${periodTotal}`;
  planTotalLabel.textContent = `$${planTotal}/${periodTotal}`;
  totalValueLabel.textContent = `$${valueToPay}/${periodTotal}`;
  chosenPlanLabel.textContent = planAndPeriod;
}

function validateName() {
  const validRegex = /^[A-Za-z]+(?: [A-Za-z]+)?$/;

  if (nameField.value.match(validRegex)) {
    warningMsg[0].classList.remove("active");
    nameField.classList.remove("invalid");
    return true;
  } else {
    warningMsg[0].textContent = "Invalid name format";
    warningMsg[0].classList.add("active");
    nameField.classList.add("invalid");
    return false;
  }
}

function validateEmail() {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (emailField.value.match(validRegex)) {
    warningMsg[1].classList.remove("active");
    emailField.classList.remove("invalid");
    return true;
  } else {
    warningMsg[1].textContent = "Invalid e-mail format";
    warningMsg[1].classList.add("active");
    emailField.classList.add("invalid");
    return false;
  }
}

function validatePhoneNumber() {
  const validRegex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

  if (phoneField.value.match(validRegex)) {
    warningMsg[2].classList.remove("active");
    phoneField.classList.remove("invalid");
    return true;
  } else {
    warningMsg[2].textContent = "Invalid phone number format";
    warningMsg[2].classList.add("active");
    phoneField.classList.add("invalid");
    return false;
  }
}

function turnNextPage(index) {
  let isNameCorrect = false;
  let isEmailCorrect = false;
  let isPhoneCorrect = false;

  if (nameField.value === "") {
    warningMsg[0].classList.add("active");
    nameField.classList.add("invalid");
  } else if (nameField.value.length > 0) {
    isNameCorrect = validateName();
  }

  if (emailField.value === "") {
    warningMsg[1].textContent = "This field is required";
    warningMsg[1].classList.add("active");
    emailField.classList.add("invalid");
  } else if (emailField.value.length > 0) {
    isEmailCorrect = validateEmail();
  }

  if (phoneField.value === "") {
    warningMsg[2].classList.add("active");
    phoneField.classList.add("invalid");
  } else if (phoneField.value.length > 0) {
    isPhoneCorrect = validatePhoneNumber();
  }

  if (isNameCorrect && isEmailCorrect && isPhoneCorrect) {
    currentPageIndex = index + 1;

    navbarStepNumber.forEach((stepNumber, index) => {
      if (index === currentPageIndex) {
        stepNumber.classList.add("active");
      } else {
        stepNumber.classList.remove("active");
      }
    });

    if (currentPageIndex === 1) {
      pageOne.classList.remove("appear");
      pageTwo.classList.add("appear");
      previousStepButton.classList.add("appear");
      nextStepContainer.classList.add("both-buttons");
    } else if (currentPageIndex === 2) {
      pageTwo.classList.remove("appear");
      pageThree.classList.add("appear");
    } else if (currentPageIndex === 3) {
      calculateBill();
      pageThree.classList.remove("appear");
      nextStepButton.classList.add("inactive");
      submitButton.classList.add("active");
      pageFour.classList.add("appear");
    }
  }
}

function turnPreviousPage(index) {
  currentPageIndex = index - 1;

  navbarStepNumber.forEach((stepNumber, index) => {
    if (index === currentPageIndex) {
      stepNumber.classList.add("active");
    } else {
      stepNumber.classList.remove("active");
    }
  });

  if (currentPageIndex === 0) {
    pageOne.classList.add("appear");
    pageTwo.classList.remove("appear");
    previousStepButton.classList.remove("show");
    previousStepButton.classList.remove("appear");
    nextStepContainer.classList.remove("both-buttons");
  } else if (currentPageIndex === 1) {
    pageTwo.classList.add("appear");
    pageThree.classList.remove("appear");
  } else if (currentPageIndex === 2) {
    pageThree.classList.add("appear");
    pageFour.classList.remove("appear");
    nextStepButton.classList.remove("inactive");
    submitButton.classList.remove("active");
  } else if (currentPageIndex === 3) {
    pageFour.classList.add("appear");
  }
}

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
      serviceCostLabel.textContent = "$1/mo";
      storageCostLabel.textContent = "$2/mo";
      profileCostLabel.textContent = "$2/mo";
    } else {
      arcadeCostLabel.textContent = "$90/yr";
      advancedCostLabel.textContent = "$120/yr";
      proCostLabel.textContent = "$150/yr";
      serviceCostLabel.textContent = "$10/yr";
      storageCostLabel.textContent = "$20/yr";
      profileCostLabel.textContent = "$20/yr";
    }
  }, 200);

  arcadeCostLabel.style.opacity = 1;
  advancedCostLabel.style.opacity = 1;
  proCostLabel.style.opacity = 1;
  yearlyDiscountLabels.forEach((yearlyDiscountLabel) => {
    yearlyDiscountLabel.style.opacity = 1;
  });
});
