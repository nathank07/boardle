import bk from '../assets/cburnett/bK.svg' //black king
import wk from '../assets/cburnett/wK.svg' //white king
import bq from '../assets/cburnett/bQ.svg' //black queen
import wq from '../assets/cburnett/wQ.svg' //white queen
import br from '../assets/cburnett/bR.svg' //black rook
import wr from '../assets/cburnett/wR.svg' //white rook
import bb from '../assets/cburnett/bB.svg' //black bishop
import wb from '../assets/cburnett/wB.svg' //white bishop
import bn from '../assets/cburnett/bN.svg' //black knight
import wn from '../assets/cburnett/wN.svg' //white knight
import bp from '../assets/cburnett/bP.svg' //black pawn
import wp from '../assets/cburnett/wP.svg' //white pawn
import { gamestate } from './board';
const isUpperCase = (string) => /^[A-Z]*$/.test(string);

export function presentPiece(square, piece){
    const pieces = {
        k: bk,
        K: wk,
        q: bq,
        Q: wq,
        r: br,
        R: wr,
        b: bb,
        B: wb,
        n: bn,
        N: wn,
        p: bp,
        P: wp,
    }
    if(piece !== "#") {  
        const pIcon = new Image();
        pIcon.src = pieces[piece];
        pIcon.classList.add(piece);
        dragPiece(pIcon);
        square.appendChild(pIcon);
    }

    function dragPiece(p) { // Modified function from https://www.w3schools.com/howto/howto_js_draggable.asp
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        p.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            // get the offset between the element and its parent container:
            let rect = p.getBoundingClientRect();
            let offsetX = rect.left - p.offsetLeft;
            let offsetY = rect.top - p.offsetTop;
            // set the initial position of the element to the center of the cursor:
            let centerX = p.offsetWidth / 2;
            let centerY = p.offsetHeight / 2;
            p.style.left = (pos3 - centerX - offsetX) + "px";
            p.style.top = (pos4 - centerY - offsetY) + "px";
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }
        
        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            p.style.top = (p.offsetTop - pos2) + "px";
            p.style.left = (p.offsetLeft - pos1) + "px";
            p.style.zIndex = "2";
        }
        
        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
          
            // find all potential target elements:
            let targets = document.querySelectorAll('#board .square');
          
            // calculate the center coordinates of the dragged element:
            let dragSq = p.getBoundingClientRect();
            let dragX = dragSq.left + dragSq.width / 2;
            let dragY = dragSq.top + dragSq.height / 2;
          
            // find the closest target element:
            let closestTarget = null;
            let closestDistance = Infinity;
            targets.forEach(target => {
              let targetSq = target.getBoundingClientRect();
              let targetX = targetSq.left + targetSq.width / 2;
              let targetY = targetSq.top + targetSq.height / 2;
              let distance = Math.sqrt(Math.pow(dragX - targetX, 2) + Math.pow(dragY - targetY, 2));
              if (distance < closestDistance) {
                closestTarget = target;
                closestDistance = distance;
              }
            });
            const board = document.getElementById('board');
            let take = closestTarget.firstChild === null ? false : true
            const overwrittenTarget = closestTarget.innerHTML;
            // center the dragged element onto the closest target:
            if (closestTarget && closestTarget !== square && closestDistance < closestTarget.getBoundingClientRect().width / 2 && checkLegal(piece, square, closestTarget, take, getBoardPos())) {
                closestTarget.innerHTML = "";
                square.innerHTML = "";
                p.style.zIndex = "1";
                presentPiece(closestTarget, piece);
                if(illegalPos(board)){
                    closestTarget.innerHTML = "";
                    presentPiece(square, piece);
                } else {
                    if(isCheck(board, !gamestate[0])){
                        console.log(calculateNotation(piece, closestTarget, take, true, isCheckMate(board, !gamestate[0])));
                    } else {
                        console.log(calculateNotation(piece, closestTarget, take, false, false));
                    }
                    gamestate[0] = !gamestate[0];
                }
                //console.log(piece, closestTarget);
            }
            else{
                square.innerHTML = "";
                closestTarget = overwrittenTarget;
                presentPiece(square, piece);
                //console.log("b", pullBoardPos());
            }
          }
      }

}

function illegalPos(board){
    return isCheck(board, gamestate[0]);
}

