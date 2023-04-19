import * as p from './pieces.js'
import updateAnswer, { submit, colorRow, promptPage } from './answerboxes.js';
import getRandomPuzzle, { getID, getPuzzleByRating } from './fetch.js';

export let gamestate = [false, false, false, false, false];
export let pastBoardPos = [["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""]];
export let whiteBoardSide = true;
export let answerBoxes = [];
let side = true;
export let highlights = [];
export const arrows = new Set();
import bk from '../assets/cburnett/bK.svg' //black pawn
import wk from '../assets/cburnett/wK.svg' //white pawn
//white | white short castle | white long castle | black short castle | black long castle

document.querySelector('.submit').addEventListener('click', () => {
    if(promptPage){
        document.body.appendChild(promptPage);
    } else {
        if(pastBoardPos[5][0] !== ""){
            submit(answerBoxes);
            if(document.querySelector('.unsubmitted') !== null){
                pastBoardPos = [pastBoardPos[0], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""]];
                highlights = [highlights[0]]
                createBoard(pastBoardPos[0][0]);
                highlights[0]();
                p.highlightKing(gamestate[0]);
                p.selectSquare();
                colorRow(document.querySelector('.unsubmitted'));
            }
            if(document.querySelector('.boardside').src === bk && board.querySelector('.row').style.order >= 0){
                flipBoard();
            }
        }
    }
});
document.querySelector('.back').addEventListener('click', back);
function back(){
    if(document.querySelector('.unsubmitted') !== null){
        updateBoardHistory(pastBoardPos, true, "");
        p.highlightKing(gamestate[0]);
        p.selectSquare();
        if(highlights.length > 1){
            highlights.pop();
            highlights[highlights.length - 1]();
        } else {
            highlights[0]()
        }
        if(document.querySelector('.boardside').src === bk && board.querySelector('.row').style.order >= 0){
            flipBoard();
        }
    }
}

window.addEventListener('wheel', function(e) {
    if (e.deltaY > 0) { // scrolling down
        window.scrollTo(0, 0);
        this.document.body.classList.add('stop-scrolling');
        back();
    } else {
        this.document.body.classList.remove('stop-scrolling');
    }
});

window.addEventListener('keydown', function(event) {
    if(event.key === 'ArrowLeft') {
        back();
    };
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
    board.addEventListener('contextmenu', event => event.preventDefault());
    document.getElementById('board').innerHTML = "";
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
            handleRightClick(col);
            p.presentPiece(col, cfen[r - 1][c]); 
            row.appendChild(col);
        }
        darkSquare = !darkSquare;
        board.appendChild(row);
    }
    board.appendChild(createCanvas());
    if(pastBoardPos[0][0] === ""){
        pastBoardPos[0][0] = convertBoardtoFEN();
    }
    if(answer !== undefined){
        pastBoardPos = [["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""]];
        convertAnswer(answer);
    }
    annotateBoard();
    p.makeSquaresClickable();
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
    promptPage = undefined;
    let answers = answer.split(" ");
    for(let i = 0; i < answers.length; i++){
        const oldSquare = p.notationToSquare(answers[i].substring(0,2));
        const newSquare = p.notationToSquare(answers[i].substring(2, 4));
        const promotion = answers[i].substring(4);
        if(answers.length - i <= 5){
            p.movePiece(oldSquare, newSquare, promotion, true, false);
        } else {
            p.movePiece(oldSquare, newSquare, promotion, false, false);
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
    p.highlightKing(gamestate[0]);
    p.highlightMove(answers[answers.length - 6].substring(0,2), answers[answers.length - 6].substring(2,4));
    highlights = [];
    highlights[0] = (() => p.highlightMove(answers[answers.length - 6].substring(0,2), answers[answers.length - 6].substring(2,4)));
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
    const canvas = document.querySelector('canvas');
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
    side = board.querySelector('.row').style.order > 0;
    side ? canvas.classList.remove('flipped') : canvas.classList.add('flipped')
    document.querySelector('.boardside').src = side ? wk : bk;
    annotateBoard();
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

function annotateBoard() {
    if(document.querySelector('.annotation') === null){
        document.querySelector('#board').querySelectorAll('.row').forEach(row => {
            const annotation = document.createElement('div');
            annotation.innerHTML = row.classList[1].charAt(1);
            annotation.classList.add('annotation');
            row.appendChild(annotation);
        });
    }
    const row = document.querySelector('#board').querySelector('.row');
    let files = ["a","b","c","d","e","f","g","h"];
    if(row.style.order > 0 || row.style.order === ""){
        files.reverse();
    }
    const bottomAnnotations = document.createElement('div');
        files.forEach((file, index) => {
            const fileDiv = document.createElement('div');
            fileDiv.innerHTML = file;
            fileDiv.style.color = index % 2 === 0 ? '#B58863' : '#F0D9B5';
            bottomAnnotations.appendChild(fileDiv);
        });
    bottomAnnotations.classList.add('bottomAnnotation');
    if(document.querySelector('.bottomAnnotation') !== null){
        document.querySelector('.bottomAnnotation').remove();
    }
    document.querySelector('#board').appendChild(bottomAnnotations);
    document.querySelectorAll('.annotation').forEach(annotation => {
        if(row.style.order < 0){
            annotation.style.color = annotation.innerHTML % 2 === 0 ? '#F0D9B5' : '#B58863';
        } else {
            annotation.style.color = annotation.innerHTML % 2 === 0 ? '#B58863' : '#F0D9B5'
        }
    });
}

function colorSquare(square){
    p.selectSquare()
    if(square.classList.contains('selected')){
        square.classList.remove('selected');
    } else {
        square.classList.add('selected');
    }
}

function handleRightClick(square){
    square.onmousedown = dragMouseDown;
    function dragMouseDown(e){
        if(event.button === 2){
            if(e.buttons >= 3){
                return;
            }
            if(e.target.tagName === "IMG"){
                square = e.target.parentElement;
            } else {
                square = e.target;
            }
            document.onmouseup = closeDragElement;
        }
    }
    function closeDragElement(){
        if(event.button === 2){
            document.onmouseup = null;
            document.onmousemove = null;
            let targets = document.querySelectorAll('#board .square');
            let closestTarget = null;
            let closestDistance = Infinity;
            targets.forEach(target => {
            let targetSq = target.getBoundingClientRect();
            let targetX = targetSq.left + targetSq.width / 2;
            let targetY = targetSq.top + targetSq.height / 2;
            let distance = Math.sqrt(Math.pow(event.clientX - targetX, 2) + Math.pow(event.clientY - targetY, 2));
            if (distance < closestDistance) {
                closestTarget = target;
                closestDistance = distance;
            }
            });
            if(closestTarget === square){
                colorSquare(square);
            } else {
                if(closestDistance < closestTarget.getBoundingClientRect().width){
                    const startX = squareToCoordinates(square)[0];
                    const startY = squareToCoordinates(square)[1]; 
                    const endX = squareToCoordinates(closestTarget)[0];
                    const endY = squareToCoordinates(closestTarget)[1];
                    const arrow = `${startX},${startY},${endX},${endY}`;
                    if(arrows.has(arrow)){
                        drawArrow(startX, startY, endX, endY, true) //remove arrow
                        arrows.delete(arrow);
                    } else {
                        drawArrow(startX, startY, endX, endY, false)
                        arrows.add(arrow);
                    }
                }
            }
        }
    }
}


function createCanvas(){
    const canvas = document.createElement('canvas');
    canvas.width = 1600;
    canvas.height = 1600;
    return canvas;
}

function drawArrow(startX, startY, endX, endY, remove){ //function taken from https://github.com/frogcat/canvas-arrow
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const controlPoints = [0, 20, -75, 20, -75, 50];
    ctx.fillStyle = 'orange';
    ctx.globalAlpha = remove ? 1 : 0.8;
    ctx.globalCompositeOperation = remove ? 'destination-out' : 'source-over';
    ctx.beginPath();
    var dx = endX - startX;
    var dy = endY - startY;
    var len = Math.sqrt(dx * dx + dy * dy);
    var sin = dy / len;
    var cos = dx / len;
    var a = [];
    a.push(0, 0);
    for (var i = 0; i < controlPoints.length; i += 2) {
      var x = controlPoints[i];
      var y = controlPoints[i + 1];
      a.push(x < 0 ? len + x : x, y);
    }
    a.push(len, 0);
    for (var i = controlPoints.length; i > 0; i -= 2) {
      var x = controlPoints[i - 2];
      var y = controlPoints[i - 1];
      a.push(x < 0 ? len + x : x, -y);
    }
    a.push(0, 0);
    for (var i = 0; i < a.length; i += 2) {
      var x = a[i] * cos - a[i + 1] * sin + startX;
      var y = a[i] * sin + a[i + 1] * cos + startY;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.fill();
}
  

function squareToCoordinates(square){
    const xValues = {"a": 100, "b": 300, "c": 500, "d": 700, "e": 900, "f": 1100, "g": 1300, "h": 1500};
    const yValues = {"8": 100, "7": 300, "6": 500, "5": 700, "4": 900, "3": 1100, "2": 1300, "1": 1500};
    const x = xValues[p.notateSquare(square).split("")[0]]
    const y = yValues[p.notateSquare(square).split("")[1]]
    return [x, y]
}
