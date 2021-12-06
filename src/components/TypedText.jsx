import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const Container = styled.div`
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
`;

const TextWrapper = styled.div`
padding: clamp(10px,4vw,40px);
`

const blink = keyframes`
50%{
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
${( { animate, cursorBlink } ) => animate && css`
&::after{
    content: "";
    width: 2px;
    height: 3rem;
    background: black;
    margin-bottom: -3px;
    margin-left: 4px;
    display: inline-block;
    ${cursorBlink && css`
    animation: ${blink} .6s 0s steps(1) infinite;
    `}
}
`}
`;

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

const TypedText = () => {
    const [index, setIndex] = useState( 0 );
    const [string, setString] = useState( '> ' );
    const [characters, setCharacters] = useState( textLines[0].split( "" ) )
    const [textIndex, setTextIndex] = useState( 0 );
    const [cursorBlink, setCursorBlink] = useState( false );

    useEffect( () => {
        const typedText = () => {
            if ( characters.length > index ) {
                setTimeout( () => {
                    setString( string + characters[index] )
                    setIndex( index + 1 )
                }, 60 )
            }
            else if ( textIndex < textLines.length - 1 ) {
                setCursorBlink( true )
                setTimeout( () => {
                    setTextIndex( textIndex + 1 )
                    setString( '> ' )
                    setCharacters( textLines[textIndex + 1].split( "" ) )
                    setCursorBlink( false )
                    setIndex( 0 )
                }, 1300 )
            }
            else {
                setCursorBlink( true )
                setTimeout( () => {
                    setTextIndex( textLines.length );
                }, 1300 )
            }
        }
        typedText()
    }, [index] )
    return (
        <Container>
            <TextWrapper>
                {
                    textLines.map( ( text, mapIndex ) => {
                        return <Text cursorBlink={cursorBlink} key={mapIndex} animate={textIndex === mapIndex} >{textIndex === mapIndex ? string : textIndex > mapIndex ? ( '> ' + text ) : ''}</Text>
                    } )
                }
            </TextWrapper>
        </Container>
    )
}
export default TypedText;