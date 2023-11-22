const tagList = () => { 
  

    fetch('tags.json')
  .then(response => response.json())
  .then(data => {
    const filmsList = document.querySelector('.main-films__tags');
    
    data.forEach(item => {   
      const listItem = document.createElement('li');   
      listItem.textContent = item;
      filmsList.appendChild(listItem);
    });
  });



};

export default tagList;

