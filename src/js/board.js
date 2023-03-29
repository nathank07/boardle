import * as p from './pieces.js'

export let gamestate = [false, false, false, false, false];
export let whiteBoardSide = true;
export let gamepositions = [];
export let answer = [];
//white | white short castle | white long castle | black short castle | black long castle

document.querySelector('.submit').addEventListener('click', flipBoard);

export default function createBoard(fen, answer){
    const board = document.getElementById('board');
    document.getElementById('board').innerHTML = ""
    const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const cfen = convertFEN(fen);
    let darkSquare = false;
    for(let r = 8; r > 0; r--){
        let row = document.createElement('div');
        row.classList.add('row');
        row.classList.add(`_${r}`);
        for(let c = 0; c < 8; c++){
            let col = document.createElement('div');
            if(darkSquare) { col.classList.add('darkSquare') }
            darkSquare = !darkSquare;
            col.classList.add('square');
            col.classList.add(`${files[c]}`);
            p.presentPiece(col, cfen[r - 1][c]); 
            row.appendChild(col);
        }
        darkSquare = !darkSquare;
        board.appendChild(row);
    }
    if(answer !== undefined){
        changeAnswer(answer);
    }
    if(!gamestate[0]){
        flipBoard();
    }
    //console.log(createArray());
    //console.log(convertFEN("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"))
}


function convertFEN(fen) {
    const sectionedFEN = fen.split(" ");
    if(sectionedFEN[1] === "w"){
        gamestate[0] = true;
    }
    sectionedFEN[2].split("").forEach(char => {
        if(char === "K"){
            gamestate[1] = true;
        }
        if(char === "Q"){
            gamestate[2] = true;
        }
        if(char === "k"){
            gamestate[3] = true;
        }
        if(char === "q"){
            gamestate[4] = true;
        }
    });
    const pieceRows = sectionedFEN[0].split("/");
    let pieceRowsc = [] // converted piece rows
    pieceRows.reverse().forEach(row => {
        let rowc = []
        for(let i = 0; i < row.length; i++){
            if(!isNaN(row[i])){
                for(let j = 0; j < row[i]; j++){
                    rowc.push("#");
                }
            } else {
                rowc.push(row[i]);
            }
        }
        pieceRowsc.push(rowc);
    });
    return pieceRowsc;
}

function changeAnswer(answer){
    let answers = answer.split(" ");
}

function convertBoard(board){

}

export function flipBoard(){
    let i;
    if(document.getElementById('board').firstChild.style.order !== ""){
        if(document.getElementById('board').firstChild.style.order === "-1"){
            i = 1;
        } else {
            i = -1;
        }
    } else{
        i = -1;
    }
    let j = 0;
    document.getElementById('board').querySelectorAll('.row').forEach(row => {
        let a = 0;
        j += i;
        row.style.order = j;
        row.querySelectorAll('.square').forEach(square => {
            a += i;
            square.style.order = a;
        });
    });
    whiteBoardSide = !whiteBoardSide;
}


