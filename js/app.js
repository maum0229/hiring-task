const questions = document.querySelectorAll(".question");

questions.forEach((elem) => {
  elem.addEventListener("click",  () => {
    let answer = this.nextElementSibling; // Get the next sibling (answer paragraph)
    let icon = this.querySelector("i"); // Get the icon inside the clicked question

    if (answer) {
      answer.classList.toggle("hidden"); // Toggle answer visibility
    }

    if (icon) {
      icon.classList.toggle("rotate-180"); // Rotate the icon
    }
  });
});
