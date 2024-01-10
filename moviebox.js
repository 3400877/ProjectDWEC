// Movie List in Document
const documentMovieList = document.getElementsByClassName("movie");

// Buttons for the movie box
const buttonBack = document.getElementById("btn-back");
const buttonForward = document.getElementById("btn-forw");

const movieBox = document.getElementById("movie-box");

// Close the movie box when we click it

movieBox.addEventListener("click", () => makeVisible(movieBox, false));



const openMovie = (event) => {
	const activeMovie = event.currentTarget.cloneNode(true);
	const activeMovieImg = document.createElement("img");
	activeMovieImg.classList.add("img");
	activeMovieImg.src = "./assets/img/placeholder.jpg";
	activeMovie.appendChild(activeMovieImg);
	makeVisible(movieBox);
	movieBox.replaceChild(activeMovie, movieBox.firstChild);
    indexMovie = [...documentMovieList].indexOf(event.currentTarget);
}



