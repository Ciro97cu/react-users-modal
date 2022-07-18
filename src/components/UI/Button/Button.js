import React from "react"; // <-- importo React
import style from "./Button.module.css"; // <-- importo il file CSS

const Button = props => {
    return <button className={style.button} type={props.type || "button"}>{props.children}</button>

}

export default Button;