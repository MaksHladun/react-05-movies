import { useParams,Route,Routes} from "react-router-dom";
import { getIdFromSlug } from '../../Slug/Slug';
import MovieCast from "../MovieCast/MovieCast";
import MovieReviews from "../MovieReviews/MovieReviews";


export  function RenderCast() {
    const {slug} = useParams();
    
    const movieID = getIdFromSlug(slug);
    return(
        <>
        <Routes>
<Route path="/cast" element={<MovieCast movieID={movieID} />}></Route> 
<Route path="/reviews" element={<MovieReviews movieID={movieID}/>}></Route>
</Routes>
        </>
    ) 
}

