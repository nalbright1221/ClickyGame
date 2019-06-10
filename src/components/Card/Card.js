import React from "react"
import "./Card.css"

function Card(props) {
   console.log(props);
    return(
        <div
            className="card"
            value={props.id}
            onClick={() => props.handleClick(props.id)}
        >

            <h1>{props.id} </h1>
            <img alt={props.id}  src={props.src} />
            </div>
    )
};

export default Card; 