let userScore = 0;
let computerScore = 0;
const userScore_div = document.getElementById("user-score");
const computerScore_div = document.getElementById("computer-score");
const r_div = document.getElementById("r");
const p_div = document.getElementById("p");
const s_div = document.getElementById("s");
const result_div = document.querySelector(".result > p");
const reset_button = document.getElementById('reset');

function getRealNames(optionCharacter){
    switch (optionCharacter) {
        case 'r': return 'Rock';
        case 's': return 'Scissor';
        case 'p': return 'Paper';
    }
}

function getComputerChoice() {
    let A = ['r','p','s'];
    return A[Math.floor(Math.random()*3)];
}

function won(userOption, computerOption){
    const userChoice_div = document.getElementById(userOption);
    userScore++;
    userScore_div.innerHTML = userScore;
    computerScore_div.innerHTML = computerScore;
    result_div.innerHTML = `${getRealNames(userOption)} beats ${getRealNames(computerOption)}, You WON!!!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(userOption, computerOption){
    const userChoice_div = document.getElementById(userOption);
    computerScore++;
    userScore_div.innerHTML = userScore;
    computerScore_div.innerHTML = computerScore;
    result_div.innerHTML = `${getRealNames(computerOption)} beats ${getRealNames(userOption)}, You LOST!!!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userOption, computerOption){
    const userChoice_div = document.getElementById(userOption);
    userScore_div.innerHTML = userScore;
    computerScore_div.innerHTML = computerScore;
    result_div.innerHTML = `It's a DRAW!!`;
    userChoice_div.classList.add('no-glow');
    setTimeout(() => userChoice_div.classList.remove('no-glow'), 300);
}

function reset(){
    userScore = 0;
    computerScore = 0;
    userScore_div.innerHTML = userScore;
    computerScore_div.innerHTML = computerScore;
    result_div.innerHTML =`Score are back to 0:0`;
}
function game(userOption){
    let computerOption = getComputerChoice();
    console.log(userOption+computerOption);
    switch(userOption+computerOption){
        case "rs":
        case "pr":
        case "sp":
            won(userOption, computerOption);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userOption, computerOption);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userOption, computerOption);
            break;
    }
};
function main(userOption){
    r_div.addEventListener('click', () => game("r"));
    p_div.addEventListener('click', () => game("p"));
    s_div.addEventListener('click', () => game("s"));
    reset_button.addEventListener('click', () => reset());
}
main();