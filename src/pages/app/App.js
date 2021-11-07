
import React from "react";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Quotes } from "../../components/quotes/Quotes";
import{ getQuote } from '../../services'
import JutsuSound from '../../sounds/jutso.mp3'

import narutoImage from "../../images/naruto.png"

const audio = new Audio (JutsuSound)

export const App = () =>{
  const isMounted = useRef(true)
  const [quoteState, setQuoteState] = useState({ quote: 'loading...', speaker: 'loading Speaker...' })

  const onUpdate = async () =>{
    const quote = await getQuote()

    if(isMounted.current){
      audio.play()
      setQuoteState(quote)
    } 
  }

  useEffect(() => {
    onUpdate() 
    return () => isMounted.current = false
  }, [])
  return(
    <Content>
      <Quotes 
        quote = {quoteState.quote}
        speaker = {quoteState.speaker}
        onUpdate = {onUpdate}
      />    
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
