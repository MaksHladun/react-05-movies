import { NavLink} from "react-router-dom";
import s from "../MovieDetails.module.css"
import { RenderCast } from "./Render";


export default function AdditionalInfo(){

  return(
          <>
        <div className={s.additionalInfo}>
              <h3>Additional Information</h3>
              <ul className={s.additionalInfo__list}>
                <li className={s.additionalInfo__item}>
                <NavLink
                    className={({ isActive }) =>isActive ? s.additionalInfo__activeLink :s.additionalInfo__link}
                    to={`cast` }
                  >
                    Cast
                  </NavLink>
                </li>
                <li className={s.additionalInfo__item}>
                  <NavLink
                     className={({ isActive }) =>isActive ? s.additionalInfo__activeLink :s.additionalInfo__link}
                    to={`reviews`}
                  >
                    Reviews
                  </NavLink>
                </li>
              </ul>
            </div>
              <RenderCast/>
               </>
  )
}
