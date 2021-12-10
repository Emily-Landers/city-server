const axios = require('axios');



async function getMovies(request, response){
    try{
const { query } = req.query;
let url = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.SECRET_MOVIE_PASSWORD}&query=${query}&language=en-US&page=1&include_adult=false`);
const niceData = url.data.data.results.map(movie => new Movies (movie));
response.status(200).send(niceData);
    } catch(event){
        response.status(500).send('server error');
    }

class Movies {
    constructor(obj) {
        this.title = obj.title;
        this.overview = obj.overview;
        this.image = `https://image.tmdb.org/t/p/w500${obj.poster_path}`;
    }
    }
}

module.exports = getMovies;