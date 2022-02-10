import React, { useEffect, useState } from "react";
import { getReviews } from "../../Api/Api";
import s from "./MovieReviews.module.css";


const MovieReviews = ({ movieID }) => {
    const [reviews, setReviews] = useState(null);

useEffect(() => {
    getReviews(movieID).then(res=>{
        setReviews(res.results);
    })

   
}, [movieID]);

    return (
        <div >
          <ul>
            {reviews && reviews.length > 0 ? (
              reviews.map((reviews) => (
                <li key={reviews.id} className={s.reviewItem}>
                  <h3>Author: {reviews.author}</h3>
                  <p className={s.reviewText}>{reviews.content}</p>
                </li>
              ))
            ) : (
              <li className={s.reviewItem}>
                We don't have any reviews for this movie
              </li>
            )}
          </ul>
        </div>
      );

}

export default MovieReviews