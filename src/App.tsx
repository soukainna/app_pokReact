import React from 'react'
import { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import Mpok from './models/mock-pock'
import Pok from './models/pock'
import PokList from './pages/pok-list'
import PokDetail from './pages/pok-detail'
import pageNotFound from './pages/page-notfound'

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
  //  <PokList />
  <Router>
    <div>
      {/* la barre de la navigation */}
      <nav>
        <div className='nav-wrapper teal'></div>
        <Link to="/" className="brand-logo center">Pokédex</Link>
      </nav>
      <Switch>
        {/* systeme de gestion des routes de l'app */}
        <Route exact path="/" component={PokList} />
        <Route exact path="/pokemon" component={PokList} />
        <Route path="/pokemon/:id" component={PokDetail} />
        <Route component={pageNotFound} />
      </Switch>
    </div>
  </Router>
  )
 }
   
 export default App;
 