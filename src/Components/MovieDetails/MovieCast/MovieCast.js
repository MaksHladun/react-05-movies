import React, { useEffect, useState } from "react";
import { getMovieCast } from "../../Api/Api";
import s from "./MovieCast.module.css";


const MovieCast = ({ movieID }) => {
    const [cast, setCast] = useState(null);

useEffect(() => {
    getMovieCast(movieID).then(res=>{
        setCast(res.cast)
    })
}, [movieID]);

return(
<div>
      <ul className={s.castList} id="cast">
        {cast &&
          cast.map(({ id, profile_path, original_name, character }) => (
            <li key={id} className={s.castItem}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w300${profile_path}`
                    : "https://pomogaetsrazu.ru/images/offers/2829219234.jpg"
                }
                alt={original_name}
              />
              <div className={s.itemDescr}>
                <p className={s.personName}>{original_name}</p>
                <p className={s.character}>Character: {character}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
)
}
export default MovieCast