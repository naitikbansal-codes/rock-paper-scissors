let choices = document.querySelectorAll(".choice");
let you = document.querySelector(".you-div");
let computer = document.querySelector(".comp-div");
let result = document.querySelector(".result");


function startShake(){
    you.style.animation = "shake 1s linear 2";
    computer.style.animation = "shake 1s linear 2";
};

function stopShake(){
    you.style.animation = "none";
    computer.style.animation = "none";
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {

        result.classList.remove("win");
        result.classList.remove("draw");
        result.classList.remove("lose");
        result.textContent = "";
        you.textContent = "👊🏻";
        computer.textContent = "👊🏻";

        let userChoice = choice.getAttribute("id");

        let options = ["Paper", "Rock", "Scissors"];
        let index = Math.floor(Math.random() * 3);
        let compChoice = options[index];

        startShake();

        setTimeout(()=>{
            stopShake();
            playGame(userChoice, compChoice);
        },2000)

    });
});

function playGame(user, comp) {

    console.log(`Your choice is ${user}`);
    console.log(`Comp choice is ${comp}`);

    if(user === "Rock"){
        you.textContent = "👊🏻";
    }
    else if(user === "Paper"){
        you.textContent = "✋🏻";
    }
    else{
        you.textContent = "✌🏻";
    };


    if(comp === "Rock"){
        computer.textContent = "👊🏻";
    }
    else if(comp === "Paper"){
        computer.textContent = "✋🏻";
    }
    else{
        computer.textContent = "✌🏻";
    }




    if (user === comp) {
        result.textContent = "Draw";
        result.classList.add("draw");
    }
    else if (user === "Rock" && comp === "Scissors") {
        result.textContent = "You won";
        result.classList.add("win");
    }
    else if (user === "Paper" && comp === "Rock") {
        result.textContent = "You won";
        result.classList.add("win");
    }
    else if (user === "Scissors" && comp === "Paper") {
        result.textContent = "You won";
        result.classList.add("win");
    }
    else {
        result.textContent = "You lose";
        result.classList.add("lose");
    };

};