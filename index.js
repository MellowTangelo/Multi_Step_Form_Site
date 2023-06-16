/*  */
const pageOne = document.querySelector(".page-1");
const pageTwo = document.querySelector(".page-2");
const previousStepButton = document.querySelector(".previous-step-button");
const nextStepButton = document.querySelector(".next-step-button");
const nextStepContainer = document.querySelector(".next-step-container");

let currentPageIndex = 0;
pageOne.classList.add("active");

nextStepButton.addEventListener("click", () => {
  turnNextPage(currentPageIndex);
});
previousStepButton.addEventListener("click", () => {
  turnPreviousPage(currentPageIndex);
});

function turnNextPage(index) {
  currentPageIndex = index + 1;

  pageOne.style.opacity = 0;
  pageTwo.style.opacity = 0;
  previousStepButton.style.opacity = 0;
  setTimeout(function () {
    if (currentPageIndex === 0) {
      pageOne.classList.add("active");
      pageTwo.classList.remove("active");
    } else if (currentPageIndex === 1) {
      pageOne.classList.remove("active");
      pageTwo.classList.add("active");
      previousStepButton.classList.add("active");
      nextStepContainer.classList.add("both-buttons");
    } else if (currentPageIndex === 2) {
      pageOne.classList.remove("active");
      pageTwo.classList.remove("active");
    } else if (currentPageIndex === 3) {
      pageOne.classList.remove("active");
      pageTwo.classList.remove("active");
    }

    pageOne.style.opacity = 1;
    pageTwo.style.opacity = 1;
    previousStepButton.style.opacity = 1;
  }, 400);
}

function turnPreviousPage(index) {
  currentPageIndex = index - 1;

  pageOne.style.opacity = 0;
  pageTwo.style.opacity = 0;
  previousStepButton.style.opacity = 0;
  setTimeout(function () {
    if (currentPageIndex === 0) {
      pageOne.classList.add("active");
      pageTwo.classList.remove("active");
      previousStepButton.classList.remove("active");
      nextStepContainer.classList.remove("both-buttons");
    } else if (currentPageIndex === 1) {
      pageOne.classList.remove("active");
      pageTwo.classList.add("active");
    } else if (currentPageIndex === 2) {
      pageOne.classList.remove("active");
      pageTwo.classList.remove("active");
    } else if (currentPageIndex === 3) {
      pageOne.classList.remove("active");
      pageTwo.classList.remove("active");
    }

    pageOne.style.opacity = 1;
    pageTwo.style.opacity = 1;
    previousStepButton.style.opacity = 1;
  }, 400);
}
