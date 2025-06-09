const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzhmZjY0Zjg3Yjc5YWFkNGNiYTNlMTkzODkyM2QzNiIsIm5iZiI6MTc0OTQ4NTQ5My42MDksInN1YiI6IjY4NDcwN2I1ZDM3NGVlZjM5ZjNmYzg4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4yepReQfYysoHZB1Hai_UvcMGSStf2ZNdc8m6_U1n0w'
  }
};

const fetchMovies = async () => {
    const response = await fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));
}