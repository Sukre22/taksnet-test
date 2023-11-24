const filmsList = () => {

	const filmsList = document.querySelector('.main-films__list');
	const searchInput = document.getElementById('searchInput');
	let movies;

    fetch('films.json')
    .then(response => response.json())
    .then(data => {
		movies = data;
		displayMovies(movies);		
	})
	.catch(error => console.log('Ошибка', error));	


	searchInput.addEventListener('input', function() {
		const searchTerm = searchInput.value.toLowerCase();
		const filteredMovies = movies.filter(movie => movie.title.toLowerCase().startsWith(searchTerm));
		displayMovies(filteredMovies);
	});


	fetch('tags.json')
	.then(response => response.json())
	.then(data => {
	  const filmsList = document.querySelector('.main-films__tags');
	  
	  data.forEach(item => {   
		const listItem = document.createElement('li'); 
		listItem.className = "tag";
		listItem.setAttribute("data-tag", item);
		listItem.textContent = item;
		filmsList.appendChild(listItem);
	  });
	  
	})
	.then(data => {
		const tagElements = document.querySelectorAll('.tag');
		tagElements.forEach(tagElement => {
			const tag = tagElement.getAttribute('data-tag');
			tagElement.addEventListener('click', () => {
				const filteredMovies = movies.filter(movie => movie.tags.includes(tag));
				displayMovies(filteredMovies);
			})
		}) 

	})
  

	


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

	});
	

  }            
	   
};

export default filmsList;
