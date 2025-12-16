import '../css/MovieCard.css'
import {useMovieContext} from '../contexts/MovieContext.jsx'


function MovieCard({movie}) {
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    
    function onFavoriteClick(e) {
        e.preventDefault()

        if (isFavorite(movie))
            removeFromFavorites(movie)
        else
            addToFavorites(movie)
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-overlay">
                <button className={`favorite-btn ${isFavorite(movie) ? "active" : ""}`} onClick={onFavoriteClick}>
                    ♡
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split('-')[0]}</p>
        </div>
    </div>;
}

export default MovieCard;
