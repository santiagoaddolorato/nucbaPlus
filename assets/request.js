const KEY = "84747bfe05f50e51433d38a7c4bb8ed3";

const TRENDING = `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}&language=en-US`;
const TOPRATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=en-US`;
const UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}&language=en-US`;

const fetchMovies = async (searchTerm, page = 1) =>{
    const response = await fetch(searchTerm + `&page=${page}`);
    const data = await response.json();
    return data;
};
