import React from "react";
import style from "./styles/NavPokemon.module.css";

function NavPokemon(){
    return(
        <div>
            <nav className={style}>
                <h1 className={style}>Pokemon</h1>
            </nav>
        </div>
    )
};

export default NavPokemon;