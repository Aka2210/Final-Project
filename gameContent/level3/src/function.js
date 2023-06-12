document.addEventListener("DOMContentLoaded", function() {
    const countdownElement = document.querySelector(".time-remaining");
    const progressBar = document.querySelector(".progress-bar");

    let countdown = 30;
    let width = 100;

    const timer = setInterval(() => {
        countdown--;
        width = (countdown / 30) * 100;

        countdownElement.textContent = countdown;

        progressBar.style.width = width + "%";

        if (countdown <= 10) {
            progressBar.style.backgroundColor = "#ff0000";
        }

        if (countdown <= 0) {
            clearInterval(timer);
        }
    }, 1000);
});