const questions = document.querySelectorAll(".question");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function () {
    questions[i].nextElementSibling.classList.toggle("hidden");
    const icon = questions[i].querySelector(".fa-solid");
    if (icon.classList.contains("fa-plus")) {
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
    } else {
      icon.classList.add("fa-plus");
      icon.classList.remove("fa-minus");
    }
  });
}
