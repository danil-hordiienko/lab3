import MovieItem from "./MovieItem";
function Movies(props) {
    return (
        <div>
            {/* map creates a MovieItem for each movie in the list. */}
            {/* The IMDb ID gives each item a unique key for React. */}
            {props.myMovies.map((movie) => (
               <MovieItem myMovie={movie} key={movie.imdbID} />
            ))}
        </div>
    );
}
export default Movies;
