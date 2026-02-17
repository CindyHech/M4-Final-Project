// API: "http://www.omdbapi.com/?apikey=61ba8310&s=game"

const movieListEl = document.querySelector('.movies');

async function renderMovies() {
 const movies = await fetch ("http://www.omdbapi.com/?apikey=61ba8310&s=game");
 const moviesData = await movies.json();
 console.log(moviesData)
 movieListEl.innerHTML = moviesData.Search.map((movie) => moviesHTML(movie)).join("");
}

function searchChange(event) {
    console.log(event.target.value);
    renderMovies(event.target.value);
}


function moviesHTML(movie) {
    return `<div class="movie">
        <figure class="movie__img--wrapper">
        <img class="movie__img" src="${movie.Poster}" alt="">
        </figure>
        <h2 class="movie__title">${movie.Title}</h2>
        <h4 class="movie__year">${movie.Year}</h4>
        <button class="movie__button">Learn More</button>
    </div>`;
}

