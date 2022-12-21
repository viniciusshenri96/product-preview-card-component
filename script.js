"use strict";

const detailsContainer = document.querySelector(".details-container");
const btnDetails = document.querySelectorAll(".btn__details");
const detailContent = document.querySelectorAll(".details__content");

detailsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".btn__details");

  if (!clicked) return;

  detailContent.forEach((detail) => detail.classList.remove("active"));
  btnDetails.forEach((btn) => btn.classList.remove("active"));

  clicked.classList.add("active");

  document
    .querySelector(`.details__content-${clicked.dataset.tab}`)
    .classList.add("active");
});
