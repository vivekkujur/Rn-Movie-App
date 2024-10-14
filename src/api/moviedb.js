import axios from "axios";
import { apikey } from "../utils/constants";
 

const apiBaseUrl = "https://api.themoviedb.org/3"
const trendingMoviesEndPoint = `${apiBaseUrl}/trending/movie/day?language=en-US&api_key=${apikey}`
const upcomingMoviesEndPoint = `${apiBaseUrl}/movie/upcoming?language=en-US&page=1&api_key=${apikey}`
const topRatedMoviesEndPoint = `${apiBaseUrl}/movie/top_rated?language=en-US&page=1&api_key=${apikey}`
const movieDetailsEndPoint = movieId =>movieId? `${apiBaseUrl}/movie/${movieId}?language=en-US&api_key=${apikey}`:""


export const image500 = path => path? `https://image.tmdb.org/t/p/w500${path}`:null
export const image342 = path => path? `https://image.tmdb.org/t/p/w342${path}`:null
export const image185 = path => path? `https://image.tmdb.org/t/p/w185${path}`:null
// --url 'https://api.themoviedb.org/3/movie/55555?language=en-US' 
// --url 'https://api.themoviedb.org/3/movie/movie_id/similar?language=en-US&page=1' \
// --url 'https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US' \

const apiCall  = async (endpoint,params) =>{
    const options = {
        method:'GET',
        url:endpoint,
        params: params?params:{}
    }

    try{
        const response =await axios.request(options)
        return response.data

    }catch(error){
        console.log('error',error);
        return{}

    }
}

export const fetchTreningMovies= ()=>{
    return apiCall(trendingMoviesEndPoint)
}

export const fetchUpcomingMovies= ()=>{
    return apiCall(upcomingMoviesEndPoint)
}


export const fetcTopRatedMovies= ()=>{
    return apiCall(topRatedMoviesEndPoint)
}


export const fetchMovieDetails= (movieId)=>{
    return apiCall(movieDetailsEndPoint(movieId))
}

