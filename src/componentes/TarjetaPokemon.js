import React from 'react';
import './styles/TarjetaPokemon.css';

function TarjetaPokemon(props){
    
    
    if(props.tipo==="electric"){
        var tipo ="tarjetaelectric";
        var barra ="barraelectric";
    }else{
        if(props.tipo==="fire"){
            tipo ="tarjetafire";
            barra ="barrafire";
        }else{
            if(props.tipo==="water"){
                tipo ="tarjetawater";
                barra ="barrawater";
            }else{
                if(props.tipo==="poison"){
                    tipo ="tarjetapoison";
                    barra ="barrapoison";
                }else{
                    if(props.tipo==="ground"){
                        tipo ="tarjetaground";
                        barra ="barraground"
                    }else{
                        if(props.tipo==="bug"){
                            tipo="tarjetabug";
                            barra="barrabug";
                        }else{
                            if(props.tipo==="normal"){
                                tipo="tarjetanormal";
                                barra="barranormal";
                            }else{
                                if(props.tipo==="grass"){
                                    tipo="tarjetagrass";
                                    barra="barragrass";
                                }else{
                                    if(props.tipo==="fairy"){
                                        tipo="tarjetafairy";
                                        barra="barrafairy";
                                    }else{
                                        if(props.tipo==="rock"){
                                            tipo="tarjetarock";
                                            barra="barrarock";
                                        }else{
                                            if(props.tipo==="fighting"){
                                                tipo="tarjetafighting";
                                                barra="barrafighting";
                                            }else{
                                                if(props.tipo==="psychic"){
                                                    tipo="tarjetapsychic";
                                                    barra="barrapsychic";
                                                }else{
                                                    if(props.tipo==="ghost"){
                                                        tipo="tarjetaghost";
                                                        barra="barraghost";
                                                    }else{
                                                        if(props.tipo==="ice"){
                                                            tipo="tarjetaice";
                                                            barra="barraice";
                                                        }else{
                                                            if(props.tipo==="dragon"){
                                                                tipo="tarjetadragon";
                                                                barra="barradragon";
                                                            }else{
                                                                if(props.tipo==="dark"){
                                                                    tipo="tarjetadark";
                                                                    barra="barradark";
                                                                }else{
                                                                    if(props.tipo==="steel"){
                                                                        tipo="tarjetasteel";
                                                                        barra="barrastreel";
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return(
        <div key={props.name} className={tipo}>
            <div className="tarjetadescription">
                <img className="pokemonimg" width="145" src={props.picture} alt={props.name}/>
                <p className="title">{props.name}</p>
                <div className="titledes">
                    <p>Peso:<span>{" "+props.peso}</span></p>
                    <p>Altura:<span>{" "+props.altura}</span></p>
                    <p>Tipo:<span>{" "+props.tipo}</span></p>
                </div>
                <div>
                    <div className="subtitledes">
                        <p>Hp:</p>
                        <span>{props.hp}</span>
                    </div>
                    <div className="subtitledes">
                        <p>Ataque:</p>
                        <span>{props.ataque}</span>
                    </div>
                    <div className="subtitledes">
                        <p>Defensa:</p>
                        <span>{props.defensa}</span>
                    </div>
                </div>
            </div>
            <div className={barra}></div>
                 
        </div>
    )
};

export default TarjetaPokemon;