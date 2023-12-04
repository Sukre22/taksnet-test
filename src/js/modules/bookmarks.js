import filmsList from './filmsList';

const bookmarks = () => { 

  const filmsList = document.querySelector('.main-films__list');
  const bookmark = document.querySelector('.bookmark-icon');

  console.log(bookmark);

  filmsList.addEventListener('click', function(event) {

    if (event.target.tagName === 'SPAN') {
      bookmark.classList.add('bookmarked');	
    }

  });

  
/*  const bookmark = querySelector('.bookmark-icon');


bookmark.addEventListener('click', () => {

 bookmark.classList.add('bookmarked');	

})*/



};

export default bookmarks;

