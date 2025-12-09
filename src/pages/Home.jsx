import MovieCard from '../components/MovieCard.jsx'
import {useState} from 'react'


function Home() {

    const movies = [
        {id: 1, title: 'The Matrix', url: 'https://site.com', release_date: '1999'},
        {id: 2, title: 'Exterminator', url: 'https://site.com', release_date: '1989'},
        {id: 3, title: 'EuroTrip', url: 'https://site.com', release_date: '2002'},
        {id: 4, title: 'Madagascar', url: 'https://site.com', release_date: '2010'},
    ];

    const [searchText, setSearchText] = useState('');

    function handleSearch(e) {
        e.preventDefault();
        setSearchText(e.target.value)
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
        <div className="movies-grid">
            {movies.map(m => m.title.toLowerCase().startsWith(searchText) && <MovieCard movie={m} key={m.id} />)}
        </div>
    </div>;
}


export default Home;
