# React + Vite basic App

The app exercises the main topics of React.js, such as

* Components
* Pages
* React Router
* Services (API interaction)
* Use of states
* Use of context

The app is pretty basic but it does what most React.js apps likely do: frontend layout, interacting with a REST API and managing data on the browser.

## REST API
For the sake of simplicity, we are using an existing REST API from [The Movie DB](https://developer.themoviedb.org/docs/json-and-jsonp). It offers access to thousand of real movies information enough to populate this app.

# Functionality

There are 2 pages in this app

## Home
![Home](home.png)

The `Home` page simply lists all latest popular movies. By default there are 20 movie posters. Decision on why such movies are popular or not will depend on the backend.

On the top of the page you can also see a search bar for which you can guess, you can search movies! Searching movies uses another REST API endpoint to provide a query and return only items matching our search.

Finally, when each movie poster is hovered, there is an empty heart that one can click to make that movie a favorite.

## Favorites
![Home](favorites.png)

Once the user selected a few favorite movies, a complete favorited movies list will show up here, reusing same React.js elements and proving that the whole state & context work properly.

# References

The app was based on this awesome YouTube React.js tutorial: https://www.youtube.com/watch?v=G6D9cBaLViA.
