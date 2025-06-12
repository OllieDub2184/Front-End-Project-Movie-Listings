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

const API_KEY = '878ff64f87b79aad4cba3e1938923d36'; //process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const apiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getPopularMovies = async (page = 1) => {
  try {
    const response = await apiClient.get("/movie/popular", {
      params: { page },
    });
    return response.data; // Contains results, page, total_pages, total_results
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    throw error; // Re-throw to be caught by the component
  }
};

export const getTrendingMovies = async (timeWindow = "day") => {
  // timeWindow can be 'day' or 'week'
  try {
    const response = await apiClient.get(`/trending/movie/${timeWindow}`);
    return response.data.results; // Trending API returns results directly
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};

// You could add more functions here, e.g., getMovieDetails, searchMovies etc.