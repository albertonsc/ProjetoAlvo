import React from "react";
import * as C from './Styles'

export default function Header (){
    return(
        <C.HeaderContainer>
        <section>
             <ul>
                 <li>
                     <a>Home</a>
                 </li>
                 <li>
                     <a>Produtos</a>
                 </li>
                 <li>
                     <a>Sobre Nós</a>
                 </li>
                 <li>
                     <a>Contato</a>
                 </li>
             </ul>
        </section>
    </C.HeaderContainer>
    );
}