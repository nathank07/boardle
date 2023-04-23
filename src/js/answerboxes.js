import { getRandomPuzzle, puzzleDetails } from "./fetch";
import { gamestate, answerBoxes } from "./board";
import promptAudio from '../assets/sounds/GenericNotify.ogg'
export let promptPage;

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
    if(green === 5 || document.querySelector('.unsubmitted') === null){
        displayWinLoss(green === 5)
        document.querySelectorAll('.unsubmitted').forEach(row => {
            row.classList.remove('unsubmitted');
        });
        const audio = new Audio(promptAudio);
        audio.play();
    }
}

export function colorRow(row){
    let toggle = gamestate[0];
    row.querySelectorAll('.square').forEach(square => {
        square.classList.add(toggle ? 'white' : 'black');
        toggle = !toggle;
    });
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
            sq.classList.remove('black');
            sq.classList.remove('white');
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
    const playerAnswer = document.createElement('div');
    playerAnswer.classList.add('playerAnswer');
    const solution = document.createElement('div');
    solution.classList.add('solution');
    const answerText = document.createElement('h4');
    answerText.classList.add('answerText');
    answerText.innerHTML = "Solution:"

    let tries = 0;
    let playerString = "";
    document.querySelectorAll('.answRow').forEach(row => {
        if(!row.classList.contains('unsubmitted')){
            const playerAnswers = document.createElement('div');
            playerAnswers.classList.add('answers');
            row.querySelectorAll('.square').forEach(sq => {
                const answSquare = document.createElement('div');
                sq.classList.forEach(divClass => {
                    if(divClass === "gray" || divClass === "yellow" || divClass ==="green"){
                        answSquare.classList.add(divClass);
                        if(divClass === "gray"){
                            playerString += "⬛"
                        }
                        if(divClass === "yellow"){
                            playerString += "🟨"
                        }
                        if(divClass === "green"){
                            playerString += "🟩"
                        }
                    }
                });
                answSquare.classList.add('answer');
                answSquare.innerHTML = `${sq.innerHTML}`
                playerAnswers.appendChild(answSquare)
            });
            playerAnswer.appendChild(playerAnswers);
            tries += 1
            playerString += "\n"
        }
    });

    info.innerHTML = `You completed puzzle <b>#${puzzleDetails[0]}</b> in ${tries} out of 5 tries.`;

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
    const engineButton = document.createElement('a');
    const link = flipEngineLink(puzzleDetails[3]);
    engineButton.classList.add('engine');
    engineButton.innerHTML = 'Engine';
    engineButton.href = link;
    engineButton.addEventListener("click", (e) => {
        e.preventDefault();
        window.open(link, "_blank");
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
        let text = 
`NK Boardle #${puzzleDetails[0]} ${tries}/5 ${win ? "ت" : ""}
Lichess Elo: ${puzzleDetails[1]}
\n${playerString}
${window.location.origin}/puzzle?=${puzzleDetails[0]}`;
        navigator.clipboard.writeText(text);
        const shareNotif = document.createElement('div');
        shareNotif.classList.add('clipboardNotif');
        if(document.querySelector('.clipboardNotif')){
            let notif = document.querySelector('.clipboardNotif');
            let number = notif.innerHTML.match(/\d+/g);
            if(number === null){
                notif.innerHTML = "<div>Copied to clipboard!  <b>(2)</b></div>"
            } else {
                notif.innerHTML = `<div>Copied to clipboard!  <b>(${Number(number) + 1})</b></div>`;
            }
        } else {
            shareNotif.innerHTML = "Copied to clipboard!";
            prompt.appendChild(shareNotif);
        }
    });
    footer.appendChild(engineButton);
    footer.appendChild(newPuzzle);
    footer.appendChild(shareButton);
    overlay.appendChild(prompt);
    overlay.addEventListener('click', () => {
        overlay.remove();
    });
    prompt.addEventListener('click', (event) => {
        event.stopPropagation();
    });
    prompt.appendChild(id);
    prompt.appendChild(info);
    prompt.appendChild(solution);
    prompt.appendChild(playerAnswer);
    prompt.appendChild(footer);
    document.body.appendChild(overlay);
    promptPage = overlay;
}

function flipEngineLink(link){
    if (link.includes('/black')) {
        return link.replace('/black', '');
      } else {
        const index = link.lastIndexOf('#');
        if (index === -1) {
          return link + '/black';
        } else {
          return link.slice(0, index) + '/black' + link.slice(index);
        }
      }
}