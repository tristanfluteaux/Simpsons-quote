import QuoteCard from './components/QuoteCard';
import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
const [showSimpson, setShowSimpson] = useState(null);


const getSimpson = () => {
  axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then ((resp) => resp.data)
    .then ((data) => {
      setShowSimpson(data[0]);
    });
}

  return (
    <div className="App">
      <button type="button" onClick = {getSimpson}>Get a Simpsons Character</button>
      {showSimpson && <QuoteCard {...showSimpson}/>}

    </div>
  );
}

export default App;
