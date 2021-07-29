//PSUEDO CODE 
//Create a user input form on the page with a submit button so that the user can add content to the page 
//capture the user input from the text input - more specifically we want to get the user interaction with the page 
//that value has to go in a state 
//when the user presses the submit button the content they have included gets updated in the firebase 

// stretch goals 
//buttons where the user selects one of four inputs
//create state to hold pre written content
//on submit pre-written content is added to the firebase 
//jsx will print that content to the page

// other stretch goal 
// a “clear” button that allows user to delete their list item
//this button will be after each item the user has put in already
//create a function that is called by the button that will remove the item by getting the key of that item from firebase, pass that key to the function so that they function can find it and delete it 

import { useState, useEffect } from 'react';
import firebase from './firebase.js';
import './styles/App.scss'
import Examples from './Examples';
import Form from './Form'
import List from './List.js';

function App() {

  const [ manifestations, setManifestations] = useState([]);
  const [ userInput, setUserInput] = useState("");

  const handleUserSelectionToggle = (selection) => {

        const dbRef = firebase.database().ref()

        dbRef.push(selection)
    };

  // use state for firebase value listener 
  useEffect(() => {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (snapshot) => {
      const myData = snapshot.val();

      const newArray = [];

      for (let propertyName in myData) {

      const content = {
        key: propertyName,
        contentBlurb: myData[propertyName]
      }

      newArray.push(content);
    }

    setManifestations(newArray);
    })

  }, [])

  const handleChange = (event) => {
    setUserInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const dbRef = firebase.database().ref();
    
    dbRef.push(userInput);

    setUserInput("");
  }

  const handleDelete = (deleteMe) => {
    const dbRef = firebase.database().ref();

    dbRef.child(deleteMe).remove();
  }


  return (
    <div className="App">
      <div className="container wrapper">
        <header>
          <h1> The Manifest<span className="station">station</span></h1>
          <h2>all aboard the journey to your dreams</h2>
        </header>

        <section>

          <Examples handleUserSelectionToggle={handleUserSelectionToggle} />

          <p>OR</p>

          <Form handleChange={handleChange} handleSubmit={handleSubmit} userInput={userInput}/>

        </section>
        <List manifestations={manifestations} handleDelete={handleDelete}/>

      </div>
      <footer>
      <p>Created @ <a href="https://junocollege.com/">Juno College</a></p>
      </footer>
    </div>
  );
}

export default App;
