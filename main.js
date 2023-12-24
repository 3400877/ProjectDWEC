// Navigation bar stuff
const addMovieButton = document.getElementById("add-movie");
const addNavPopup = document.getElementById("add-popup");
const navPopup = document.getElementById("nav-popup");
const removeMovieButton = document.getElementById("remove-movie-button");
const watchMovieButton = document.getElementById("watch-movie-button");
const removeMovieForm = document.getElementById("remove-movie-form");
const watchMovieForm = document.getElementById("watch-movie-form");

import { Calendar } from "./calendar.js"

import { MovieList } from "./movieList.js"

const makeVisible = (element) => element.style.display = element.style.display == 'none'
	? 'flex'
	: 'none';

const validateMovie = (title, director, date, cast) => title.length > 0 && director.length > 0 && (date ?? undefined) && cast.some(actor => actor.length > 0);

const moviesJsonString = `
{
    "movies": [
        {
            "title": "Silent Night",
            "year": 2023,
			"month": 11,
			"day": 30,
            "director": "Camille Griffin",
            "cast": [
                "Keira Knightley",
                "Lily-Rose Depp",
                "Matthew Goode"
            ]
        },
        {
            "title": "Candy Cane Lane",
            "year": 2023,
			"month": 10,
			"day": 1,
            "director": "Maggie Carey",
            "cast": [
                "Emma Stone",
                "Ryan Gosling",
                "Zoey Deutch"
            ]
        },
        {
            "title": "Renaissance: A Film By Beyoncé",
            "year": 2023,
			"month": 12,
			"day": 22,
            "director": "Beyoncé and Ed Burke",
            "cast": []
        },
		{
			"title": "The Marvels",
			"year": 2023,
			"month": 11,
			"day": 22,
			"director": "Nia DaCosta",
			"cast": [
				"Brie Larson",
				"Teyonah Parris",
				"Iman Vallani"
			]
		},
		{
			"title": "Napoleon",
			"year": 2023,
			"month": 11,
			"day": 22,
			"director": "Ridley Scott",
			"cast": [
				"Joaquin Phoenix"
			]
		},
		{
			"title": "Wish",
			"year": 2023,
			"month": 11,
			"day": 22,
			"director": "Disney",
			"cast": []
		},
		{
			"title": "Thanksgiving",
			"year": 2023,
			"month": 11,
			"day": 22,
			"director": "Eli Roth",
			"cast": []
		},
		{
			"title": "Spider-Man: Across the Spider-Verse",
			"year": 2023,
			"month": 12,
			"day": 21,
			"director": "James Gunn",
			"cast": []
		},
		{
			"title": "Oppenheimer",
			"year": 2023,
			"month": 12,
			"day": 25,
			"director": "Christopher Nolan",
			"cast": []
		},
		{
			"title": "Guardians of the Galaxy Vol. 3",
			"year": 2023,
			"month": 12,
			"day": 21,
			"director": "James Gunn",
			"cast": []
		},
		{
			"title": "The Color Purple",
			"year": 2023,
			"month": 12,
			"day": 21,
			"director": "Steven Spielberg",
			"cast": []
		},
		{
			"title": "Leave the World Behind",
			"year": 2023,
			"month": 12,
			"day": 21,
			"director": "Ava DuVernay",
			"cast": []
		},
		{
			"title": "Ferrari",
			"year": 2023,
			"month": 12,
			"day": 21,
			"director": "Curtis Hanson",
			"cast": []
		}
    ]
}

`


const actualDate = new Date();

// This doesn't work because of browser defaults 
// addMoviesFromJSONFile = (movieListObject) => {
// 	fetch("./movies.json")
// 		.then(response => response.json())
// 		.then(moviesJson => movieListObject.addMovieJSON(movies))
// 		.catch(error => console.error('There was an error. The error was: ', error));
// }

const calendar1 = new Calendar(actualDate.getMonth() + 1, actualDate.getFullYear(), actualDate.getDate());
const movieList1 = new MovieList(calendar1);
movieList1.addMovieJSON(moviesJsonString);
movieList1.addMovieListArticle();

addMovieButton.onclick = () => makeVisible(movieForm);
addNavPopup.onclick = () => makeVisible(navPopup);
removeMovieButton.onclick = () => makeVisible(removeMovieForm);
watchMovieButton.onclick = () => makeVisible(watchMovieForm);