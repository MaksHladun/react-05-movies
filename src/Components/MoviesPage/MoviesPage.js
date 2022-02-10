import React, {useState, useEffect } from "react";
import { Link,  useNavigate, useLocation   } from "react-router-dom";
import { makeSlug } from '../Slug/Slug';
import Notiflix from "notiflix";
import s from "./MoviesPage.module.css";
import Form from "../Form/Form";
import TrendingMoviesItem from "../TrendingMovies/TrendingMoviesItem";
import {searchMovies} from '../Api/Api'


function MoviesPage() {
const [movie, setMovie] = useState('');
const [foundMovies, setFoundMovies] = useState([]);

let navigate  = useNavigate ();
const location = useLocation();

    const movieToFind=(evt)=>{
        setMovie(evt)
        navigate({...location,
          search: `query=${evt}`,
        }) 
    }

    useEffect(() => {
      const searchString = new URLSearchParams(location.search).get("query");
      
        if(searchString){
        const getMovies = async () => {
            const data = await searchMovies(searchString);

            if (data.length === 0) {
              Notiflix.Notify.failure(
                "No movies found! Please change your request and try again"
              );
            return;
            }
            setFoundMovies(data)

          }
          getMovies();
         
        } 
    }, [location.search, movie]);

return(
    <section className={s.moviesPage}>
      <div className={s.mainContainer}>
      <Form onSubmit={movieToFind}/>
        {foundMovies.length > 0 && (
          <ul className={s.moviesList}>
            {foundMovies.map((movie) => (
              <li className={s.moviesList__item} key={movie.id}>
                <Link
                to={{
                  pathname: `/movies/${makeSlug(`${movie.title} ${movie.id}`)}`,
                  }
                }
              >
              <TrendingMoviesItem poster={movie.poster_path} title={movie.title}/>   
              </Link>
            </li>
            ))}
          </ul>
        )}
      </div>
    </section>
)

}

export default MoviesPage