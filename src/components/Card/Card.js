import React from "react"
import "./Card.css"

function Card(props) {
//    console.log(props);
    return(
   
        <div class="column">
        <div 
            className="card column"
            value={props.id}
            onClick={() => props.handleClick(props.id)}
        >

         
            <img alt={props.id}  src={props.src} />
            </div>
            </div>
       
    )
};

export default Card; 