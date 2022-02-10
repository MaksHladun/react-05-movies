import s from "../MovieDetails.module.css"

function DetailsCardMovie({movie}) {

    return (
        <div className={s.movieCard}>
        <div className={s.posterContainer}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                : "https://pomogaetsrazu.ru/images/offers/2829219234.jpg"
            }
            alt={movie.title}
          />
        </div>

        <div className={s.descrContainer}>
          <h2 className={s.movieCard__title}>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </h2>
          <p className={s.movieCard__text}>
            User score: {movie.vote_average}
          </p>

          <h3>Overview</h3>
          <p className={s.movieCard__text}>
            {movie.overview ? movie.overview : "No overwies yet"}
          </p>

          <h3>Genres</h3>
          <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>
    )
    
}
export default DetailsCardMovie