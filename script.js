// Alert
const closeBtn = document.querySelector(".alert-close");

const alertPrimary = document.querySelector(".alert-primary");

closeBtn.addEventListener("click", () => (alertPrimary.style.display = "none"));

// Modal
const modalElement = document.querySelector(".modal");

const openModalButton = document.querySelector(".open-modal");

const closeModalButton = document.querySelector(".close-button");

openModalButton.addEventListener(
  "click",
  () => (modalElement.style.display = "block")
);

closeModalButton.addEventListener(
  "click",
  () => (modalElement.style.display = "none")
);

modalElement.addEventListener("click", (e) => {
  if (e.target == modalElement) {
    modalElement.style.display = "none";
  }
});

// form controls

const formControl = document.querySelector(".form-control");

// formControl.addEventListener(
//   "focusin",
//   (event) => (event.target.style.background = "#ccc")
// );

// formControl.addEventListener(
//   "focusout",
//   (event) => (event.target.style.background = "white")
// );

// Go to top of the page
const arrowTop = document.querySelector(".arrow-top");

window.addEventListener("scroll", () => (arrowTop.hidden = pageYOffset < 400));

arrowTop.addEventListener("click", () => window.scrollTo(pageXOffset, 0));
