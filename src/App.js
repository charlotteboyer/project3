import { useState, useEffect } from 'react';
import firebase from './firebase';
import './App.css';
import Examples from './Examples';

function App() {

  const [ manifestations, setManifestations] = useState([]);
  const [ userInput, setUserInput] = useState("");

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
      <h1> The Manifestor </h1>
      <h2>a journal for you affirmations</h2>
      <p>if you can dream it you can do it</p>

      <form action=""></form>

      <form action="submit" onSubmit={handleSubmit}>
        <label htmlFor="usersManifestation">add your own manifestation here</label>
        <input type="text" 
        onChange={handleChange}
      //controlled input react updates the input 
        value={userInput}
        />
        <button>manifest!</button>
      </form>

      <ul>
        {
          manifestations.map((manifestObj) => {
            return (
              <li key={manifestObj.key}>
                <p>{manifestObj.contentBlurb} <span><button onClick={() => handleDelete(manifestObj.key)}>X</button></span></p>
              </li>

            )
          }) 
        }
        <li></li>
      </ul>

      <Examples />
      
    </div>
  );
}

export default App;
