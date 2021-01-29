"use strict";

const slider = document.querySelector(".slider");
const amount = document.querySelector(".priceAmount");
const button = document.querySelector(".switch");
const period = document.querySelector(".pricePeriod");
const discountText = document.querySelector(".discount");

const yearly = [96, 144, 192, 288, 432];
const monthly = [8, 12, 16, 24, 36];
const discount = 0.75;
let switchState = true;

if (window.matchMedia("(max-width: 700px)").matches) {
  discountText.innerHTML = "25%";
}
slider.oninput = function () {
  if (switchState === true) {
    amount.innerHTML = "$" + monthly[slider.value].toFixed(2);
  } else if (switchState === false) {
    amount.innerHTML = "$" + (yearly[slider.value] * discount).toFixed(2);
  }
};

function togglePrice() {
  button.classList.toggle("switchAnnual");
  if (button.classList.contains("switchAnnual")) {
    switchState = false;
    amount.innerHTML = "$" + (yearly[slider.value] * discount).toFixed(2);
    period.innerHTML = "/ yearly";
  } else {
    switchState = true;
    amount.innerHTML = "$" + monthly[slider.value].toFixed(2);
    period.innerHTML = "/ monthly";
  }
}
button.addEventListener("click", togglePrice);
