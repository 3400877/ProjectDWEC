const yesterday = document.getElementById("yesterday");
const tomorrow = document.getElementById("tomorrow");
const actualDay = document.getElementById("actual-day");


// Navigation bar stuff
const navPopup = document.getElementById("nav-popup");

// Popups
// - Login form -
const addLoginForm = document.getElementById("login-form-button");
const loginForm = document.getElementById("div-login-form");
addLoginForm.addEventListener('click', (e) => makeVisible(loginForm));
// - Signup form -
const addSignupForm = document.getElementById("signup-form-button");
addSignupForm.addEventListener('mouseover', (e) => addSignupForm.classList.add("hovered"));
addSignupForm.addEventListener('mouseout', (e) => addSignupForm.classList.remove("hovered"));
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

document.addEventListener("keydown", (e) => {
	if (e.key == 'Escape') {
		menusList.forEach(menu => makeVisible(menu, -1));
	}
});

// // Add event listener to popups
// [...popups].forEach((popup) => {
// 	popup.addEventListener('click', (e) => makeVisible(e.target.firstChild))
// })

const makeVisible = (element, bool = 0) => {
	switch (bool) {
		case -1:
			element.classList.add("hidden");
			break;
		case 0:
			if (!element.classList.contains("hidden")) {
				element.classList.add("hidden");
			} else {
				element.classList.remove("hidden");
			}
			break;
		case 1:
			element.classList.remove("hidden");
	}
};


const actualDate = new Date();

// This doesn't work because of browser defaults 
// addMoviesFromJSONFile = (movieListObject) => {
// 	fetch("./movies.json")
// 		.then(response => response.json())
// 		.then(moviesJson => movieListObject.addMovieJSON(movies))
// 		.catch(error => console.error('There was an error. The error was: ', error));
// }

import { Calendar } from "./calendar.js";
import { MovieList } from "./movielist.js";

const calendar1 = new Calendar(actualDate.getMonth() + 1, actualDate.getFullYear(), actualDate.getDate());
const movieList1 = new MovieList(calendar1);

import { moviesJsonString, moviesJsonString2 } from "./movies.js";
movieList1.addMovieJSON(moviesJsonString);
movieList1.addMovieJSON(moviesJsonString2);

movieList1.addMovieListArticle();

// const buttons = Object.values(document.getElementsByTagName("button")).concat(Object.values(document.getElementsByClassName("button")));

// buttons.forEach(button => {
// 	button.addEventListener("mouseover", () => {
// 		button.classList.add("hovered");
// 	});
// });

// buttons.forEach(button => button.addEventListener("mouseout", () => {
// 	button.classList.remove("hovered");
// }));