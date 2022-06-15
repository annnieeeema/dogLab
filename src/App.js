import React, { useState } from 'react';
import Display from './components/Display';
import Button from './components/Button';
import './App.css';

function App() {
  const [dog, setDog] = useState({}); 

  const getDog = async () => {
    const response = await fetch(`https://dog.ceo/api/breeds/image/random`); 
    const data = await response.json(); 
    setDog(data); 
  }

  return (
    <div className="App">
      <h1>Random Dog Photo Generator</h1>
      <Button searchbutton={getDog}/>
      <Display dog={dog}/>
    </div>
  );
}

export default App;
