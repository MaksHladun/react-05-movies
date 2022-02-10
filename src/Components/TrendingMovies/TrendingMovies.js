import React, { useEffect, useState  } from "react";
import { Link  } from "react-router-dom";
import { makeSlug } from '../Slug/Slug';
import { fetchTrendingMovies } from "../Api/Api";
import TrendingMoviesItem from "./TrendingMoviesItem";
import s from "./TrendingMovies.module.css";


export default function TrendingMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchTrendingMovies().then(res=>{
            setMovies(res)
        })
    },[])
  
    return(
        <section className={s.homePage}>
        <div className={s.mainContainer}>
          <h2 className={s.title}>Trending Today</h2>
          <ul className={s.moviesList}>
            {movies.map((movie) => (
              <li className={s.moviesList__item} key={movie.id}>
                   <Link
                to={{
                  pathname: `/movies/${makeSlug(`${movie.title} ${movie.id}`)}`,
                }}
              >
                <TrendingMoviesItem poster={movie.poster_path} title={movie.title}/>  
                </Link> 
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
      
  }