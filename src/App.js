
import React, { lazy, Suspense } from "react";
import { Routes , Route} from "react-router-dom";
import {TailSpin} from "react-loader-spinner";
import Navigation from "./Components/Navigation/Navigation";

const MoviesPage = lazy(() => import("./Components/MoviesPage/MoviesPage"));
const MovieDetails = lazy(() => import("./Components/MovieDetails/MovieDetails"));
const TrendingMovies = lazy(() => import("./Components/TrendingMovies/TrendingMovies"));

const Loading = () => (
   <div className='loader'>
    <TailSpin color="#00BFFF"height={100}width={100} />
  </div>
);



function App() {
  
  return (
    <div >
   <Navigation />
   <Suspense fallback={<Loading/>}>
          <Routes >
          <Route  path='/' element={<TrendingMovies />}></Route>
          <Route  path="movies" element={<MoviesPage />}></Route>
          <Route end path='movies/:slug/*' element={<MovieDetails />}></Route>
    </Routes >
    </Suspense>
    </div>
  );
}

export default App;
