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
import move from '../assets/sounds/Move.ogg'
import capture from '../assets/sounds/Capture.ogg'
import { gamestate, highlights, pastBoardPos, updateBoardHistory } from './board'; 

//white | white short castle | white long castle | black short castle | black long castle
const isUpperCase = (string) => /^[A-Z]*$/.test(string);

let selectedSquare;

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
        pIcon.setAttribute('draggable', false);
        dragPiece(pIcon, square);
        square.appendChild(pIcon);
    }
    if(piece === "e" || piece === "E"){
        const enPassantSquare = document.createElement('div');
        enPassantSquare.classList.add(`${piece}`);
        square.appendChild(enPassantSquare);
    }
}

function dragPiece(p, square) { // Modified function from https://www.w3schools.com/howto/howto_js_draggable.asp
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    p.onmousedown = dragMouseDown;
    function dragMouseDown(e) {
        if(event.button === 0){
            if(gamestate[0] === isUpperCase(p.classList[0])){
                p.style.pointerEvents = 'auto';
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
            } else {
                if(selectedSquare !== undefined){
                    movePiece(selectedSquare, square, "", true, true);
                }
                selectSquare();
            }
            selectSquare(square);
        }
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
        p.style.zIndex = "3";
    }
    
    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
        square.style.zIndex = 'auto';
        p.style.zIndex = "2";
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
        if(closestDistance < closestTarget.getBoundingClientRect().width / 2){
            movePiece(square, closestTarget, "", true, true);
        } else {
            removePiece(square);
            presentPiece(square, p.classList[0]);
        }
      }
}

export function movePiece(oldSquare, newSquare, promotion, annotate, sound){
    const board = document.getElementById('board');
    const oldBoard = [board.cloneNode(true), getBoardPos()];
    const piece = oldSquare.firstElementChild.classList[0];
    const take = newSquare.firstElementChild === null ? false : true
    const overwrittenTarget = newSquare.firstElementChild;
    const pieceSound = take ? new Audio(capture) : new Audio(move)
    if(newSquare !== oldSquare && checkLegal(piece, oldSquare, newSquare, take, getBoardPos())) {
        if(pastBoardPos[5][0] === ""){
            removePiece(newSquare);
            removePiece(oldSquare);
            if(checkPromotionSquare(newSquare, piece)){
                if(promotion !== ""){
                    presentPiece(newSquare, gamestate[0] ? promotion.toUpperCase() : promotion);
                    update();
                } else {
                    (async () => {
                        const newPiece = await promotionPrompt(newSquare, gamestate[0]);
                        presentPiece(newSquare, newPiece);
                        update();
                    })();
                }
            } else {
                presentPiece(newSquare, piece);
                update();
            }
            function update(){
                if(illegalPos(board)){
                    removePiece(newSquare);
                    if(overwrittenTarget !== null){
                        newSquare.appendChild(overwrittenTarget);
                    }
                    presentPiece(oldSquare, piece);
                } else {
                    gamestate[0] = !gamestate[0];
                    if(annotate){
                        updateBoardHistory(pastBoardPos, false, calculateNotation(piece, oldSquare, newSquare, take, isCheck(board, gamestate[0]), isCheck(board, gamestate[0]) ? isCheckMate(board, gamestate[0]) : false, oldBoard));
                        highlightMove(notateSquare(oldSquare), notateSquare(newSquare));
                        highlights.push(() => highlightMove(notateSquare(oldSquare), notateSquare(newSquare)));
                        if(sound){
                            pieceSound.play();
                        }
                        selectSquare();
                    }
                }
                highlightKing(gamestate[0]);
            }
        } else {
            removePiece(oldSquare);
            presentPiece(oldSquare, piece);
        }
    }
    else {
        removePiece(oldSquare);
        presentPiece(oldSquare, piece);
    }
    document.querySelectorAll('.selected').forEach(square => {
        square.classList.remove('selected');
    });
    highlightKing(gamestate[0]);
}

function illegalPos(board){
    return isCheck(board, gamestate[0]);
}

