import React from 'react'
import { useState, useEffect } from 'react';
import Mpok from './models/mock-pock'
import Pok from './models/pock'
import PokList from './pages/pok-list'


const App: React.FC = () => {
  //const [name, setName] = useState('React');
  //const [pokemon] = useState<Pok[]>(Mpok);
  const [pokemon, setPokemon] = useState<Pok[]>([]);
  
  useEffect(() => {
   setPokemon(Mpok);
  }, []);
  
  return (
//    <div>
//       {/* <h1>Pokédex</h1>
//       <p>il y a {pokemon.length} pokemon dans le Pokedex.</p>
//       <ul>
//       {
//          pokemon.map((Mpok) => (
//             <li key={Mpok.name}>{Mpok.name}</li>
//          )
//          )
//       }
//       </ul> */}
//       <h1 className='center'>Pokédex</h1>
//       <div className='container'>
//          <div className='row'>
//             {pokemon.map(({id, name, picture, created}) =>(
//                <div className='col s6 m4' key={id}>
//                   <div className='card horisontal'>
//                      <div className='card-image'>
//                         <img src={picture} alt={name}/>
//                      </div>
//                      <div className='card-stacked'>
//                         <div className='card-content'>
//                            <p>{name}</p>
//                            <p><small>{created.toString()}</small></p>
//                         </div>
//                      </div>
//                   </div>
//                </div>
//             )
//             )

//             }
//          </div>
//       </div>
      
//    </div>
   <PokList />
  )
 }
   
 export default App;
 