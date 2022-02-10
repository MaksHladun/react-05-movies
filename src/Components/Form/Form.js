import React, {useState } from "react";

import Notiflix from "notiflix";
import s from "./Form.module.css";
import Input from "./Input";


 const Form = ({onSubmit}) => {
const [movieToFind, setMovieToFind] = useState('');


const handleChange = e => {
    const { value } = e.target;
    setMovieToFind(value.toLowerCase())
   
        };
     const handleSubmit = evt => {
        evt.preventDefault();  
            if(movieToFind.trim() === ''){
                Notiflix.Notify.failure(
                    "Enter what to look for"
                  );
                return;
            }
            onSubmit(movieToFind);
            setMovieToFind('')
             
          };


  return(
    <form  className={s.searchForm} onSubmit={handleSubmit}>
    <Input onChange={handleChange}value={movieToFind}/>
    <button type="submit" className={s.searchForm__button}>
      Search
    </button>
  </form>
    )
}



export default Form