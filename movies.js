// API: "http://www.omdbapi.com/?apikey=61ba8310&s=game"

const movieListEl = document.querySelector('.movies');

async function renderMovies() {
 const movies = await fetch ("http://www.omdbapi.com/?apikey=61ba8310&s=game");
 const moviesData = await movies.json();
 movieListEl.innerHTML = moviesData.map((movie) => moviesHTML(movie)).join("");
}




function moviesHTML(movie) {
    return `<div class="movie">
        <figure class="movie__img--wrapper">
        <img class="movie__img" src="https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_SX300.jpg" alt="">
        </figure>
        <h2 class="movie__title">Game of Thrones</h2>
        <h4 class="movie__year">2011–2019</h4>
        <button class="movie__button">Learn More</button>
    </div>`;
}

renderMovies();