import createBoard from './board.js';
import { clearAnswers } from './answerboxes.js';
export let puzzleDetails;

export default async function getRandomPuzzle(){
    try {
        const rating = weightedRandom()
        const response = await fetch(`http://nathank7256.pythonanywhere.com/searchbyrating/${rating}`);
        const data = await response.json();
        document.querySelector('.id').innerHTML = "ID: #" + data.id;
        document.querySelector('.elo').innerHTML = "Lichess Elo: " + data.rating + "±" + data.ratingDeviation;
        clearAnswers();
        puzzleDetails = [data.id, data.rating, data.ratingDeviation, data.games];
        return createBoard(data.fen, data.moves)
    } catch (error) {
        console.error(error);
    }
}

export async function getID(id){
    try {
        const response = await fetch(`http://nathank7256.pythonanywhere.com/searchpuzzle/${id}`);
        const data = await response.json();
        document.querySelector('.id').innerHTML = "ID: #" + data.id;
        document.querySelector('.elo').innerHTML = "Lichess Elo: " + data.rating + "±" + data.ratingDeviation;
        clearAnswers();
        puzzleDetails = [data.id, data.rating, data.ratingDeviation, data.games];
        return createBoard(data.fen, data.moves);
    } catch (error) {
        console.error(error);
    }
}

export async function getPuzzleByRating(rating){
    try {
        const response = await fetch(`http://nathank7256.pythonanywhere.com/searchbyrating/${rating}`);
        const data = await response.json();
        document.querySelector('.id').innerHTML = "ID: #" + data.id;
        document.querySelector('.elo').innerHTML = "Lichess Elo: " + data.rating + "±" + data.ratingDeviation;
        clearAnswers();
        puzzleDetails = [data.id, data.rating, data.ratingDeviation, data.games];
        return createBoard(data.fen, data.moves);
    } catch (error) {
        console.error(error);
    }
}

  function weightedRandom() { //hard coded randomization loosely based on lines in filtered_puzzles db
    const weightedRatings = [
        { rating: 300, percentage: 0.25 },
        { rating: 400, percentage: 0.25 },
        { rating: 500, percentage: 0.25 },
        { rating: 600, percentage: 0.25 },
        { rating: 700, percentage: 1 },
        { rating: 800, percentage: 1 },
        { rating: 900, percentage: 2 },
        { rating: 1000, percentage: 3 },
        { rating: 1100, percentage: 4 },
        { rating: 1200, percentage: 4 },
        { rating: 1300, percentage: 5 },
        { rating: 1400, percentage: 6 },
        { rating: 1500, percentage: 7 },
        { rating: 1600, percentage: 8 },
        { rating: 1700, percentage: 8 },
        { rating: 1800, percentage: 7 },
        { rating: 1900, percentage: 8 },
        { rating: 2000, percentage: 7 },
        { rating: 2100, percentage: 7 },
        { rating: 2200, percentage: 6 },
        { rating: 2300, percentage: 5 },
        { rating: 2400, percentage: 3 },
        { rating: 2500, percentage: 2 },
        { rating: 2600, percentage: 2 },
        { rating: 2700, percentage: 1.5 },
        { rating: 2800, percentage: 0.5 },
        { rating: 2900, percentage: 0.5 },
        { rating: 3000, percentage: 0.5 },
      ];
      
    const totalWeight = weightedRatings.reduce((acc, curr) => acc + curr.percentage, 0);
    let randomNum = Math.random() * totalWeight;

    for (let i = 0; i < weightedRatings.length; i++) {
    const { rating, percentage } = weightedRatings[i];
    if (randomNum < percentage) {
        return rating;
    }
    randomNum -= percentage;
  }
}