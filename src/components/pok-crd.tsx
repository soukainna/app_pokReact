import React, {FunctionComponent, useState} from "react";
import Pokemon from '../models/pock';
import './pok-card.css'

type Props = {
    pokemon: Pokemon,
    borderColor?: string
};

const PokemonCard: FunctionComponent<Props> = ({pokemon, borderColor='#009688'}) => {

    const [color, setColor] = useState<string>();

    const showBorder = () => {
      setColor(borderColor);
    }

    const hideBorder = () => {
      setColor('#f5f5f5');
    }
    return(
        // <div>
        //     Ce composant est chargé d'afficher le pokémon : {pokemon.name}
        // </div>
        <div className="col s6 m4" onMouseEnter={showBorder} onMouseLeave={hideBorder}>
        <div className="card horizontal" style={{ borderColor: color }}>
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