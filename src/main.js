// import { test } from  './dice-game.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#runRecipe').click(function() {
    const recipe = $('#recipe').val();
    $('#recipe').val("");

    let request = new XMLHttpRequest();
    const url = `https://api.spoonacular.com/recipes/search?query=${recipe}&apiKey=${process.env.API_KEY}`;

    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

   const getElements = function(response) {

      $('.otherDetail').text(`The id for the country is ${response.results[4].title}`);
      // $('.otherDetail2').text(`The longitude is ${response.coord.lon} .`);
    }
  });
});
