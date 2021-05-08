const movieQuery = document.getElementById('movieQuery');

const searchForm = document.getElementById("searchForm");
searchForm.addEventListener('submit', function(e){
    e.preventDefault();
    console.dir(searchForm.elements.tvShowQuery.value);
    const query = searchForm.elements.tvShowQuery.value;
    fetchNewShows(query);
    
})

// const submitQueryButton = document.getElementById('submitQueryButton');
// submitQueryButton.addEventListener('click', fetchNewShows)
// movieQuery.addEventListener('click', displayTvInfo(movieQuery.textContent))

const displayCanvas = document.getElementById('displayCanvas');