import './styles.css';
import createBoard from './js/board.js';
import icon from './assets/icon.svg'
import noUiSlider from 'nouislider'
import 'nouislider/dist/nouislider.css';
import getPuzzleByRating, { chooseNumber, getID } from './js/fetch.js';

document.querySelector('.header img').src = icon;

const slider = document.getElementById('slider');
let format = {
    from: function (formattedValue) {
        return Number(formattedValue);
    },
    to: function(numericValue) {
        return Math.round(numericValue);
    }
};
 
noUiSlider.create(slider, {
    start: [1000, 2600],
    step: 100,
    range: {
        'min': 400,
        'max': 3100
    },
    pips: {
        mode: 'values',
        values: [400, 3100],
        density: 10000,
        stepped:true
    },
    tooltips: true,
    format: format,

})


if(window.location.search){
    getID(window.location.search.split('=')[1])
} else {
    getPuzzleByRating(chooseNumber(slider.noUiSlider.get()));
}


