import React, { useState, useEffect } from "react";
import style from './styles/Galery.module.css';
import { EnlacePokemon, ObtenerPokemones } from "./ObtenerPokemon";
import PokePage from './PokePage';
import TarjetaPokemon from "./TarjetaPokemon";
import logo from '../img/logo-pokemon.png';

function GaleryPokemon(){

    const [pokemones, setpokemones] = useState();
    const [page, setpage] = useState(0);
    const [total, settotal] = useState(0);
    const [loading, setloading] = useState(true);
   
    

    useEffect(()=>{
        const BuscarPokemones = async ()=>{
            try {
                const data= await ObtenerPokemones(25, 25 * page);
                const promises = data.results.map(async(p)=>{
                    return await EnlacePokemon(p.url);
                })
                console.log(promises);
                const results = await Promise.all(promises);
                setpokemones(results);
                setloading(false);
                settotal(Math.ceil(data.count/25));
                console.log(data.count);
            }catch(err){
    
            }
        }
        BuscarPokemones();
    },[page])

    const lastPage = ()=>{
        const nextPage = Math.max(page - 1, 0);
        setpage(nextPage);
    }

    const nextPage = ()=>{
        const nextPage = Math.min(page + 1 , total);
        setpage(nextPage);
    }

    return(
        <div>
            <div className={style.content}>
                <div className={style.logodiv}>
                    <a href="/PokemonApi"><img  width="200" height="auto" src={logo} alt="logo"/></a>
                </div>
                
                <h1 className={style}>Galeria</h1>

                <PokePage
                page={page +1}
                totalpage={total}
                oneLeftClick={lastPage}
                oneRightClick={nextPage}
                />

                {loading ?
                (<div className="text-center"><div className="spinner-border text-primary" role="status">
                <span className="visually-hidden"></span>
             </div></div>):

                (<div className={style.contenedor}>
                        {pokemones.map((e)=>{
                                return(
                                // {<div key={e.name} className={style.galery}>
                                //     <img src={e.sprites.front_default} alt={e.name} />
                                //     <p>{e.name}</p>
                                // </div> }
                                <TarjetaPokemon
                                key={e.name}
                                name={e.name}
                                peso={e.weight}
                                altura={e.height}
                                tipo={e.types[0].type.name}
                                picture={e.sprites.other.home.front_default}
                                hp={e.stats[0].base_stat}
                                ataque={e.stats[1].base_stat}
                                defensa={e.stats[2].base_stat}
                                />
                            )
                            
                        })}
                </div>)}
            </div>
        </div>
       
        
    )
};

export default GaleryPokemon;