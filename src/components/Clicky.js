import React from "react";
import Title from "./Title/Title";
import Nav from "./Nav/Nav";
import Card from "./Card/Card";


function shuffleCards(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
};

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
      console.log(id);
      let array = [1,2,3,4,5];
      let shuffled = shuffleCards(this.state.cards);
      this.setState({cards: shuffled});
      if (this.state.alreadyClicked.indexOf(id) === -1) {
       let temp = this.state.alreadyClicked;
        temp.push(id);
        this.setState({alreadyClicked:temp, currentScore: this.state.currentScore + 1});
      }
      else { 
        if(this.state.topScore < this.state.currentScore) {
          this.setState({topScore:this.state.currentScore})
        }
        this.setState({currentScore:0})
  //losing code 
}     
     }

  componentDidMount = () => {
      console.log('!!')
      console.log(this.state)
  }

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div>
 
  <Nav 
  score= {this.state.currentScore}
  newTopScore = {this.state.topScore}>

  </Nav>

      <Title>
        Click on an image to increase your score.
        Don't Click on the same image twice or you start over! 
        Try to get a high score of 12 to win! 
      </Title>

      
      <div style={{display:"flex"}}>
          {this.state.cards.map((card) => {
              return (
                <Card 
                  handleClick = {this.handleClick} 
                  src = {card.src}
                  id = {card.key}
                />
              )
          })}
      </div>    
   

      </div>
    
    )}
}

export default Clicky;
