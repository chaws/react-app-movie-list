import "../css/Favorites.css"
import {useMovieContext} from '../contexts/MovieContext.jsx'
import MovieCard from '../components/MovieCard.jsx'

export default function Favorites() {
    const {favorites} = useMovieContext()

    if(favorites) {
        const movies = Object.values(favorites)
        return <>
            <div className="movies-grid">
                {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
            </div>
        </>
    }

    return <>
        <div className="favorites-empty">
            <p>No favorites yet</p>
        </div>
    </>
}
