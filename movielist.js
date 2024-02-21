const apiKey = 'f52bd55a'; // My API key
const apiUrl = 'https://www.omdbapi.com/?s=';

const movieListHeader = document.getElementById("h_movies");

const movieForm = document.getElementById("movie-form");

import * as popups from "./popups.js";
import * as gb from "./group-by.js";

class MovieList {
	constructor(calendar) {
		this.movieList = [];
		this.calendar = calendar;
		this.printDate();
		this.bindEvents();
	}

	addMoviesFrom;

	// Mark a movie as watched
	watchMovie = (movie) => {
		movie.watched = !(movie.watched ?? false);
	};

	// Remove a movie from the list
	removeMovie = (movie) => {
		const index = this.movieList.findIndex(m => m.title === movie.title);
		if (index !== -1) {
			this.movieList.splice(index, 1);
		}
	};

	addMovie = (movie) => {
		this.movieList.push(movie);
	};

	addMovieJSON = (movieJSON) => {
		this.addMovies(JSON.parse(movieJSON).movies);
	};

	addMovies = (movies) => movies.forEach(this.addMovie);

	printDate = () => this.calendar.printDay(movieListHeader);

	// This function adds an article with the list of movies per month
	addMovieListArticle = () => {
		// Create a new article for the list of movies
		const movieListArticle = document.createElement('article');

		// We filter for the list of movies in a month
		const filteredMovieList = this.movieList.filter(movie => movie.month == this.calendar.month);

		// And we group those movies by the day
		const groupedMovieList = gb.groupBy(filteredMovieList);
		//const groupedMovieList = Object.groupBy(filteredMovieList, ({ day }) => day);

		Object.entries(groupedMovieList).forEach(([day, movies]) => {

			// Create a div for each day
			const dayDiv = document.createElement('div');

			// Add the date to the div
			const dayTitle = document.createElement('h2');
			dayTitle.classList.add("header");
			dayTitle.textContent = `${this.calendar.month}/${day}/${this.calendar.year}`;
			dayDiv.appendChild(dayTitle);

			movies.forEach(movie => {
				// Create a div for each movie
				const movieDiv = document.createElement('div');
				movieDiv.classList.add("movie", "bordered");
				if (movie.watched) {
					movieDiv.classList.add("watched");
				}

				// Add the title of the movie
				const movieTitle = document.createElement('h2');
				movieTitle.textContent = movie.title;
				movieDiv.appendChild(movieTitle);

				// Add the movie director to the div
				const movieDirector = document.createElement('p');
				movieDirector.textContent = `Director: ${movie.director}`;
				movieDiv.appendChild(movieDirector);

				// Create a new div for the cast
				const castDiv = document.createElement('div');

				// Loop through each actor in the cast array
				movie.cast.forEach(actor => {
					// Add the actor to the cast div
					const castMember = document.createElement('p');
					castMember.textContent = actor;
					castDiv.appendChild(castMember);
				});

				// Add the cast div to the movie div
				movieDiv.appendChild(castDiv);

				// Now, we append the movie div to the day div
				dayDiv.append(movieDiv);
			});

			// Add the movie div to the article
			movieListArticle.appendChild(dayDiv);
		});

		movieListHeader.parentNode.replaceChild(movieListArticle, movieListHeader.nextSibling);
	};

	bindEvents = () => {
		addEventListener("dateUpdated", () => {
			this.printDate();
			this.addMovieListArticle();
			// We add an event listener to each movie
			[...documentMovieList].forEach((movie) => {
				movie.addEventListener('click', openMovie);
			}
			);
		});

		movieForm.addEventListener("submit", (event) => {
			event.preventDefault();
			const title = document.getElementById('title').value;
			const director = document.getElementById('director').value;
			const dateStr = document.getElementById('date').value;
			const cast = document.getElementById('cast').value.split(',');

			if (validateMovie(title, director, dateStr, cast)) {
				const date = new Date(dateStr);
				const movie = {
					title: title,
					year: date.getFullYear(),
					month: date.getMonth() + 1,
					day: date.getDate(),
					director: director,
					cast: cast
				};

				this.addMovie(movie);
				this.addMovieListArticle();
			} else {
				window.alert("There was an error receiving the data");
			}

			return false;
		});

		popups.removeMovieForm.onsubmit = (event) => {
			event.preventDefault();
			const title = document.getElementById('rm-title').value;
			const movie = this.movieList.find(movie => movie.title === title);
			if (movie) {
				this.removeMovie(movie);
			}
			this.addMovieListArticle();
			return false;
		};

		popups.movieWatchedForm.onsubmit = (event) => {
			event.preventDefault();
			const title = document.getElementById('watch-title').value;
			const movie = this.movieList.find(movie => movie.title === title);
			if (movie) {
				this.watchMovie(movie);
			}
			this.addMovieListArticle();
			return false;
		};


	};
}

export { MovieList };

