const baseURL = 'https://api.themoviedb.org/3'
const urlImage = 'https://image.tmdb.org/t/p/w500/'

const urls = {
    getMovies:'/discover/movie',
    getById: '/movie',
    getGenres:'/genre/movie/list',
    searchMovie:'/search/movie',
}

export {
    baseURL,
    urls,
    urlImage,
}