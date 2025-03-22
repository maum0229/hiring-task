// FAQ toggle fuction
const questions = document.querySelectorAll(".question");

questions.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    let question = event.currentTarget;
    let answer = question.nextElementSibling; 
    let icon = question.querySelector("i");

    answer.classList.toggle("hidden"); 
    icon.classList.toggle("rotate-180"); 
  });
});
