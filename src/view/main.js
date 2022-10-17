const tampilFilm = require('../utils/tampilFilm.js');
import jumbotronComponent from '../component/jumbotron.js';

    const tombolFilm = document.getElementById('tombolFilm');
    const listFilm = document.getElementById('list-film');
    const inputFilm = document.getElementById('inputFilm');

    const run = () => {

    tombolFilm.addEventListener('click', () => {
    fetch('http://www.omdbapi.com/?apikey=b7f319e4&s=' + inputFilm.value)
        .then(response => response.json())
        .then(response => {
            const film = response.Search;
            let card = '';
            film.forEach(films => card += tampilFilm(films));
            listFilm.innerHTML = card;
        });
         
    });
    
};

    export default run;