function calculateNotation(piece, square, take, check, checkmate){
    return `${piece.toLowerCase() === "p" ? "" : piece.toLowerCase()}${take ? "x" : ""}${notateSquare(square)}${checkmate ? "#" : check ? "+" : ""}`
}

function notateSquare(square){
    const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const rows = ["_1", "_2", "_3", "_4", "_5", "_6", "_7", "_8"];
    let file;
    let row;
    square.classList.forEach(property => {
        if(files.includes(property)){
            file = property;
        }
    });
    square.parentElement.classList.forEach(property => {
        if(rows.includes(property)){
            row = property[1];
        }
    });
    return `${file}${row}`;
}

function getBoardPos(){
    let arr = []
    const board = document.getElementById('board');
    board.querySelectorAll('.row').forEach(row => {
        let squares = []
        row.querySelectorAll('.square').forEach(square => {
            if(square.firstChild === null){
                squares.push("#");
            } else{
                squares.push(square.firstChild.classList[0]);
            }
        });
        arr.push(squares);
    });
    return arr;
}

function checkLegal(piece, oldSquare, newSquare, take, board, exempt) {
    const files = {"a": 1, "b": 2, "c": 3, "d": 4, "e": 5, "f": 6, "g": 7, "h": 8};
    const oldFile = files[notateSquare(oldSquare)[0]];
    const newFile = files[notateSquare(newSquare)[0]];
    const oldRank = Number(notateSquare(oldSquare)[1]);
    const newRank = Number(notateSquare(newSquare)[1]);
    let x = oldRank - 1;
    let y = oldFile - 1;
    const rboard = [...board].reverse();
    if(!exempt){
        if(gamestate[0] !== isUpperCase(piece)){
            return false;
        }
    }
    if(take){
        const taken = isUpperCase(rboard[newRank - 1][newFile - 1]);
        const movingPiece = isUpperCase(piece);
        if(taken === movingPiece){
            return false;
        }
    }
    switch (piece.toLowerCase()) {
      case "p":
        const direction = (piece === "P") ? 1 : -1; 
        const startingSquare = (piece === "P") ? 2 : 7;
        if(take){
            if(newRank - oldRank === direction && (newFile === oldFile + 1 || newFile === oldFile - 1)){
                return true;
            }
            return false;
        }
        if(oldFile === newFile && newRank - oldRank === direction){
            return true;
        }
        if(oldFile === newFile && oldRank === startingSquare && newRank - oldRank === (direction*2)){
            if(rboard[x+direction][y] === "#"){
                return true;
            }
        }
        break;
      case "n":
        if ((Math.abs(newFile - oldFile) === 2 && Math.abs(newRank - oldRank) === 1) ||
            (Math.abs(newFile - oldFile) === 1 && Math.abs(newRank - oldRank) === 2)) {
          return true;
        }
        break;
      case "b":
        if(newFile > oldFile){
            if(newRank > oldRank){ //top right
                for(let i = oldRank + 1; i < newRank; i++){  
                    x += 1
                    y += 1
                    if(rboard[x][y] !== "#"){
                        return false;
                    }
                }
                if(newRank - 2 === x && newFile - 2 === y){
                    return true;
                }
            }
            if(newRank < oldRank){ //bottom right
                for(let i = oldRank - 1; i > newRank; i--){  
                    x -= 1
                    y -= -1
                    if(rboard[x][y] !== "#"){
                        return false;
                    }
                }
                if(newRank === x && newFile - 2 === y){
                    return true;
                }
            }
        }
        if(newFile < oldFile){
            if(newRank > oldRank){ //top left
                for(let i = oldRank + 1; i < newRank; i++){  
                    x -= -1;
                    y -= 1;
                    if(rboard[x][y] !== "#"){
                        return false;
                    }
                }
                if(newRank - 2 === x && newFile === y){
                    return true;
                }
            }
            if(newRank < oldRank){ //bottom left
                for(let i = oldRank - 1; i > newRank; i--){  
                    x += -1;
                    y += -1;
                    if(rboard[x][y] !== "#"){
                        return false;
                    }
                }
                if(newRank === x && newFile === y){
                    return true;
                }
            }
        }        
        break;
      case "r":
        if(oldRank === newRank){
            if(oldFile < newFile){ //right
                for(let i = newFile - 1; i > oldFile; i--){
                    y += 1
                    if(rboard[x][y] !== "#"){
                        return false;
                    }
                }
                return true;
            } else { //left
                for(let i = oldFile - 1; i > newFile; i--){
                    y -= 1
                    if(rboard[x][y] !== "#"){
                        return false;
                    }
                }
                return true;
            }
        }
        if(oldFile === newFile){
            if(oldRank < newRank){ //up
                for(let i = newRank - 1; i > oldRank; i--){
                    x += 1
                    if(rboard[x][y] !== "#"){
                        return false;
                    }
                }
                return true;
            } else { //down
                for(let i = oldRank - 1; i > newRank; i--){
                    x -= 1
                    if(rboard[x][y] !== "#"){
                        return false;
                    }
                }
                return true;
            }
        }
        break;
      case "q":
        if(checkLegal(piece === "Q" ? "R" : "r", oldSquare, newSquare, take, board, true)){
            return true;
        }
        if(checkLegal(piece === "Q" ? "B" : "b", oldSquare, newSquare, take, board, true)){
            return true;
        }
        break;
      case "k":
        if ((Math.abs(newFile - oldFile) === 1 && Math.abs(newRank - oldRank) === 1) ||
            (Math.abs(newFile - oldFile) === 0 && Math.abs(newRank - oldRank) === 1) || 
            (Math.abs(newFile - oldFile) === 1 && Math.abs(newRank - oldRank) === 0) ) {
          return true;
        }
        break;
      default:
        // Invalid piece type
        break;
    }
    
    return false;
}

