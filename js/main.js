let amount = 5500;

const totalAmount = document.getElementById("total-amount");
const donationAmount = document.querySelectorAll(".donation-amount");
const donateBtns = document.querySelectorAll(".btn");
const inputFields = document.querySelectorAll(".input");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-btn");
const donate = document.querySelector(".donate-btn");
const history = document.querySelector(".history-btn");
const historySection = document.querySelector(".history");
const donationContainer = document.querySelector(".donation-container");
console.log(historySection);

// history button functionality
history.addEventListener("click", function () {
  historySection.classList.remove("hidden");
  document.querySelector("main").classList.add("hidden");
  history.classList.add("bg-[#B4F461]");
  history.classList.remove("border-2");
  donate.classList.remove("bg-[#B4F461]");
  donate.classList.add("border-2");
});
//donation button functionality
donate.addEventListener("click", function () {
  historySection.classList.add("hidden");
  document.querySelector("main").classList.remove("hidden");
  donate.classList.add("bg-[#B4F461]");
  donate.classList.remove("border-2");
  history.classList.remove("bg-[#B4F461]");
  history.classList.add("border-2");
});

// changing the money amount
const addingMoney = function (value) {
  amount -= value;
  totalAmount.innerText = amount;
};

// createing donation history
const addDonationHistory = function (value, index) {
  historySection.querySelector("h3").classList.add("hidden");
  const donation = document.createElement("div");
  donationContainer.appendChild(donation);
  donation.classList.add("p-4", "text-xl", "space-y-4", "rounded-xl", "border");
  const details = document.createElement("p");
  details.innerText = ` ${value} Taka donated for ${
    inputFields[index].parentElement.parentElement.querySelector("h3").innerText
  }`;
  const time = document.createElement("p");
  time.innerText = Date();
  donation.appendChild(details);
  donation.appendChild(time);
};
const checkValidation = function (input, index) {
  const value = parseInt(input);
  if (value > amount || isNaN(value) || value <= 0) {
    alert("Invalid input");
  } else {
    overlay.classList.remove("hidden");
    modal.classList.remove("hidden");

    const fund = +donationAmount[index].innerText + value;
    donationAmount[index].innerText = fund;
    addingMoney(value);
    addDonationHistory(value, index);
  }
};

for (let i = 0; i < donateBtns.length; i++) {
  donateBtns[i].addEventListener("click", function (e) {
    e.preventDefault();
    checkValidation(inputFields[i].value, i);
    console.log(window.innerHeight);
  });
}

// close modal window
closeModalBtn.addEventListener("click", function () {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");

  for (let i = 0; i < inputFields.length; i++) {
    inputFields[i].value = "";
  }
});

const a =
  inputFields[0].parentElement.parentElement.querySelector("h3").innerText;

console.log(a.split("for"));
