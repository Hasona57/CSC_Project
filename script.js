var forms = document.querySelectorAll(".quiz");

for (var f = 0; f < forms.length; f++) {
    forms[f].addEventListener("submit", checkQuiz);
}

function checkQuiz(event) {
    event.preventDefault();

    var form = event.target;
    var result = form.querySelector(".result");
    var score = 0;

    for (var i = 1; i<= 3; i++){
        var answer = form.querySelector('input[name="q' + i + '"]:checked');
        if (answer == null) {
            result.textContent = "Please answer all 3 questions."
            return;
        }

        score = score + Number(answer.value);
    }
    result.textContent = "Your Score: " + score + " /3";
}