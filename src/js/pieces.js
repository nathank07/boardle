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
import { gamestate, flipBoard, whiteBoardSide } from './board'; 
import updateAnswer from './answerboxes.js';
//white | white short castle | white long castle | black short castle | black long castle
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
    if(piece !== "#" && piece !== "e" && piece !== "E") {  
        const pIcon = new Image();
        pIcon.src = pieces[piece];
        pIcon.classList.add(piece);
        dragPiece(pIcon);
        square.appendChild(pIcon);
    }
    if(piece === "e" || piece === "E"){
        const enPassantSquare = document.createElement('div');
        enPassantSquare.classList.add(`${piece}`);
        square.appendChild(enPassantSquare);
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
            const overwrittenTarget = closestTarget.firstChild;
            // center the dragged element onto the closest target:
            if (closestTarget && closestTarget !== square && closestDistance < closestTarget.getBoundingClientRect().width / 2 && checkLegal(piece, square, closestTarget, take, getBoardPos())) {
                closestTarget.innerHTML = "";
                square.innerHTML = "";
                p.style.zIndex = "1";
                presentPiece(closestTarget, piece);
                if(illegalPos(board)){
                    closestTarget.innerHTML = "";
                    if(overwrittenTarget !== null){
                        closestTarget.appendChild(overwrittenTarget);
                    }
                    presentPiece(square, piece);
                } else {
                    if(isCheck(board, !gamestate[0])){
                        updateAnswer(calculateNotation(piece, closestTarget, take, true, isCheckMate(board, !gamestate[0])));
                    } else {
                        updateAnswer(calculateNotation(piece, closestTarget, take, false, false));

                    }
                    gamestate[0] = !gamestate[0];
                }
                //console.log(piece, closestTarget);
            }
            else{
                square.innerHTML = "";
                //closestTarget = overwrittenTarget;
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
        if((newSquare.firstChild.classList[0] === "e" || newSquare.firstChild.classList[0] === "E") && piece.toLowerCase() !== "p"){
            return false;
        }
    }
    switch (piece.toLowerCase()) {
      case "p":
        const direction = (piece === "P") ? 1 : -1; 
        const startingSquare = (piece === "P") ? 2 : 7;
        if(take){
            if(newRank - oldRank === direction && (newFile === oldFile + 1 || newFile === oldFile - 1)){
                if((newSquare.firstChild.classList[0] === "e" || newSquare.firstChild.classList[0] === "E")) {
                    updateEnPassant([newRank - 1 - direction, newFile - 1], isUpperCase(piece), true)
                }
                updateEnPassant();
                return true;
            }
            return false;
        }
        if(oldFile === newFile && newRank - oldRank === direction){
            updateEnPassant()
            return true;
        }
        if(oldFile === newFile && oldRank === startingSquare && newRank - oldRank === (direction*2)){
            if(rboard[x+direction][y] === "#"){
                updateEnPassant([x+direction, y], isUpperCase(piece), false);
                return true;
            }
        }
        break;
      case "n":
        if ((Math.abs(newFile - oldFile) === 2 && Math.abs(newRank - oldRank) === 1) ||
            (Math.abs(newFile - oldFile) === 1 && Math.abs(newRank - oldRank) === 2)) {
                updateEnPassant();
                return true;
        }
        break;
      case "b":
        if(newFile > oldFile){
            if(newRank > oldRank){ //top right
                for(let i = oldRank + 1; i < newRank; i++){  
                    x += 1
                    y += 1
                    if(rboard[x][y] !== "#" && rboard[x][y] !== "e" && rboard[x][y] !== "E"){
                        return false;
                    }
                }
                if(newRank - 2 === x && newFile - 2 === y){
                    updateEnPassant();
                    return true;
                }
            }
            if(newRank < oldRank){ //bottom right
                for(let i = oldRank - 1; i > newRank; i--){  
                    x -= 1
                    y -= -1
                    if(rboard[x][y] !== "#" && rboard[x][y] !== "e" && rboard[x][y] !== "E"){
                        return false;
                    }
                }
                if(newRank === x && newFile - 2 === y){
                    updateEnPassant();
                    return true;
                }
            }
        }
        if(newFile < oldFile){
            if(newRank > oldRank){ //top left
                for(let i = oldRank + 1; i < newRank; i++){  
                    x -= -1;
                    y -= 1;
                    if(rboard[x][y] !== "#" && rboard[x][y] !== "e" && rboard[x][y] !== "E"){
                        return false;
                    }
                }
                if(newRank - 2 === x && newFile === y){
                    updateEnPassant();
                    return true;
                }
            }
            if(newRank < oldRank){ //bottom left
                for(let i = oldRank - 1; i > newRank; i--){  
                    x += -1;
                    y += -1;
                    if(rboard[x][y] !== "#" && rboard[x][y] !== "e" && rboard[x][y] !== "E"){
                        return false;
                    }
                }
                if(newRank === x && newFile === y){
                    updateEnPassant();
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
                    if(rboard[x][y] !== "#" && rboard[x][y] !== "e" && rboard[x][y] !== "E"){
                        return false;
                    }
                }
                updateGamestate();
                updateEnPassant();
                return true;
            } else { //left
                for(let i = oldFile - 1; i > newFile; i--){
                    y -= 1
                    if(rboard[x][y] !== "#" && rboard[x][y] !== "e" && rboard[x][y] !== "E"){
                        return false;
                    }
                }
                updateGamestate();
                updateEnPassant();
                return true;
            }
        }
        if(oldFile === newFile){
            if(oldRank < newRank){ //up
                for(let i = newRank - 1; i > oldRank; i--){
                    x += 1
                    if(rboard[x][y] !== "#" && rboard[x][y] !== "e" && rboard[x][y] !== "E"){
                        return false;
                    }
                }
                updateGamestate();
                updateEnPassant();
                return true;
            } else { //down
                for(let i = oldRank - 1; i > newRank; i--){
                    x -= 1
                    if(rboard[x][y] !== "#" && rboard[x][y] !== "e" && rboard[x][y] !== "E"){
                        return false;
                    }
                }
                updateGamestate();
                updateEnPassant();
                return true;
            }
        }
        function updateGamestate(){
            if(!exempt){
                if(oldRank === 1 && oldFile === 1){
                    gamestate[1] = false;
                }
                if(oldRank === 1 && oldFile === 8){
                    gamestate[2] = false;
                }
                if(oldRank === 8 && oldFile === 1){
                    gamestate[3] = false;
                }   
                if(oldRank === 8 && oldFile === 8){
                    gamestate[4] = false;
                }
            }
        }
        break;
      case "q":
        if(checkLegal(piece === "Q" ? "R" : "r", oldSquare, newSquare, take, board, true)){
            updateEnPassant();
            return true;
        }
        if(checkLegal(piece === "Q" ? "B" : "b", oldSquare, newSquare, take, board, true)){
            updateEnPassant();
            return true;
        }
        break;
      case "k":
        if ((Math.abs(newFile - oldFile) === 1 && Math.abs(newRank - oldRank) === 1) ||
            (Math.abs(newFile - oldFile) === 0 && Math.abs(newRank - oldRank) === 1) || 
            (Math.abs(newFile - oldFile) === 1 && Math.abs(newRank - oldRank) === 0) ) {
            if(isUpperCase(piece)){
                gamestate[1] = false;
                gamestate[2] = false;
            } else {
                gamestate[3] = false;
                gamestate[4] = false;
            }
            updateEnPassant();
            return true;
        }
        if((newRank === 1 || newRank === 8) && (newFile === 3 || newFile === 7)){
            if(isUpperCase(piece) && newRank === 1){
                if(newFile == 3){
                    if(gamestate[1]){
                        if(checkCastle(true, true)){
                            updateEnPassant();
                            return true;
                        }
                    }
                } else {
                    if(checkCastle(true, false)){
                        updateEnPassant();
                        return true;
                    }
                }
            }
            if(!isUpperCase(piece) && newRank === 8){
                if(newFile == 3){
                    if(gamestate[3]){
                        if(checkCastle(false, true)){
                            updateEnPassant();
                            return true;
                        }
                    }
                } else {
                    if(gamestate[4]){
                        if(checkCastle(false, false)){
                            updateEnPassant();
                            return true;
                        }
                    }
                }
            }
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

function checkCastle(white, long){
    const board = document.getElementById('board');
    let boardDivs = [];
    [...board.querySelectorAll('.row')].reverse().forEach(row => {
        let rows = []
        row.querySelectorAll('.square').forEach(square => {
            rows.push(square);
        });
        boardDivs.push(rows);
    });
    if(white){
        if(isCheck(board, white)){
            return false;
        }
        if(long && gamestate[1] && boardDivs[0][1].innerHTML === "" && boardDivs[0][2].innerHTML === ""
         && boardDivs[0][3].innerHTML === "" && boardDivs[0][0].firstChild.classList[0] === "R"){ //white long castle
            if(checkValid(boardDivs[0][4], boardDivs[0][3])){
                if(checkValid(boardDivs[0][4], boardDivs[0][2])){
                    boardDivs[0][0].innerHTML = "";
                    presentPiece(boardDivs[0][3], "R");
                    return true;
                }
            }
        } else if(!long && gamestate[2] && boardDivs[0][5].innerHTML === "" && boardDivs[0][6].innerHTML === ""
        && boardDivs[0][7].firstChild.classList[0] === "R"){ //white short castle
            if(checkValid(boardDivs[0][4], boardDivs[0][5])){
                if(checkValid(boardDivs[0][4], boardDivs[0][6])){
                    boardDivs[0][7].innerHTML = "";
                    presentPiece(boardDivs[0][5], "R");
                    return true;
                }
            }
        }
    } else {
        if(isCheck(board, white)) {
            return false;
        }
        if(long && gamestate[3] && boardDivs[7][1].innerHTML === "" && boardDivs[7][2].innerHTML === ""
        && boardDivs[7][0].firstChild.classList[0] === "r"){ //black long castle
            if(checkValid(boardDivs[7][4], boardDivs[7][3])){
                if(checkValid(boardDivs[7][4], boardDivs[7][2])){
                    boardDivs[7][0].innerHTML = "";
                    presentPiece(boardDivs[7][3], "r");
                    return true;
                }
            }
        } else if(!long && gamestate[4] && boardDivs[7][5].innerHTML === "" && boardDivs[7][6].innerHTML === "" &&
        boardDivs[7][7].firstChild.classList[0] === "r"){ //black short castle
            if(checkValid(boardDivs[7][4], boardDivs[7][5])){
                if(checkValid(boardDivs[7][4], boardDivs[7][6])){
                    boardDivs[7][7].innerHTML = "";
                    presentPiece(boardDivs[7][5], "r");
                    return true;
                }
            }
        }
    }

    function checkValid(oldKingSquare, newKingSquare){
        oldKingSquare.innerHTML = "";
        presentPiece(newKingSquare, white ? "K" : "k");
        let valid = !isCheck(board, white);
        newKingSquare.innerHTML = "";
        presentPiece(oldKingSquare, white ? "K" : "k");
        return valid;
    }
    return false;
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
            if(rboardArr[i][j] !== "#" && rboardArr[i][j] !== "e" && rboardArr[i][j] !== "E" && (isUpperCase(rboardArr[i][j]) === white)){
                switch(rboardArr[i][j].toLowerCase()){
                    case "p":
                        const pdirections = [[1, 0],[2, 0],[-1, 0], [-2, 0], [1, 1],  [1, -1], [-1, -1],[-1, 1]];
                        for (const [dx, dy] of pdirections) {
                        const x = i + dx;
                        const y = j + dy;
                        if (x >= 0 && x < 8 && y >= 0 && y < 8) {
                            const take = rboardArr[x][y] !== "#" && rboardArr[x][y] !== "e" && rboardArr[x][y] !== "E";
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
                                const take = rboardArr[x][y] !== "#" && rboardArr[x][y] !== "e" && rboardArr[x][y] !== "E";
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
                                const take = rboardArr[x][y] !== "#" && rboardArr[x][y] !== "e" && rboardArr[x][y] !== "E";
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
                                const take = rboardArr[x][y] !== "#" && rboardArr[x][y] !== "e" && rboardArr[x][y] !== "E";
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
                                const take = rboardArr[x][y] !== "#" && rboardArr[x][y] !== "e" && rboardArr[x][y] !== "E";
                                console.log(take);
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
                                const take = rboardArr[x][y] !== "#" && rboardArr[x][y] !== "e" && rboardArr[x][y] !== "E";
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

function updateEnPassant(square, white, remove){
    const board = document.getElementById('board');
    let boardDivs = [];
    [...board.querySelectorAll('.row')].reverse().forEach(row => {
        let rows = []
        row.querySelectorAll('.square').forEach(square => {
            if(square.innerHTML !== "" && (square.firstChild.classList[0] === "e" || square.firstChild.classList[0] === "E")){
                square.innerHTML = "";
            }
            rows.push(square);
        });
        boardDivs.push(rows);
    });
    if(square === undefined){
        return;
    }
    if(remove === true){
        boardDivs[square[0]][square[1]].innerHTML = "";
    }
    if(square !== null && remove !== true){
        //console.log(boardDivs[square[0]][square[1]])
        presentPiece(boardDivs[square[0]][square[1]], white ? "E" : "e");
    }
}