export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"; // For poster images
const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzhmZjY0Zjg3Yjc5YWFkNGNiYTNlMTkzODkyM2QzNiIsIm5iZiI6MTc0OTQ4NTQ5My42MDksInN1YiI6IjY4NDcwN2I1ZDM3NGVlZjM5ZjNmYzg4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4yepReQfYysoHZB1Hai_UvcMGSStf2ZNdc8m6_U1n0w'
  }
};

// src/services/tmdbService.js
import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY; 
const BASE_URL = "https://api.themoviedb.org/3";
const AUTH_KEY =import.meta.env.VITE_AUTH
const apiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});



export const searchMovies = async (query ,page =1, year = null) =>{try {
 console.log(query)
  const params = {query,page}
  const response = await apiClient.get('/search/movie',{params}) 
  console.log(response.data)
  return response.data
} catch (error) {
  console.error("error searching movies; " ,error)
  throw error
}}

// You could add more functions here, e.g., getMovieDetails, searchMovies etc.