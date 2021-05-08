const fetchNewShows = async (query) => {
    displayCanvas.innerHTML = '';
    try{
        const response = await axios.get(`http://api.tvmaze.com/search/shows?q="${query}"`);
        console.log(response)
        const showsFound = response.data.length;
        const tvShows = response.data;
        console.log(response.data[0].show.image.medium);
        
        for(tvShow of tvShows){
            if( tvShow.show.image && tvShow.show.name){
                const img = tvShow.show.image.medium;
                const name = tvShow.show.name;   
                displayTvShow(name, img);
            }
        }
    }catch(err){
        displayTvShow('Cannot find match', "img/pic01.jpg")
    }


}

function displayTvShow(name, img){

    const newCard = document.createElement('div');
    newCard.classList.add('card', 'col', 'col-2');

    const newCardBody = document.createElement('div');
    newCardBody.classList.add('card-body');

    const newH5 = document.createElement('h5');
    newH5.classList.add('card-title');
    newH5.textContent = name;
    
    const newImg = document.createElement('img');
    newImg.src = img;

    newCard.append(newImg);
    newCardBody.append(newH5);
    newCard.append(newCardBody)

    displayCanvas.append(newCard);
}

