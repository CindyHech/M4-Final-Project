const rerouteBtn = document.querySelector(".reroute-btn")


function openMenu() {
 document.body.classList += " menu--open"
}

function closeMenu() {
 document.body.classList.remove('menu--open')
}

function rerouteToMovies() {
 window.location.href = `${window.location.origin}/M4-Final-Project/movies.html`
}
