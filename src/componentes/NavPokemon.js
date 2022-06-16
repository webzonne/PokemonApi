import React, { useEffect, useState } from "react";
import style from "./styles/NavPokemon.module.css";
import logo from '../img/logo-pokemon.png';
import menu from '../img/Menu.png';
import logosearch from '../img/logo-search.png';
import {ObtenerSugerencia} from "./ObtenerPokemon";
import {ObtenerImgSugerencia} from "./ObtenerPokemon";


function NavPokemon(props){
    const [sugerencia,setsugerencia]=useState();
    const [show,setshow]=useState(false);
    //const ocultar=useRef(null);
    // TRAER SUGERENCIA
    async function traersugerencia(){
        const dato=await ObtenerSugerencia();
        const promises = dato.results.map(async(u)=>ObtenerImgSugerencia(u.url))
        const resultado = await Promise.all(promises);
        setsugerencia(resultado);
        setshow(true);
    }
    
    useEffect(()=>{
        traersugerencia();
    },[])
    //SELECCIONANDO SUGERENCIA
    const captS = (s)=>{
        props.val(s);
        //ocultar.current.style.display="none";
    }
    //console.log(sugerencia);
    //FILTRADO
        let filtrado=[];
        if(props.prueba){
        filtrado=sugerencia.filter((f)=>f.name.toLowerCase().includes(props.prueba.toLocaleLowerCase()));
        }
        //console.log(show);
    return(
        <div>
            <nav className={style}>
                {/* {LOGO} */}
                <div className={style.divlogo}>
                <img  width="200" height="auto" src={logo} alt="logo"/>
                </div>
                
                <div className={style.divsearch}>
                    {/* {BARRA DE BUSQUEDA} */}
                    <div className={style.divform}>
                        <form>
                            <div className={style.divinput}>
                            {sugerencia? <div>
                            <input onFocus={()=>setshow(true)} onBlur={()=>setTimeout(()=>{setshow(false)},1000)} value={props.prueba} onChange={props.cambio} placeholder="Buscar.." type="text"/>
                                <button onClick={props.click} type="submit" className={style.logosearch}>
                                    <img  src={logosearch} alt="logo-search" />
                                </button>
                            </div>:<p>cargando pokemon....</p>}
                                {/*SUGERENCIAS */ }
                                {show ? <div  className={style.sugerencia}>
                                    <table className={`table ${style.tabla}`}>
                                            {filtrado.map((s)=>{
                                                return(
                                                    <tbody key={s.name}>
                                                    <tr onClick={()=>captS(s.name)} >
                                                        <td>{s.name}</td>
                                                        <td><img src={s.sprites.front_default} alt={s.name}/></td>
                                                    </tr>
                                                    </tbody>
                                                )})}
                                    </table>
                                </div>:null}
                                
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