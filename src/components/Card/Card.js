import React from "react"
import "./Card.css"

function Card(props) {
    return(
        <div
            className="card"
            value={props.key}
            onClick={() => props.handleClick(props.key)}
        >
            <img alt={props.key}  src={props.src} />
            </div>
    )
};

export default Card; 