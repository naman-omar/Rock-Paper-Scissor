
let btns = document.querySelectorAll(".main button");
let textBtn = document.querySelector("#btn1");
let Restart = document.querySelector("#btn2");
let usrText = document.querySelector(".score :nth-child(1)");
let comptext = document.querySelector(".score :nth-child(2)");
let info = document.querySelector(".info");

let array = ["rock", "paper", "scissor"];
let userScore = 0;
let compScore = 0;
let click = 0;
let isStarted = 0;

function disable() {
    for (let btn of btns) {
        btn.disabled = true;
    }
}

function enable() {
    for (let btn of btns) {
        btn.disabled = false;
    }
}

for (let btn of btns) {
    btn.addEventListener("click", function () {
        Restart.innerHTML = "Restart Game";
        click++;
        isStarted = 1;
        btn.classList.add("changeBorder");
        setTimeout(() => {
            btn.classList.remove("changeBorder");
        }, 300);
        let user = btn.getAttribute("id");
        console.log(user);
        let rand = Math.floor(Math.random() * 3);
        let comp = array[rand];
        console.log(comp);
        info.innerHTML = `<p>You: ${user}</p><p>Comp: ${comp}</p>`;

        if (comp === user) {
            console.log("game is draw");
            textBtn.style.backgroundColor = "orange";
            textBtn.innerHTML = "Game Draw!"
        }
        else {
            if ((user == "rock" && comp == "paper") || (user == "paper" && comp == "scissor") || (user == "scissor" && comp == "stone")) {
                console.log("You Lose!")
                textBtn.style.backgroundColor = "red";
                textBtn.innerHTML = "You Lose!";
                compScore++;
                comptext.innerHTML = `Computer: ${compScore}`;
            }
            else {
                console.log("You Win!");
                textBtn.style.backgroundColor = "green";
                textBtn.innerHTML = "You Win!";
                userScore++;
                usrText.innerHTML = `Your score: ${userScore}`;
            }
        }
        if (click == 5) {
            disable();
            if (userScore > compScore) {
                setTimeout(function () {
                    textBtn.style.backgroundColor = "black";
                    textBtn.innerHTML = "Congrats, You Win the series";
                }, 1000);
            }
            else if (userScore < compScore) {
                setTimeout(function () {
                    textBtn.style.backgroundColor = "black";
                    textBtn.innerHTML = "Oops, You lose the series";
                }, 1000);
            }
            else {
                setTimeout(function () {
                    textBtn.style.backgroundColor = "black";
                    textBtn.innerHTML = "Series Draw!";
                },1000);
            }
            Restart.innerHTML = "New Game";
        }
    });
}

function reSetGame() {

    textBtn.innerHTML = "Play Your Move";
    textBtn.style.backgroundColor = "black";
    usrText.innerHTML = "Your score: 0";
    comptext.innerHTML = "Computer: 0";
    info.innerHTML = "<p>You:</p><p>Comp:</p>";
    enable();
    click = 0;
    isStarted = 0;
    userScore = 0;
    compScore = 0;
}

btn2.addEventListener("click", reSetGame);

