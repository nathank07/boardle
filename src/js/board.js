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


export default function createBoard(fen){
    const board = document.getElementById('board');
    const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const cfen = convertFEN(fen);
    let darkSquare = false;
    for(let r = 8; r > 0; r--){
        let row = document.createElement('div');
        row.classList.add('row');
        row.classList.add(`${r}`);
        for(let c = 0; c < 8; c++){
            let col = document.createElement('div');
            if(darkSquare) { col.classList.add('darkSquare') }
            darkSquare = !darkSquare;
            col.classList.add('square');
            col.classList.add(`${files[c]}`);
            presentPiece(col, cfen[r - 1][c]); 
            row.appendChild(col);
        }
        darkSquare = !darkSquare;
        board.appendChild(row);
    }
    //console.log(createArray());
    //console.log(convertFEN("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"))
}


function convertFEN(fen) {
    const sectionedFEN = fen.split(" ");
    console.log(sectionedFEN);
    const pieceRows = sectionedFEN[0].split("/");
    console.log(pieceRows);
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
    console.log(pieceRowsc);
    return pieceRowsc;
}

function presentPiece(square, piece){
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
                //console.log(closestDistance);
              }
            });
          
            // center the dragged element onto the closest target:
            if (closestTarget && closestDistance < closestTarget.getBoundingClientRect().width / 2) {
                console.log(closestDistance, closestTarget.getBoundingClientRect().width / 2);
                closestTarget.innerHTML = "";
                square.innerHTML = "";
                p.style.zIndex = "1";
                presentPiece(closestTarget, piece);
            }
            else{
                square.innerHTML = "";
                presentPiece(square, piece);
            }
          }
      }

}

