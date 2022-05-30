import React from 'react';
import style from './styles/TarjetaPokemon.module.css';

function TarjetaPokemon(props){
    return(
        <div key={props.name} className={style.tarjeta}>
             <img src={props.picture} alt={props.name}/>
            <p>{props.name}</p>    
        </div>
    )
};

export default TarjetaPokemon;