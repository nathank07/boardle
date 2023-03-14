import * as p from './pieces.js'

export default function createBoard(fen){
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



