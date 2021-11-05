
import React from "react";
import styled from "styled-components";
import { Quotes } from "../../components/quotes/Quotes";

import narutoImage from "../../images/naruto.png"

export const App = () =>{
  return(
    <Content>
      <Quotes quote={'ok'} speaker={'Speaker'}/>    
      <NarutoImg src={narutoImage} alt="Naruto with kunai"/>
    </Content>
    
  )
}


const Content = styled.div`
height: 100vh;
padding: 0 50px;
display: flex;
justify-content: center;
align-items: center;
`

const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`
