

const filmsList = () => {

    fetch('films.json')
    .then(response => response.json())
    .then(data => {
      const filmsList = document.querySelector('.main-films__list');
      
      data.forEach((item) => {
        // Создание элемента списка
        const listItem = document.createElement("li");
    
        // Добавление класса main-films__name
        listItem.classList.add("main-films__name");
    
        // Добавление текста названия фильма
        listItem.textContent = item.title;
    
        // Создание элемента span
        const span = document.createElement("span");
    
        // Добавление классов и текста элемента span
        span.setAttribute("id", "bookmark");
        span.classList.add("bookmark-icon");
        span.textContent = "☆";
    
        // Добавление элемента span в элемент списка
        listItem.appendChild(span);
    
        // Добавление элемента списка в список фильмов
        filmsList.appendChild(listItem);
    });
    });

};

export default filmsList;
