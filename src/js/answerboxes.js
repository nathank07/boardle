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
        }
    }
}