import React from 'react';
import { AiOutlineCaretLeft } from "react-icons/ai";
import { AiOutlineCaretRight } from "react-icons/ai";
import style from './styles/PokePage.module.css';

 function PokePage(props){

    const {oneLeftClick, oneRightClick, page, totalpage} = props

    return(
        <div>
            <div className={style.contenedor}>
                <div>
                    <button onClick={oneLeftClick} className={style.izq}><AiOutlineCaretLeft /></button>
                </div>
                
                <div className={style.one}>{page} de {totalpage}</div>
                <div>
                    <button onClick={oneRightClick} className={style.dere}><AiOutlineCaretRight/></button>
                </div>
               
            </div>
            
        </div>
    )
};

export default PokePage;