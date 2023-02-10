import React from "react";
import Menu from '../Menu/Menu'
import * as C from './Styles'
import Logo from '../../assets/Logo.png'

export default function Header (){

    return(
     <>
    <C.Header>
        <Menu/>
    </C.Header>
    <C.BodyContainer>
       <div>
        <img src={Logo} alt="logo2"/>
       <img src={Logo} alt="logo Alvobras"/>
       <p>Conheça nossos produtos</p>
       </div>
    
    </C.BodyContainer>
     </>

    );
}