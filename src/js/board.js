
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
            col.innerHTML = cfen[r - 1][c]
            row.appendChild(col);
        }
        darkSquare = !darkSquare;
        board.appendChild(row);
    }
    //console.log(createArray());
    //console.log(convertFEN("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"))
}

function createArray(){
    let arr = []
    const board = document.getElementById('board');
    board.querySelectorAll('.row').forEach(row => {
        let squares = []
        row.querySelectorAll('.square').forEach(square => {
            squares.push(square.innerHTML);
        });
        arr.push(squares);
    });
    return arr;
}

function convertFEN(fen) {
    const sectionedFEN = fen.split(" ");
    console.log(sectionedFEN);
    const pieceRows = sectionedFEN[0].split("/");
    console.log(pieceRows);
    let pieceRowsc = [] // converted piece rows
    pieceRows.forEach(row => {
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

class Piece {
    constructor(whiteBool){
        this.whiteBool = whiteBool
    }
    move(){

    }
}


