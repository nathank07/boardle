import createBoard from './board.js';

export default async function getRandomPuzzle(){
    try {
        const response = await fetch('http://127.0.0.1:5000/randompuzzle');
        const data = await response.json();
        console.log(data.fen, data.moves)
        return createBoard(data.fen, data.moves)
    } catch (error) {
        console.error(error);
    }
}