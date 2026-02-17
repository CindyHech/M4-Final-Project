// API: "http://www.omdbapi.com/?apikey=61ba8310&s=game"

const movieListEl = document.querySelector('.movies');

async function renderMovies(searchTerm = "game") {
 const movies = await fetch (`http://www.omdbapi.com/?apikey=61ba8310&s=${searchTerm}`);
 const moviesData = await movies.json();
 console.log(moviesData)

 if (!moviesData.Search) {
    movieListEl.innerHTML = `<p class="no__results">No movies found for "${searchTerm}"</p>`;
    return;
 }

 movieListEl.innerHTML = moviesData.Search.map((movie) => moviesHTML(movie)).join("");
}



function searchChange(event) {
    const value = event.target.value.trim();
  if (value.length > 2) {
    renderMovies(value);
  }  
}

function filterMovies(event) {
  if(filter === 'YEAR') {
     movies.sort((a, b) => (b.year)- (a.year) );
  }
  else if (filter === 'TYPE') {
     movies.sort((a, b) => (a.movie || b.series) - (a.series || b.movie));
  }
}


function moviesHTML(movie) {
    return `<div class="movie">
        <figure class="movie__img--wrapper">
        <img class="movie__img" src="${movie.Poster}" alt="${movie.Title}">
        </figure>
        <h2 class="movie__title">${movie.Title}</h2>
        <h4 class="movie__year">${movie.Year}</h4>
        <button class="movie__button">Learn More</button>
    </div>`;
}

renderMovies();