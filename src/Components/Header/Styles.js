import styled from 'styled-components';
import Fundo from '../../assets/Fundo.jpg'


export const Header = styled.header`
    background-color: #006292; 
    display:flex;
    align-items:center;

      
    div{
      width: 100%;
      margin: 0 auto;
      padding: 20px 15px;
      }
`;

  export const BodyContainer = styled.body`
    background-size:cover;
      background-image: url(${Fundo});
      height:600px;
      width: 100%;
      margin:0 auto;
      align-items:center;
      justify-content:center;
      display: flex;

      div{
        background-color:white;
        border-radius:150px 50px 150px 50px;
      }

      img{
        width:auto;
        height:380px;
        padding:20px;
        margin: 50px;
      }

      p{
        text-align:center;
        padding:10px;
      }
`;