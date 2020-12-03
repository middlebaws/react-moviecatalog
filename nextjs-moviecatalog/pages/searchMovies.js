import React, {useState} from "react";
import MovieCard from './movieCard.js';


export default function SearchMovies(){
    
    const [query, setQuery] = useState(''); //query da url para patrametro do filme
    const [movies, setMovies] = useState([]); //query de filme, todos os dados completos
    
    const searchMovies = async (e) => {
        e.preventDefault();
        
        // API para consumo da lista de movies
        const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;

        /*
        retornos interessantes
        > id
        > original_language
        > original_title
        > overview
        > popularity
        > poster_path
        > release_date
        */
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }
    
    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query"
                    placeholder="Ex: Jurassic Park, Pokemon 2000, Transformers e etc..."
                    value={query} onChange={(e) => setQuery(e.target.value)}
                    />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id}></MovieCard>
                ))}
            </div>    
        </>
    )
}

