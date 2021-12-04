import {  useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";


const Container = styled.div`
margin:20px auto 0 auto;
height: max-content;
@media only screen  and (max-width:700px){
  width:95vw;
}
@media only screen  and (max-width:1000px){
  width:90vw;
}
width: 80vw;
`
const Title = styled.div`
font-family: 'Open Sans';
font-size:clamp(24px,3vw,28px);
text-align:center;
`
const AboutContainer = styled.div`
margin:40px 0;
border-radius: 4px;
display: flex;
align-items: flex-start;
justify-content: flex-start;
width: 100%;
height: 900px;
@media only screen  and (max-width:400px){
height:950px;
}
box-shadow: 0 0 5px 1px #a2a2a5;
`
const TextWrapper = styled.div`
padding: clamp(10px,4vw,40px);
`
const blink = keyframes`
40%{
    opacity:0;
  }
`
const Text = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@500&display=swap');
font-family: 'Inconsolata', monospace;
font-size: 22px;
line-height: 4rem;
padding:5px 0;
@media only screen  and (min-width:451px){
line-height: 4rem;
}
${( { cursor,cursorBlink } ) => cursor && css`
&::after{
  content: "";
  width: 2.2px;
  height: 3rem;
  background: black;
  margin-bottom: -3px;
  margin-left: 4px;
  display: inline-block;
  ${ cursorBlink && css`
  animation: ${blink} .6s 0s steps(1) infinite;
  `}
}
`
}
${( { animated } ) => animated && css`
&::before{
  content: "> ";
}`}
`;
const About = () => {

  const textLines = [
    "Hi,I'm Shardul",
    "I'm a frontend developer from India",
    "I spend most of my time building on web",
    "Experienced in building web apps using React, Node, Graphql and Postgres",
    "Also I blog about some interesting technical concepts",
    "Other than the technical side",
    "I love playing and watching cricket 🏏",
    "I'm avid listener of podcasts 🎧",
    "Hmm...🤔 that's pretty much about me"
  ]
  const [index, setIndex] = useState( 0 );
  const [string, setString] = useState( '' );
  const [cursorBlink,setCursorBlink] = useState(false);
  const [arr, setArr] = useState( [] )
  const [characters, setCharacters] = useState( textLines[0].split( "" ) )
  const [textIndex, setTextIndex] = useState( 0 );
  
  useEffect( () => {
    const timeout = (stateChange,time) => {
       setTimeout(stateChange,time);
    };
    const typedText = async () => {
      if ( characters.length > index ) {
        if(index==(characters.length-1))
        {
          setCursorBlink(true);
        }
          timeout(() => {
          setString( string + characters[index] )
          setIndex( index + 1 )
        }, 40)
      }
      else if ( textIndex < textLines.length - 1 ) {
          timeout(()=>{
          setTextIndex( textIndex + 1 )
          setArr( [...arr, string] )
          setString( '' )
          setCharacters( textLines[textIndex + 1].split( "" ) )
          setCursorBlink(false);
          setIndex( 0 )
        }, 1000)
      }
      else {
        setTextIndex( -1 );
        setArr( [...arr, string] )
      }
    }
    
    typedText()
  }, [index] )



  return (
    <Container>
      <Title>About Me</Title>
      <AboutContainer>
        <TextWrapper>
        {
        textLines.map( ( text, mapIndex ) => {
          return <Text cursorBlink={textIndex === mapIndex && cursorBlink}  animated={textIndex=== -1 || textIndex >= mapIndex } key={mapIndex} cursor={textIndex === mapIndex} >{textIndex === mapIndex ? string : arr[mapIndex]}</Text>
        } )
      }
        </TextWrapper>
      </AboutContainer>
    </Container>
  )
}
export default  About;