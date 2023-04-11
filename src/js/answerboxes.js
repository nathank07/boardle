import getRandomPuzzle, { puzzleDetails } from "./fetch";
import { answerBoxes } from "./board";

export default function updateAnswer(pastBoardPos){
    const targetRow = document.querySelector('.unsubmitted');
    const squares = [];
    targetRow.querySelectorAll('.square').forEach(square => {
        squares.push(square);
    });
    for(let i = 1; i<=5; i++){
        squares[i - 1].innerHTML = pastBoardPos[i][1];
    }
}

export function submit(answers){
    const targetRow = document.querySelector('.unsubmitted');
    const squares = [];
    targetRow.querySelectorAll('.square').forEach(square => {
        squares.push(square);
    });
    targetRow.classList.remove("unsubmitted");
    let green = 0;
    for(let i = 0; i<5; i++){
        if(squares[i].innerHTML !== answers[i]){
            squares[i].classList.add('gray');
        } 
        if(answers.includes(squares[i].innerHTML)){
            squares[i].classList.remove('gray');
            squares[i].classList.add('yellow');
        }
        if(squares[i].innerHTML === answers[i]){
            squares[i].classList.remove('yellow');
            squares[i].classList.add('green');
            green += 1;
        }
    }
    if(green === 5){
        displayWinLoss(true)
    } else {
        if(document.querySelector('.unsubmitted') === null){
            displayWinLoss(false);
        }
    }
}

export function clearAnswers(){
    const answerRows = document.querySelectorAll('.answRow');
    answerRows.forEach(row => {
        row.classList.add('unsubmitted');
        row.querySelectorAll('.square').forEach(sq => {
            sq.innerHTML = "";
            sq.classList.remove('gray');
            sq.classList.remove('yellow');
            sq.classList.remove('green');
        });
    });
}

function displayWinLoss(win){
    const overlay = document.createElement('div');
    overlay.classList.add('fulloverlay');
    const prompt = document.createElement('div');
    prompt.classList.add('puzzleprompt');
    const id = document.createElement('div');
    id.classList.add('id');
    id.innerHTML = `#${puzzleDetails[0]}`
    const info = document.createElement('p');
    info.classList.add('info');
    info.innerHTML = `You completed ${puzzleDetails[0]}`;
    const playerAnswer = document.createElement('div');
    playerAnswer.classList.add('playerAnswer');
    const solution = document.createElement('div');
    solution.classList.add('solution');
    const answerText = document.createElement('h4');
    answerText.classList.add('answerText');
    answerText.innerHTML = "Solution:"

    document.querySelectorAll('.answRow').forEach(row => {
        if(row.classList.contains('.unsubmitted') === false){
            console.log('a');
            const playerAnswers = document.createElement('div');
            playerAnswers.classList.add('answers');
            row.querySelectorAll('.square').forEach(sq => {
                const answSquare = document.createElement('div');
                answSquare.classList.add('answer');
                answSquare.innerHTML = `${sq.innerHTML}`
                playerAnswers.appendChild(answSquare)
            });
            playerAnswer.appendChild(playerAnswers);
        }
    });
    const solutionAnswers = document.createElement('div');
    solutionAnswers.classList.add('answers');
    answerBoxes.forEach(box => {
        const solutionAnswer = document.createElement('div');
        solutionAnswer.classList.add('answer');
        solutionAnswer.innerHTML = box;
        solutionAnswers.appendChild(solutionAnswer);
    });
    solution.appendChild(answerText);
    solution.appendChild(solutionAnswers);

    const footer = document.createElement('div');
    footer.classList.add('footer');
    const engineButton = document.createElement('button');
    engineButton.classList.add('engine');
    engineButton.innerHTML = 'Engine';
    engineButton.addEventListener("click", () => {
        window.open(puzzleDetails[3], "_blank");
    });
    const newPuzzle = document.createElement('button');
    newPuzzle.classList.add('newPuzzle');
    newPuzzle.innerHTML = 'New Puzzle';
    newPuzzle.addEventListener('click', () => {
        overlay.remove()
        getRandomPuzzle();
    });
    const shareButton = document.createElement('button');
    shareButton.classList.add('share');
    shareButton.innerHTML = 'Share';
    shareButton.addEventListener('click', () => {
        console.log('shared');
    });
    footer.appendChild(engineButton);
    footer.appendChild(newPuzzle);
    footer.appendChild(shareButton);
    overlay.appendChild(prompt);
    prompt.appendChild(id);
    prompt.appendChild(info);
    prompt.appendChild(playerAnswer);
    prompt.appendChild(solution);
    prompt.appendChild(footer);
    document.body.appendChild(overlay)
}