import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pock';
import POKEMONS from '../models/mock-pock';
import PokemonCard from '../components/pok-crd';
  
const PokemonList: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  
  useEffect(() => {
    setPokemons(POKEMONS);
  }, []);
  
  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container"> 
        <div className="row"> 
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        ))}
        </div>
      </div>
    </div> 
  );
}
  
export default PokemonList;

//PokemonCard est une props 