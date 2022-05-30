import React, {useState} from "react";
import style from './styles/BuscarPokemon.module.css';
import {ObtenerPokemon} from "./ObtenerPokemon";
import TarjetaPokemon from "./TarjetaPokemon";



function BuscarPokemon(){
    const [buscar, setbsucar]= useState(null);
    const [pokemon, setpokemon] =useState();

    function DetectorBuscar(e){
        setbsucar(e.target.value.toLowerCase());
    }

    const ClickBuscar = async (e) =>{
        const data = await ObtenerPokemon(buscar);
        setpokemon(data);
    }

    return(
        <div>
            <div className={style.entrada}>
            <input onChange={DetectorBuscar} type="text" className="form-control" placeholder="Buscar pokemon" />
            </div>
            <div className={style.entrada}>
                <button onClick={ClickBuscar} className="btn btn-danger">Buscar</button>
            </div>
           { pokemon ? 
           <TarjetaPokemon
           key={pokemon.name}
           name={pokemon.name}
           picture={pokemon.sprites.front_default}
           />
            :null}
        </div>
    );
};

export default BuscarPokemon;