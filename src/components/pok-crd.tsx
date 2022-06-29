import React, {FunctionComponent} from "react";
import Pokemon from '../models/pock';
import './pok-card.css'

type Props = {
    pokemon: Pokemon
};

const PokemonCard: FunctionComponent<Props> = ({pokemon}) => {

    return(
        // <div>
        //     Ce composant est chargé d'afficher le pokémon : {pokemon.name}
        // </div>
        <div className="col s6 m4">
        <div className="card horizontal">
          <div className="card-image"> 
            <img src={pokemon.picture} alt={pokemon.name}/>
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>{pokemon.name}</p>
              <p><small>{pokemon.created.toString()}</small></p>
            </div>
          </div>
        </div> 
      </div>
    );
}

export default PokemonCard;