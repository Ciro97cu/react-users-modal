import React from "react"; // <-- importo React
import style from "./Card.module.css"; // <-- importo il file CSS

const Card = props => {
    let classes = `${props.className} ${style.card}`;
    return <div className={classes}>{props.children}</div>
};

export default Card;