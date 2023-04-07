import createBoard from './board.js';
import { clearAnswers } from './answerboxes.js';

export default async function getRandomPuzzle(){
    try {
        const response = await fetch('http://127.0.0.1:5000/randompuzzle');
        const data = await response.json();
        document.querySelector('.id').innerHTML = "ID: #" + data.id;
        document.querySelector('.elo').innerHTML = "Lichess Elo: " + data.rating + "±" + data.ratingDeviation;
        console.log(data.moves)
        clearAnswers();
        return createBoard(data.fen, data.moves)
    } catch (error) {
        console.error(error);
    }
}

export async function getID(id){
    try {
        const response = await fetch(`http://127.0.0.1:5000/searchpuzzle/${id}`);
        const data = await response.json();
        document.querySelector('.id').innerHTML = "ID: #" + data.id;
        document.querySelector('.elo').innerHTML = "Lichess Elo: " + data.rating + "±" + data.ratingDeviation;
        console.log(data.moves)
        clearAnswers();
        return createBoard(data.fen, data.moves);
    } catch (error) {
        console.error(error);
    }
}

export async function getPuzzleByRating(rating){
    console.log(rating)
    try {
        const response = await fetch(`http://127.0.0.1:5000/searchbyrating/${rating}`);
        const data = await response.json();
        document.querySelector('.id').innerHTML = "ID: #" + data.id;
        document.querySelector('.elo').innerHTML = "Lichess Elo: " + data.rating + "±" + data.ratingDeviation;
        console.log(data.moves);
        console.log(data);
        clearAnswers();
        return createBoard(data.fen, data.moves);
    } catch (error) {
        console.error(error);
    }
}