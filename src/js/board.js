import * as p from './pieces.js'
import updateAnswer, { submit } from './answerboxes.js';

export let gamestate = [false, false, false, false, false];
export let pastBoardPos = [["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""]];
export let whiteBoardSide = true;
export let gamepositions = [];
export let answer = ["h4+", "kg6", "h5+", "kg5", "f4#"];
//white | white short castle | white long castle | black short castle | black long castle

document.querySelector('.submit').addEventListener('click', () => {
    if(pastBoardPos[5][0] !== ""){
        submit(answer);
        pastBoardPos = [pastBoardPos[0], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""]];
        createBoard(pastBoardPos[0][0]);
    }
});
document.querySelector('.back').addEventListener('click', () => {
    updateBoardHistory(pastBoardPos, true, "");
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
    if(answer !== undefined){
        changeAnswer(answer);
    }
    if(!whiteBoardSide){
        flipBoard();
    }
    //console.log(createArray());
    //console.log(convertFENtoBoard("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"))
    //console.log(convertBoardtoFEN());
    if(pastBoardPos[0][0] === ""){
        if(!gamestate[0]){
            whiteBoardSide = false;
            flipBoard();
        }
        pastBoardPos[0][0] = convertBoardtoFEN();
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

function changeAnswer(answer){
    let answers = answer.split(" ");
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
}

export function updateBoardHistory(pastBoardPos, back, notation){
    if(back){
        for(let i = 5; i>=1; i--){
            if(pastBoardPos[i][0] !== ""){
                createBoard(pastBoardPos[i - 1][0]);
                pastBoardPos[i][0] = "";
                pastBoardPos[i][1] = "";
                i = 0;
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

