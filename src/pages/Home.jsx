import "../css/Home.css"
import MovieCard from '../components/MovieCard.jsx'
import {useState, useEffect} from 'react'
import {getMovies, searchMovies} from '../services/api.js'


function Home() {
    const [searchText, setSearchText] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    /*
    const movies = [
        {id: 1, title: 'The Matrix', url: 'https://site.com', release_date: '1999'},
        {id: 2, title: 'Exterminator', url: 'https://site.com', release_date: '1989'},
        {id: 3, title: 'EuroTrip', url: 'https://site.com', release_date: '2002'},
        {id: 4, title: 'Madagascar', url: 'https://site.com', release_date: '2010'},
    ];
    */

    useEffect(() => {
        async function loadPopularMovies() {
            try {
                const popularMovies = await getMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.log(err);
                setError("Failed to fetch movies");
            } finally {
                setLoading(false);
            }
        }

        // Call it right away
        loadPopularMovies();
    }, []);


    async function handleSearch(e) {
        e.preventDefault();
        let value = e.target.value
        if (value === undefined || value.trim() == "" || loading) {
            setSearchText("");
            return;
        }

        setLoading(true);
        try {
            const searchResults = await searchMovies(value);
            setMovies(searchResults);
            setError(null);
        } catch(err) {
            console.log(err);
            setError("Failed to search movies");
        } finally {
            setLoading(false);
        }
        setSearchText(value);
    }

    return <div className="home">
        <form className="search-form" onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="search for movies..."
                className="search-input"
                value={searchText}
                onChange={handleSearch}
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {loading ? (
            <div className="loading">Loading...</div>
        ) : (
            <div className="movies-grid">
                {movies.map(m => <MovieCard movie={m} key={m.id} />)}
            </div>
        )}
    </div>;
}


export default Home;
