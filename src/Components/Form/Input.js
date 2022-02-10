import s from "./Form.module.css";

const Input =({onChange, value})=>{

    return(
        <input
        type="text"
        placeholder="Find movie"
        value={value}
        onChange={onChange}
        className={s.searchForm__input}
      />
    )
}

export default Input
