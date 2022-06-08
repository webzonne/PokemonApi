import React from "react";
import style from "./styles/NavPokemon.module.css";
import logo from '../img/logo-pokemon.png';
import menu from '../img/Menu.png';
import logosearch from '../img/logo-search.png';

function NavPokemon(props){
    return(
        <div>
            <nav className={style}>
                {/* {LOGO} */}
                <div className={style.divlogo}>
                <img  width="200" height="auto" src={logo} alt="logo"/>
                </div>
                {/* {BARRA DE BUSQUEDA} */}
                <div className={style.divsearch}>
                    <div className={style.divform}>
                        <form>
                            <div className={style.divinput}>
                            <input onChange={props.cambio} placeholder="Buscar.." type="text"/>
                            <button onClick={props.click} type="submit" className={style.logosearch}>
                                <img  src={logosearch} alt="logo-search" />
                            </button>
                            
                            </div>
                        </form>
                    </div>
                    <div className={style.logomenu}>
                        <img src={menu} alt="manu"/>
                    </div>
                    
                </div>
            </nav>
        </div>
    )
};

export default NavPokemon;