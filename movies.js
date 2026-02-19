// API: "https://www.omdbapi.com/?apikey=61ba8310&s=game"

const movieListEl = document.querySelector(".movies");

let movies = []; 

async function renderMovies(searchTerm = "game") {
  const moviesRes = await fetch(
    `https://www.omdbapi.com/?apikey=61ba8310&s=${searchTerm}`,
  );
  const moviesData = await moviesRes.json();
  console.log(moviesData);

  if (!moviesData.Search) {
    movieListEl.innerHTML = `<p class="no__results">No movies found for "${searchTerm}"</p>`;
    return;
  }

  movies = moviesData.Search; 
  movieListEl.innerHTML = movies.map((movie) => moviesHTML(movie)).join(""); 
}

function searchChange(event) {
  const value = event.target.value.trim();
  if (value.length > 2) {
    renderMovies(value);
  }
}

function filterMovies(event) {
  const filter = event.target.value; 

  if (filter === "YEAR") {
    movies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
  } else if (filter === "TYPE") {
    const order = { movie: 1, series: 2, game: 3 };
    movies.sort((a, b) => order[a.Type] - order[b.Type]); 
  }

  movieListEl.innerHTML = movies.map((movie) => moviesHTML(movie)).join("");
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