function calculateNotation(piece, oldSquare, newSquare, take, check, checkmate, oldBoard){
    let nL = notateSquare(newSquare);
    let promotion = ""
    switch(piece.toLowerCase()){
        case "p":
            if(nL[1] === "1" || nL[1] === "8"){
                promotion = `=${newSquare.firstElementChild.classList[0]}`
            }
            if(take){
                piece = notateSquare(oldSquare).split('')[0];
            } else {
                piece = "";
            }
            break;
        case "k":
            const kL = notateSquare(oldSquare);
            if(kL === "e1"){
                if(nL === "c1"){
                    piece = "O-O-O";
                    nL = "";
                }
                if(nL === "g1"){
                    piece = "O-O";
                    nL = "";
                }
            }
            if(kL === "e8"){
                if(nL === "c8"){
                    piece = "O-O-O";
                    nL = "";
                }
                if(nL === "g8"){
                    piece = "O-O";
                    nL = "";
                }
            }
            break;
        default:
            let notateFileRank = checkOtherPieces(piece, oldBoard, newSquare, take);
            let newPiece = `${piece}`;
            if(notateFileRank[0] && !notateFileRank[1]){ //if file needs to be notated
                newPiece = piece += notateSquare(oldSquare).split("")[0]; 
            }
            if(notateFileRank[1] && !notateFileRank[0]){//if rank needs to be notated
                newPiece = piece += notateSquare(oldSquare).split("")[1];
            }
            if(notateFileRank[0] && notateFileRank[1]){//if both need to be notated
                newPiece = piece += notateSquare(oldSquare);
            }
            piece = newPiece;
            break;

    }
    return `${piece}${take ? "x" : ""}${nL}${promotion}${checkmate ? "#" : check ? "+" : ""}`
}

