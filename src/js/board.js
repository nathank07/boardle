import * as p from './pieces.js'
import updateAnswer, { submit, colorRow } from './answerboxes.js';
import getRandomPuzzle, { getID, getPuzzleByRating } from './fetch.js';

export let gamestate = [false, false, false, false, false];
export let pastBoardPos = [["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""]];
export let whiteBoardSide = true;
export let answerBoxes = [];
let side = true;
import bk from '../assets/cburnett/bK.svg' //black pawn
import wk from '../assets/cburnett/wK.svg' //white pawn
//white | white short castle | white long castle | black short castle | black long castle

document.querySelector('.submit').addEventListener('click', () => {
    if(pastBoardPos[5][0] !== ""){
        submit(answerBoxes);
        pastBoardPos = [pastBoardPos[0], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""]];
        createBoard(pastBoardPos[0][0]);
        colorRow(document.querySelector('.unsubmitted'));
        if(document.querySelector('.boardside').src === bk && board.querySelector('.row').style.order >= 0){
            flipBoard();
        }
    }
});
document.querySelector('.back').addEventListener('click', () => {
    updateBoardHistory(pastBoardPos, true, "");
    if(document.querySelector('.boardside').src === bk && board.querySelector('.row').style.order >= 0){
        flipBoard();
    }
});
document.querySelector('.flip').addEventListener('click', (flipBoard));
document.querySelector('.search').addEventListener('click', () =>{
    getID(document.querySelector('input').value);
})
document.querySelector('.random').addEventListener('click', () => {
    getRandomPuzzle();
})
document.querySelectorAll('.rating button').forEach(button => {
    button.addEventListener('click', ()=>{
        getPuzzleByRating(button.textContent);
    })
});
export default function createBoard(fen, answer){
    const board = document.getElementById('board');
    document.getElementById('board').innerHTML = ""
    const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const cfen = convertFENtoBoard(fen);
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
    if(pastBoardPos[0][0] === ""){
        pastBoardPos[0][0] = convertBoardtoFEN();
    }
    if(answer !== undefined){
        pastBoardPos = [["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""]];
        convertAnswer(answer);
    } 
}


function convertFENtoBoard(fen) {
    gamestate = [false, false, false, false, false];
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
    if(sectionedFEN[3] !== "-"){
        const files = {"a": 0, "b": 1, "c": 2, "d": 3, "e": 4, "f": 5, "g": 6, "h": 7};
        const file = files[sectionedFEN[3].split("")[0]];
        if(sectionedFEN[3].split("")[1] === "6"){
            pieceRowsc[5][file] = "e";
        } else {
            pieceRowsc[2][file] = "E";
        }
    }
    return pieceRowsc;
}

function convertAnswer(answer){
    answerBoxes = [];
    let answers = answer.split(" ");
    for(let i = 0; i < answers.length; i++){
        const oldSquare = p.notationToSquare(answers[i].substring(0,2));
        const newSquare = p.notationToSquare(answers[i].substring(2, 4));
        const promotion = answers[i].substring(4);
        if(answers.length - i <= 5){
            p.movePiece(oldSquare, newSquare, promotion, true);
        } else {
            p.movePiece(oldSquare, newSquare, promotion, false);
            pastBoardPos[0][0] = convertBoardtoFEN();
        }
    }
    document.querySelector('.answRow').querySelectorAll('.square').forEach(square => {
        answerBoxes.push(square.innerHTML);
    });
    for(let i = 0; i<=5; i++){
        updateBoardHistory(pastBoardPos, true, "");
        if(gamestate[0]){
            whiteBoardSide = true;
        } else {
            whiteBoardSide = false;
            flipBoard()
        }
    }
    console.log(answerBoxes);
    document.querySelector('.firstMove').innerHTML = `${whiteBoardSide ? "White" : "Black"} to move.`
    document.querySelector('.boardside').src = whiteBoardSide ? wk : bk;
    colorRow(document.querySelector('.unsubmitted'));
}

function convertBoardtoFEN(){
    let boardArr = p.getBoardPos();
    let posStr = "";
    let moveStr = `${gamestate[0] ? "w" : "b"}`;
    let castlingStr = `${gamestate[1] ? "K" : ""}${gamestate[2] ? "Q" : ""}${gamestate[3] ? "k" : ""}${gamestate[4] ? "q" : ""}`
    boardArr.forEach(row => {
        let posRow = "";
        let count = 0;
        row.forEach(square => {
            if(square === "#"){
                count += 1;
            } else {
                if(count !== 0){
                    posRow += `${count}${square}`;
                    count = 0;
                } else {
                    posRow += square;
                }
            }
        });
        if(count !== 0){
            posStr += `${posRow}${count}/`
        } else {
            posStr += `${posRow}/`
        }
    });
    posStr = posStr.slice(0, -1);
    return `${posStr} ${moveStr} ${castlingStr ? castlingStr : "-"} -`;
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
    side = board.querySelector('.row').style.order > 0
    document.querySelector('.boardside').src = side ? wk : bk;
}

export function updateBoardHistory(pastBoardPos, back, notation){
    if(back){
        for(let i = 5; i>=1; i--){
            if(pastBoardPos[i][0] !== ""){
                createBoard(pastBoardPos[i - 1][0]);
                pastBoardPos[i][0] = "";
                pastBoardPos[i][1] = "";
                i = 0;
            } else {
                createBoard(pastBoardPos[0][0]);
            }
        }
    } else {
        for(let i = 1; i<=5; i++){
            if(pastBoardPos[i][0] === ""){
                pastBoardPos[i][0] = convertBoardtoFEN();
                pastBoardPos[i][1] = notation;
                i = 5;
            }
        }
    }
    updateAnswer(pastBoardPos);
}
