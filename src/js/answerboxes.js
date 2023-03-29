const targetRow = document.querySelector('.unsubmitted');

export default function updateAnswer(pastBoardPos){
    const squares = [];
    targetRow.querySelectorAll('.square').forEach(square => {
        squares.push(square);
    });
    for(let i = 1; i<=5; i++){
        squares[i - 1].innerHTML = pastBoardPos[i][1];
    }
}