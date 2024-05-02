import logo from '../logo.svg';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import Jokes from './Jokes';
import jokesData from './jokesData';
import cardData from './cardData';

/* console.log(cardData) */

function App() {

  const cardElements = cardData.map(data => {
    return (
            <Card 
              key = {data.id}
              data = {data}
              /* {...data}  we can use this es6 syntax instead of above one, and we need to change in the card.js file to props.data.img -> props.img */
            />
          )
  });

  return (
    <div className="App">
{/*         {jokeElement} */}
{/*       {colors} */}
      <Navbar />
      <Hero />
      <div className='cards-container'>
            {cardElements}
{/*           <CardElement /> */}
{/*         <Card 
          img = "person-1.png"
          rating = "5.0"
          reviewCount = {6}
          country = "USA"
          title = "Life Lessons with Katie Zafers"
          price = {136}
        />
        <Card 
          img = "person-2.png"
          rating = "5.0"
          reviewCount = {30}
          country = "USA"
          title = "Learn Wedding Photography"
          price = {125}
        />
        <Card 
          img = "bike.png"
          rating = "4.8"
          reviewCount = {2}
          country = "USA"
          title = "Group Mountain Biking"
          price = {50}
        />
                <Card 
          img = "person-1.png"
          rating = "5.0"
          reviewCount = {6}
          country = "USA"
          title = "Life Lessons with Katie Zafers"
          price = {136}
        />
        <Card 
          img = "person-2.png"
          rating = "5.0"
          reviewCount = {30}
          country = "USA"
          title = "Learn Wedding Photography"
          price = {125}
        />
        <Card 
          img = "bike.png"
          rating = "4.8"
          reviewCount = {2}
          country = "USA"
          title = "Group Mountain Biking"
          price = {50}
        /> */}
      </div>
{/*       <Jokes 
        Punchline = "I can't wait to see her face light up when she opens it"
        isPun = {true}
        upvotes = {10}
        downvotes = {2}
        comments = {[{author: "", body: "", title: ""}]}
      />

      <Jokes 
        Setup = "I got my daughter a fridge for her birhtday"
        Punchline = "I can't wait to see her face light up when she opens it"
        isPun = {false}
      />

      <Jokes 
        Setup = "How did the hacker escape the police?"
        Punchline = "He just ransomware"
        isPun = {true}
      />

      <Jokes 
        Setup = "Why don't pirates travel on mountain roads?"
        Punchline = "Scurvy"
        isPun = {true}
      />

      <Jokes 
        Setup = "Why do bees stay in the hive in the winter?"
        Punchline = "Swarm"
        isPun = {true}
      />

      <Jokes 
        Setup = "What's the best thing about Switzerland?"
        Punchline = "I don't know, but the flag is a big plus!"
        isPun = {false}
      /> */}
{/*       <Card 
        img = "../images/img.jpg"
        name = "Dark Forest"
        phone = "+94 766666666"
        email = "meow@email.com"
      />
      <Card 
        img = "../images/1.jpg"
        name = "Valley"
        phone = "+94 700000000"
        email = "valley@email.com"
      />
      <Card 
        img = "../images/2.jpg"
        name = "Parrot"
        phone = "+94 777777777"
        email = "parrot@email.com"
      />
      <Card 
        img = "../images/3.jpg"
        name = "Wall"
        phone = "+94 711111111"
        email = "wall@email.com"
      /> */}
    </div>
  );
}

export default App;


/* 

  const jokeElement = jokesData.map(joke => {
    return <Jokes Setup={joke.Setup}  Punchline={joke.Punchline}/>
  })
 */

/*   const colors = [<h3>Red</h3>, <h3>Orange</h3>, <h3>Yellow</h3>, <h3>Green</h3>, <h3>Blue</h3>, <h3>Indigo</h3>, <h3>Violet</h3>]; */
