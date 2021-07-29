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
        console.log(selection)

        const dbRef = firebase.database().ref()

        dbRef.push(selection)
    };

  // use state for firebase value listener 
  useEffect(() => {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (snapshot) => {
      const myData = snapshot.val();
      console.log(myData)

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
    </div>
  );
}

export default App;
