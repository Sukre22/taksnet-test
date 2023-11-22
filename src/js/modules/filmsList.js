

const filmsList = () => {

	const filmsList = document.querySelector('.main-films__list');
	const searchInput = document.getElementById('searchInput');

	let movies;

    fetch('films.json')
    .then(response => response.json())
    .then(data => {
		movies = data;
		displayMovies(movies);
		console.log(movies);
	})
	.catch(error => console.log('Ошибка', error));

	


	searchInput.addEventListener('input', function() {
		const searchTerm = searchInput.value.toLowerCase();
		const filteredMovies = movies.filter(movie => movie.title.toLowerCase().startsWith(searchTerm));
		displayMovies(filteredMovies);
	});

	

	//Отображение фильмов
	function displayMovies(movies) {
		//Очистка спика фильмов
		while (filmsList.firstChild) {
			filmsList.removeChild(filmsList.firstChild);
		}

		//Добавление в список фильмов
		movies.forEach(item => {
	const listItem = document.createElement("li");	
	listItem.classList.add("main-films__name");	
	listItem.textContent = item.title;
	
	const span = document.createElement("span");	
	span.setAttribute("id", "bookmark");
	span.classList.add("bookmark-icon");
	span.textContent = "☆";

	
	listItem.appendChild(span);	
	filmsList.appendChild(listItem);
		})
	

	}            
	   
};

export default filmsList;
