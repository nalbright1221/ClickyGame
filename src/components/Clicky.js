import React from "react";
import Title from "./Title/Title";
// import Nav from "./Nav/Nav";
import Card from "./Card/Card";


// By extending the React.Component class, Counter inherits functionality from it
class Clicky extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    topScore: 0,
    currentScore: 0,
    alreadyClicked:  [],
    cards: [

      {
        key:1,
        src:"https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image"
      },
      {
        key:2,
        src:"https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image"
      },
      {
        key:3,
        src:"https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image"
      },
      {
        key:4,
        src:"https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image"
      },
      {
        key:5,
        src:"https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image"
      },
      {
        key:6,
        src:"https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image"
      },
      {
        key:7,
        src:"https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image"
      },
      {
        key:8,
        src:"https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image"
      },
      {
        key:9,
        src:"https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image"
      },
      {
        key:10,
        src:"https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image"
      },
      {
        key:11,
        src:"https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image"
      },
      {
        key:12,
        src:"https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image"
      },
    ]
    };

     handleClick = (id) => {

     }

  componentDidMount = () => {
      console.log('!!')
  }

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div>
 

      <Title>
        Click on an image to increase your score.
        Don't Click on the same image twice or you start over! 
        Try to get a high score of 12 to win! 
      </Title>

      
      <div>
          {this.state.cards.map((card) => {
              return (
                <Card 
                  handleClick = {this.handleClick} 
                  key = {card.key}
                  src = {card.src}
                />
              )
          })}
      </div>    
   

      </div>
    
    )}
}

export default Clicky;
