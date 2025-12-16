const API_KEY = "2ebc1b81a5b8be7c8dfb4efe06e2a658";
const BASE_URL = "https://api.themoviedb.org/3"


export async function getMovies() {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    console.log(data);
    return data.results;
}

export async function searchMovies(search) {
    const query = encodeURIComponent(search);
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    const data = await response.json();
    console.log(data);
    return data.results;
}
