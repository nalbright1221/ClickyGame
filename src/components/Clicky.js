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
    rightWrong: "",
    alreadyClicked:  [],
    cards: [

      {
        key:1,
        src:"https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.png"
      },
      {
        key:2,
        src:"https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png"
      },
      {
        key:3,
        src:"https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png"
      },
      {
        key:4,
        src:"https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1280px-Flag_of_Spain.svg.png"
      },
      {
        key:5,
        src:"http://flags.fmcdn.net/data/flags/w580/cn.png"
      },
      {
        key:6,
        src:"https://cdn10.bigcommerce.com/s-ey7tq/products/3631/images/4957/FISWI-2__19001.1407859413.1280.1280.jpg?c=2"
      },
      {
        key:7,
        src:"https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png"
      },
      {
        key:8,
        src:"http://flagpedia.net/data/flags/normal/gr.png"
      },
      {
        key:9,
        src:"https://www.worldatlas.com/r/w480/img/flag/ca-flag.jpg"
      },
      {
        key:10,
        src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/2000px-Flag_of_Iceland.svg.png"
      },
      {
        key:11,
        src:"https://s3.amazonaws.com/www.saf.com/wp-content/uploads/2013/01/12142112/UK-flag.jpg"
      },
      {
        key:12,
        src:"https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg"
      },
    ]
    };

  handleClick = (id) => {
      console.log(id);
      let shuffled = shuffleCards(this.state.cards);
      this.setState({cards: shuffled});
      if (this.state.alreadyClicked.indexOf(id) === -1) {
       let temp = this.state.alreadyClicked;
        temp.push(id);
        this.setState({
          alreadyClicked:temp, 
          currentScore: this.state.currentScore + 1,
          rightWrong: "Correct Click, Keep Clicking!!"});
      }

      else { 
        if(this.state.topScore < this.state.currentScore) {
          this.setState({
            topScore:this.state.currentScore,
           
          })
        }
        this.setState({
          currentScore:0,
          rightWrong: "Sorry, you clicked the wrong card. Start Over."
        })
}  

 if (this.state.currentScore === 12) {
  this.setState({ rightWrong: "You win!" });
}

     }

  componentDidMount = () => {
      // console.log(this.state)
  }

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div>
 
  <Nav 
  score= {this.state.currentScore}
  newTopScore = {this.state.topScore}
  showRightWrong = {this.state.rightWrong}>

  </Nav>

      <Title>
        <h5>Click on a country to increase your score.</h5>
        <h5>Don't click on the same country twice or you start over! </h5>
        <h5>Try to get a high score of 12 to win!</h5>
      </Title>

      
    <div class="cardContainer">
      <div class="row">
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
      
      
   

      </div>
    
    )}
}

export default Clicky;
