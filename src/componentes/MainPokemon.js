import React, { useRef } from 'react';
import NavPokemon from './NavPokemon';
import vitrebel from '../img/Vitrebel.png';
import { useState} from 'react';
import style from './styles/MainPokemon.module.css';
import { ObtenerPokemon } from './ObtenerPokemon';
import TarjetaPokemon from './TarjetaPokemon';
//import BuscarPokemon from './componentes/BuscarPokemon';

function MainPokemon() {
  const [chance, setchance] = useState();
  const [data, setdata] = useState();
  let fvitrebel=useRef();
  function showchance(e){
    setchance(e.target.value.toLowerCase());
  }
  async function captura(e){
    e.preventDefault();
    fvitrebel.current.style.display="none";
    const datos = await ObtenerPokemon(chance);
    setdata(datos);
  }

  return(
    <div className={style.fondomain}>
        <NavPokemon
      cambio={showchance}
      click={captura}
      />
       <div className={style.contentmain}>
            <div className={style.text}>
                <h1>TODOS LOS POKEMONES</h1>
                <p>favoritos los consigues aqui en este portal a tu disposicion</p>
                <div className={style.divbutton}>
                    
                <a href="/PokemonApi/pokemones"><button>Pokemones</button></a>
                  
                </div>
                
            </div>
            <div className={style.image}>
                <img src={vitrebel} ref={fvitrebel} alt="Pokemon-vitrebel"/>
                { data ? 
                <TarjetaPokemon
                key={data.name}
                name={data.name}
                peso={data.weight}
                altura={data.height}
                tipo={data.types[0].type.name}
                picture={data.sprites.other.home.front_default}
                hp={data.stats[0].base_stat}
                ataque={data.stats[1].base_stat}
                defensa={data.stats[2].base_stat}

                />: null}
            </div>
            <div>   
            </div>
        </div>
    </div>
  )

}

export default MainPokemon;