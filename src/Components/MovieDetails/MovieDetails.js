import {  useParams} from "react-router-dom";
import React, {useState, useEffect } from "react";
import { getIdFromSlug } from '../Slug/Slug';
import {getMovieDetails} from '../Api/Api'
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";
import DetailsCardMovie from "./DetailsCard/DetailsCard";
import s from "./MovieDetails.module.css";


function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const {slug} = useParams();
    const movieID = getIdFromSlug(slug);
   
    useEffect(() => {
        getMovieDetails(movieID).then(res=>{
          setMovie(res)
        })
      }, [movieID]);
   
    return(
        <> {movie && (
        <section className={s.movieDetialsSection}>
            <div className={s.mainContainer}>
          <DetailsCardMovie movie ={movie}/>
          <AdditionalInfo/>
            </div>
            </section>)}
            </>
    )
}
export default MovieDetails