function checkAnswer() {
    const form = document.getElementById('quiz-form');
    const feedback = document.getElementById('feedback');
    const selectedAnswer = form.answer.value;

    if (selectedAnswer === "B") {
        feedback.textContent = "Correct! The song is about rebellion and self-empowerment.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorrect! Try again.";
        feedback.style.color = "red";
    }
}
