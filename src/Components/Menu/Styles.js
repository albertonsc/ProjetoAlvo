import styled from 'styled-components';


export const HeaderContainer = styled.section`
    margin:auto;
    
    ul{
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    li{
            margin-left: 20px;
            margin-right: 20px;
            padding:15px;

            a{
                text-decoration: none;
                color: white;
                font-size: 18px;
                cursor: pointer;
                transition-duration: 0.5s;

                &:hover{
                    color: yellow;
                    transition-duration: 0.2s;
                }
            }
        }
`;