
export default function createBoard(){
    const board = document.getElementById('board');
    const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
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
            row.appendChild(col);
        }
        darkSquare = !darkSquare;
        board.appendChild(row);
    }
}