function checkOtherPieces(piece, board, targetedSquare, take){ //checks if other pieces can take and what needs to be 
    let squares = board[0].querySelectorAll('.square');        //notated if so (returns fileboolean and rankboolean)
    let pieces = [];
    squares.forEach(square => {
        if(square.firstElementChild !== null && square.firstElementChild.classList.contains(piece)){
            pieces.push(square);
        }
    });
    let samePieces = [];
    pieces.forEach(div => {
        if(checkLegal(piece, div, targetedSquare, take, board[1], true)){
            samePieces.push(div);
        }
    });
    let files = new Set();
    let ranks = new Set();
    samePieces.forEach(piece => {
        let definedFiles = ["a", "b", "c", "d", "e", "f", "g", "h"];
        let definedRanks = ["_1", "_2", "_3", "_4", "_5", "_6", "_7", "_8"]
        definedFiles.forEach(file => {
            if(piece.classList.contains(file)){
                files.add(file);
            }
        });
        definedRanks.forEach(rank => {
            if(piece.parentElement.classList.contains(rank)){
                ranks.add(rank)
            }
        });
    });
    return [files.size > 1, ranks.size > 1];
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

export function notationToSquare(notation){
    const sectionedNotation = notation.split("");
    const rows = {"1" : "_1", "2" : "_2", "3" : "_3", "4" : "_4", "5" : "_5", "6" : "_6", "7" : "_7", "8" : "_8"};
    return document.querySelector(`.${rows[sectionedNotation[1]]} .square.${sectionedNotation[0]}`);
}

export function getBoardPos(){
    let arr = []
    const board = document.getElementById('board');
    board.querySelectorAll('.row').forEach(row => {
        let squares = []
        row.querySelectorAll('.square').forEach(square => {
            if(square.firstElementChild === null){
                squares.push("#");
            } else{
                squares.push(square.firstElementChild.classList[0]);
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
        if((newSquare.firstElementChild.classList[0] === "e" || newSquare.firstElementChild.classList[0] === "E") && piece.toLowerCase() !== "p"){
            return false;
        }
    }
    switch (piece.toLowerCase()) {
      case "p":
        const direction = (piece === "P") ? 1 : -1; 
        const startingSquare = (piece === "P") ? 2 : 7;
        if(take){
            if(newRank - oldRank === direction && (newFile === oldFile + 1 || newFile === oldFile - 1)){
                if((newSquare.firstElementChild.classList[0] === "e" || newSquare.firstElementChild.classList[0] === "E")) {
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
                    if(gamestate[2]){
                        if(checkCastle(true, true)){
                            updateEnPassant();
                            return true;
                        }
                    }
                } else {
                    if(gamestate[1]){
                        if(checkCastle(true, false)){
                            updateEnPassant();
                            return true;
                        }
                    }
                }
            }
            if(!isUpperCase(piece) && newRank === 8){
                if(newFile == 3){
                    if(gamestate[4]){
                        if(checkCastle(false, true)){
                            updateEnPassant();
                            return true;
                        }
                    }
                } else {
                    if(gamestate[3]){
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
    const kingSquare = board.querySelector(`._${kL[0]}`).querySelector(`.square.${files[kL[1]]}`);
    let check = false;
    board.querySelectorAll('.row').forEach(row => {
        row.querySelectorAll('.square').forEach(square => {
            if(square.firstElementChild !== null && (isUpperCase(square.firstElementChild.classList[0]) !== white)){
                if(checkLegal(square.firstElementChild.classList[0], square, kingSquare, true, boardArr, true)){
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
    if(isCheck(board, white)){
        return false;
    }
    if(white){ 
        if(long && gamestate[2] && checkCastlePath([boardDivs[0][1], boardDivs[0][2], boardDivs[0][3]], boardDivs[0][0])){ //white long castle
            if(checkValid(boardDivs[0][4], boardDivs[0][3])){
                if(checkValid(boardDivs[0][4], boardDivs[0][2])){
                    removePiece(boardDivs[0][0]);
                    presentPiece(boardDivs[0][3], "R");
                    return true;
                }
            }
        } else if(!long && gamestate[1] && checkCastlePath([boardDivs[0][5], boardDivs[0][6]], boardDivs[0][7])){ //white short castle
            if(checkValid(boardDivs[0][4], boardDivs[0][5])){
                if(checkValid(boardDivs[0][4], boardDivs[0][6])){
                    removePiece(boardDivs[0][7]);
                    presentPiece(boardDivs[0][5], "R");
                    return true;
                }
            }
        }
    } else {
        if(long && gamestate[4] && checkCastlePath([boardDivs[7][1], boardDivs[7][2], boardDivs[7][3]], boardDivs[7][0])){ //black long castle
            if(checkValid(boardDivs[7][4], boardDivs[7][3])){
                if(checkValid(boardDivs[7][4], boardDivs[7][2])){
                    removePiece(boardDivs[7][0]);
                    presentPiece(boardDivs[7][3], "r");
                    return true;
                }
            }
        } else if(!long && gamestate[3] && checkCastlePath([boardDivs[7][5], boardDivs[7][6]], boardDivs[7][7])){ //black short castle
            if(checkValid(boardDivs[7][4], boardDivs[7][5])){
                if(checkValid(boardDivs[7][4], boardDivs[7][6])){
                    removePiece(boardDivs[7][7]);
                    presentPiece(boardDivs[7][5], "r");
                    return true;
                }
            }
        }
    }
    function checkCastlePath(emptySquares, rookSquare){
        let empty = true;
        let rook = false;
        emptySquares.forEach(square => {
            if(square.hasChildNodes()){
                empty = false;
            }
        });
        if(rookSquare.hasChildNodes()){
            if(rookSquare.firstElementChild.classList[0] === white ? "R" : "r"){
                rook = true;
            }
        }
        return empty && rook;
    }
    function checkValid(oldKingSquare, newKingSquare){
        removePiece(oldKingSquare);
        presentPiece(newKingSquare, white ? "K" : "k");
        let valid = !isCheck(board, white);
        removePiece(newKingSquare);
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
                        testPiece(pdirections);
                        break;
                    case "n":
                        const ndirections = [[2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1]];
                        testPiece(ndirections);
                        break;
                    case "b":
                        const bdirections = [[1, 1], [1, -1], [-1, -1], [-1, 1]];
                        testBlockedPieces(bdirections);
                        break;
                    case "r":
                        const rdirections = [[0, 1], [1, 0], [0, -1], [-1, 0]];
                        testBlockedPieces(rdirections);
                        break;
                    case "q":
                        const qdirections = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];
                        testBlockedPieces(qdirections);
                        break;
                    case "k":
                        const kdirections = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];
                        testPiece(kdirections);
                        break;
                }
            }
            function testPiece(directions){
                for (const [dx, dy] of directions) {
                    let x = i + dx;
                    let y = j + dy;
                    if (x >= 0 && x < 8 && y >= 0 && y < 8) {
                        const take = rboardArr[x][y] !== "#" && rboardArr[x][y] !== "e" && rboardArr[x][y] !== "E";
                        if(checkLegal(rboardArr[i][j], boardDivs[i][j], boardDivs[x][y], take, boardArr, true)) {
                            if(testMoves(rboardArr[i][j], boardDivs[i][j], boardDivs[x][y])){
                                legalmoves += 1;
                            }
                        }
                    }
                }
            }
            function testBlockedPieces(directions){
                for (const [dx, dy] of directions) {
                    let x = i + dx;
                    let y = j + dy;
                    while (x >= 0 && x < 8 && y >= 0 && y < 8) {
                        const take = rboardArr[x][y] !== "#" && rboardArr[x][y] !== "e" && rboardArr[x][y] !== "E";
                        if (checkLegal(rboardArr[i][j], boardDivs[i][j], boardDivs[x][y], take, boardArr, true)) {
                            if(testMoves(rboardArr[i][j], boardDivs[i][j], boardDivs[x][y])){
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
            }
        }
    }

    function testMoves(piece, oldSquare, newSquare){
        const newSquareChild = newSquare.firstElementChild;
        removePiece(oldSquare);
        removePiece(newSquare);
        presentPiece(newSquare, piece);
        if(isCheck(board, white)){
            removePiece(newSquare);
            if (newSquareChild) {
                newSquare.appendChild(newSquareChild);
            }
            presentPiece(oldSquare, piece);
            return false;
        }
        else {
            removePiece(newSquare);
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
            if(square.hasChildNodes() && (square.firstElementChild.classList[0] === "e" || square.firstElementChild.classList[0] === "E")){
                removePiece(square);
            }
            rows.push(square);
        });
        boardDivs.push(rows);
    });
    if(square === undefined){
        return;
    }
    if(remove === true){
        removePiece(boardDivs[square[0]][square[1]])
    }
    if(square !== null && remove !== true){
        presentPiece(boardDivs[square[0]][square[1]], white ? "E" : "e");
    }
}

function checkPromotionSquare(square, piece){
    if((piece === "p" && square.parentElement.classList.contains("_1")) ||
       (piece === "P" && square.parentElement.classList.contains("_8"))){
        return true;
    }
    return false;
}

function promotionPrompt(square, white) {
    return new Promise(resolve => {
        const prompt = document.createElement('div');
        prompt.classList.add('prompt');
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        document.getElementById('board').appendChild(overlay);
        const queen = document.createElement('button');
        const queenImg = new Image();
        queenImg.src = white ? wq : bq;
        queen.appendChild(queenImg);
        queen.addEventListener('click', () => {
            prompt.remove();
            overlay.remove();
            resolve(white ? 'Q' : 'q');
        });
        const rook = document.createElement('button');
        const rookImg = new Image();
        rookImg.src = white ? wr : br;
        rook.appendChild(rookImg);
        rook.addEventListener('click', () => {
            prompt.remove();
            overlay.remove();
            resolve(white ? 'R' : 'r');
        });
        const bishop = document.createElement('button');
        const bishopImg = new Image();
        bishopImg.src = white ? wb : bb;
        bishop.appendChild(bishopImg);
        bishop.addEventListener('click', () => {
            prompt.remove();
            overlay.remove();
            resolve(white ? 'B' : 'b');
        });
        const knight = document.createElement('button');
        const knightImg = new Image();
        knightImg.src = white ? wn : bn;
        knight.appendChild(knightImg);
        knight.addEventListener('click', () => {
            prompt.remove();
            overlay.remove();
            resolve(white ? 'N' : 'n');
        });
        prompt.appendChild(queen);
        prompt.appendChild(rook);
        prompt.appendChild(bishop);
        prompt.appendChild(knight);
        square.appendChild(prompt);
    });
  }
  
function removePiece(square){
    while (square.lastChild) {
        square.removeChild(square.lastChild);
    }
}

export function highlightKing(white){
    if(document.querySelector('.inCheck')){
        document.querySelector('.inCheck').classList.remove('inCheck');
    }
    if(isCheck(document.querySelector('#board'), white)){
        document.querySelector(`img.${white ? "K" : "k"}`).parentElement.classList.add('inCheck');
    }
}

export function highlightMove(oldSquare, newSquare){
    document.querySelectorAll('.highlighted').forEach(square => {
        square.classList.remove('highlighted');
    });
    notationToSquare(oldSquare).classList.add('highlighted');
    notationToSquare(newSquare).classList.add('highlighted');
}

export function selectSquare(square){
    if(selectedSquare === undefined){
        selectedSquare = "";
    }
    let validSquare = true;
    if(square === undefined || selectedSquare === square ||  !square.hasChildNodes() || 
    isUpperCase(square.firstElementChild.classList[0]) !== gamestate[0]){
        validSquare = false;
    }
    document.querySelector('#board').querySelectorAll('.square').forEach(div => {
        div.classList.remove('playerHighlighted');
        selectedSquare = undefined;
    });
    if(validSquare){
        square.classList.add('playerHighlighted');
        selectedSquare = square;
    }
}

export function makeSquaresClickable(){
    document.querySelector('#board').querySelectorAll('.square').forEach(square => {
        square.addEventListener('click', () => {
            if(event.button === 0){
                if(selectedSquare !== undefined){
                    movePiece(selectedSquare, square, "", true, true);
                }
                selectSquare();
            }
        })
    });
}