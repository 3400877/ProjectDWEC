// Popups
// - Login form -
const addLoginForm = document.getElementById("login-form-button");
const loginForm = document.getElementById("div-login-form");
addLoginForm.addEventListener('click', (e) => makeVisible(loginForm));
// - Movie form -
const addMovieForm = document.getElementById("add-movie");
const movieForm = document.getElementById("movie-form");
addMovieForm.addEventListener('click', (e) => makeVisible(movieForm));
// - Movie watched form
const addMovieWatchedForm = document.getElementById("watch-movie-button");
const movieWatchedForm = document.getElementById("watch-movie-form");
addMovieWatchedForm.addEventListener('click', (e) => makeVisible(movieWatchedForm));
// - Remove movie form -
const addRemoveMovieForm = document.getElementById("remove-movie-button");
const removeMovieForm = document.getElementById("remove-movie-form");
addRemoveMovieForm.addEventListener('click', (e) => makeVisible(removeMovieForm));
// - Hamburger menu -
const hamburgerMenuButton = document.getElementById("hamb-menu-button");
const hamburgerMenuContent = document.getElementById("hamb-menu");
hamburgerMenuButton.addEventListener('click', (e) => makeVisible(hamburgerMenuContent));
// - List of forms and menus -
const menusList = [loginForm, movieForm, movieWatchedForm, removeMovieForm, hamburgerMenuContent];

export { addLoginForm, loginForm, addMovieForm, movieForm, addMovieWatchedForm, movieWatchedForm, removeMovieForm, hamburgerMenuButton, hamburgerMenuContent, menusList };