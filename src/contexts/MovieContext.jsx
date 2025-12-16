import {
    createContext,
    useContext,
    useState,
    useEffect
} from 'react'


const MovieContext = createContext()

export function useMovieContext() {
   return useContext(MovieContext)
}

export function MovieProvider({children}) {
    const [favorites, setFavorites] = useState({})

    useEffect(function() {
        const storedFavorites = localStorage.getItem("favorites")
        if(storedFavorites)
            setFavorites(JSON.parse(storedFavorites))
    }, [])

    useEffect(function() {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

    function addToFavorites(movie) {
        setFavorites(function(previous) {
            let tmp = {...previous}
            tmp[movie.id] = movie
            return tmp
        })
    }

    function removeFromFavorites(movie) {
        setFavorites(function(previous) {
            let tmp = {...previous}
            delete tmp[movie.id]
            return tmp
        })
    }

    function isFavorite(movie) {
        return favorites[movie.id] !== undefined
    }

    const context = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={context}>
        {children}
    </MovieContext.Provider>
}
