import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [pokemon, setPokemon] = useState([]);

  const handleClick = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=1050")
      .then(response => response.json())
      .then(response => setPokemon(response.results))
      .catch(err => console.log(err));
  }

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-3 mx-auto my-4">
          <button onClick={handleClick} className="btn btn-secondary btn-outline-dark font-weight-bold text-warning">Fetch Pokemon</button>
              {
                pokemon.map((pokemon,i) => {
                  return <ul key={i}>
                    <li className="font-weight-bold">
                      {pokemon.name}
                    </li>
                  </ul>
                })
              }
        </div>
      </div>
    </div>
  );
}

export default App;