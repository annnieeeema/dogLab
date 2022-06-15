import { useState } from 'react';
import DisplayDog from './components/DisplayDog';
import './App.css';

function App() {
  const API_URL = 'https://dog.ceo/api/breeds/image/random'

  const [dog, setDog] = useState(null)

  const getDog = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setDog(data.message)
  }



  return (
    <div className="App">
      <h1>Random Dog Generator</h1>
      <input id="button" type="button" value="Get Random Dog" onClick={getDog} /> <br />
      <DisplayDog dog={dog} />
    </div>
  );
}

export default App;