function isCheck(board, white){
    const boardArr = getBoardPos();
    const kL = locateKing(white);
    const files = {1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "g", 8: "h"};
    const kingSquare = board.querySelector(`._${kL[0]}`).querySelector(`.${files[kL[1]]}`);
    let check = false;
    board.querySelectorAll('.row').forEach(row => {
        row.querySelectorAll('.square').forEach(square => {
            if(square.firstChild !== null && (isUpperCase(square.firstChild.classList[0]) !== white)){
                if(checkLegal(square.firstChild.classList[0], square, kingSquare, true, boardArr, true)){
                    check = true;
                }
            }
        });
    });

    function locateKing(white) {
        const rboardArr = [...boardArr].reverse();
        const king = white ? "K" : "k";
        for (let i = 0; i < rboardArr.length; i++) {
            for (let j = 0; j < rboardArr.length; j++) {
                if(king === rboardArr[i][j]) {
                    return [i + 1, j + 1];
                }
            }
        }
    }
    return check;
}

function isCheckMate(board, white){
    const boardArr = getBoardPos();
    const rboardArr = [...boardArr].reverse();
    let boardDivs = [];
    [...board.querySelectorAll('.row')].reverse().forEach(row => {
        let rows = []
        row.querySelectorAll('.square').forEach(square => {
            rows.push(square);
        });
        boardDivs.push(rows);
    });
    let legalmoves = 0;
    for (let i = 0; i < rboardArr.length; i++) {
        for (let j = 0; j < rboardArr.length; j++) {
            if(rboardArr[i][j] !== "#" && (isUpperCase(rboardArr[i][j]) === white)){
                switch(rboardArr[i][j].toLowerCase()){
                    case "p":
                        const pdirections = [[1, 0],[2, 0],[-1, 0], [-2, 0], [1, 1],  [1, -1], [-1, -1],[-1, 1]];
                        for (const [dx, dy] of pdirections) {
                        const x = i + dx;
                        const y = j + dy;
                        if (x >= 0 && x < 8 && y >= 0 && y < 8) {
                            const take = rboardArr[x][y] !== "#";
                            if (checkLegal(rboardArr[i][j], boardDivs[i][j], boardDivs[x][y], take, boardArr, true)) {
                                if(testMoves(rboardArr[i][j], boardDivs[i][j], boardDivs[x][y])){
                                    //console.log(boardDivs[i][j], boardDivs[x][y])
                                    legalmoves += 1
                                }
                            }
                        }
                        }
                        break;
                    case "n":
                        const ndirections = [[2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1]];
                        for (const [dx, dy] of ndirections) {
                            let x = i + dx;
                            let y = j + dy;
                            if (x >= 0 && x < 8 && y >= 0 && y < 8) {
                                const take = rboardArr[x][y] !== "#";
                                if(checkLegal(rboardArr[i][j], boardDivs[i][j], boardDivs[x][y], take, boardArr, true)) {
                                    if(testMoves(rboardArr[i][j], boardDivs[i][j], boardDivs[x][y])){
                                        //console.log(boardDivs[i][j], boardDivs[x][y])
                                        legalmoves += 1;
                                    }
                                }
                            }
                        }
                    case "b":
                        const bdirections = [[1, 1], [1, -1], [-1, -1], [-1, 1]];
                        for (const [dx, dy] of bdirections) {
                            let x = i + dx;
                            let y = j + dy;
                            while (x >= 0 && x < 8 && y >= 0 && y < 8) {
                                const take = rboardArr[x][y] !== "#";
                                if (checkLegal(rboardArr[i][j], boardDivs[i][j], boardDivs[x][y], take, boardArr, true)) {
                                    if(testMoves(rboardArr[i][j], boardDivs[i][j], boardDivs[x][y])){
                                        //console.log(boardDivs[i][j], boardDivs[x][y])
                                        legalmoves += 1;
                                    }
                                }
                                if (take) {
                                    break;
                                }
                                x += dx;
                                y += dy;
                            }
                        }
                        break;
                    case "r":
                        const rdirections = [[0, 1], [1, 0], [0, -1], [-1, 0]];
                        for (const [dx, dy] of rdirections) {
                            let x = i + dx;
                            let y = j + dy;
                            while (x >= 0 && x < 8 && y >= 0 && y < 8) {
                                const take = rboardArr[x][y] !== "#";
                                if(checkLegal(rboardArr[i][j], boardDivs[i][j], boardDivs[x][y], take, boardArr, true)) {
                                    if(testMoves(rboardArr[i][j], boardDivs[i][j], boardDivs[x][y])){
                                        //console.log(boardDivs[i][j], boardDivs[x][y])
                                        legalmoves += 1;
                                    }
                                }
                                if (take) {
                                    break;
                                }
                                x += dx;
                                y += dy;
                            }
                        }
                        break;
                    case "q":
                        const qdirections = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];
                        for (const [dx, dy] of qdirections) {
                            let x = i + dx;
                            let y = j + dy;
                            while (x >= 0 && x < 8 && y >= 0 && y < 8) {
                                const take = rboardArr[x][y] !== "#";
                                if (checkLegal(rboardArr[i][j], boardDivs[i][j], boardDivs[x][y], take, boardArr, true)) {
                                    if(testMoves(rboardArr[i][j], boardDivs[i][j], boardDivs[x][y])){
                                        //console.log(boardDivs[i][j], boardDivs[x][y])
                                        legalmoves += 1;
                                    }
                                }
                                if (take) {
                                    break;
                                }
                                x += dx;
                                y += dy;
                            }
                        }
                        break;
                    case "k":
                        const kdirections = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];
                        for (const [dx, dy] of kdirections) {
                            let x = i + dx;
                            let y = j + dy;
                            if (x >= 0 && x < 8 && y >= 0 && y < 8) {
                                const take = rboardArr[x][y] !== "#";
                                if(checkLegal(rboardArr[i][j], boardDivs[i][j], boardDivs[x][y], take, boardArr, true)) {
                                    if(testMoves(rboardArr[i][j], boardDivs[i][j], boardDivs[x][y])){
                                        //console.log(boardDivs[i][j], boardDivs[x][y])
                                        legalmoves += 1;
                                    }
                                }
                            }
                        }
                        break;
                }
            }
        }
    }

    function testMoves(piece, oldSquare, newSquare){
        const newSquareChild = newSquare.firstChild;
        oldSquare.innerHTML = "";
        newSquare.innerHTML = "";
        presentPiece(newSquare, piece);
        if(isCheck(board, white)){
            newSquare.innerHTML = "";
            if (newSquareChild) {
                newSquare.appendChild(newSquareChild);
            }
            presentPiece(oldSquare, piece);
            return false;
        }
        else {
            newSquare.innerHTML = "";
            if (newSquareChild) {
                newSquare.appendChild(newSquareChild);
            }
            presentPiece(oldSquare, piece);
            return true;
        }
    }
    return legalmoves === 0;
}