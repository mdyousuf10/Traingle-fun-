
let formAmswers = document.querySelector(".quiz");
let buttonCheck = document.querySelector("#submit")
let output = document.querySelector(".output");

let correctAnswers = ["90°", "right angled"]

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResult = new FormData(formAmswers)
    for (let value of formResult.values()){
        if(value === correctAnswers[index]){
            score=score+1;
        }
        index=index+1;
    }
    output.innerText="Your score is "+ score;
}

buttonCheck.addEventListener('click', calculateScore);