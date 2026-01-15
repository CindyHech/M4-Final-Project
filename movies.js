
function searchChange(event) {
 console.log(event.target.value)
}

async function renderMovies() {
 const response = await fetch('http://www.omdbapi.com/?apikey=61ba8310&s=game')   
 const data = await response.json()
 console.log(data.Search)
}

renderMovies()