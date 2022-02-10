import s from "./TrendingMovies.module.css";

function TrendingMoviesItem({poster,title}) {
    return(
     <>
     <img
        src={
            poster
              ? `https://image.tmdb.org/t/p/w300${poster}`
              : "https://pomogaetsrazu.ru/images/offers/2829219234.jpg"
          }
        alt={title} />
    <p className={s.moviesList__movieTitle}>{title}</p>
     </>
    )
}

export default TrendingMoviesItem;