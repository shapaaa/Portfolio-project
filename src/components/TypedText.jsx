import { useEffect, useReducer, useRef } from "react";
import styled, { css, keyframes } from "styled-components";

const Container = styled.div`
margin:40px 0;
border-radius: 4px;
display: flex;
align-items: flex-start;
justify-content: flex-start;
width: 100%;
min-height: 100vh;
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
font-size: clamp(20px,1.8vw,22px);
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
    background: var(--color-text);
    margin-bottom: -3px;
    margin-left: 4px;
    display: inline-block;
    ${cursorBlink && css`
    animation: ${blink} .6s 0s steps(1) infinite;
    `}
}
`}
`;

const TypedText = () => {
    const textLines = [
        "Hi,I'm Shardul",
        "I'm a Software Professional from India",
        "I have done my bachelors from PICT pune",
        "I spend most of my time building things on web",
        "Experienced in building web apps using React, Node, Graphql and Postgres",
        "Also I blog about some interesting technical concepts",
        "If I’m not doing anything coding-related",
        "I love playing and watching cricket 🏏",
        "I enjoy listening music & podcasts 🎧",
        "Hmm...🤔 that's pretty much about me"
    ]
    const initialState = {
        string: '> ',
        index: 0,
        characters: textLines[0].split( "" ),
        textIndex: 0,
        cursorBlink: false
    }

    const reducer = ( state, action ) => {
        const { string, index, characters, textIndex, cursorBlink } = state
        if ( action.type === 'append' ) {
            return { ...state, ...{ string: string + characters[index] } }
        }
        if ( action.type === 'increment' ) {
            return { ...state, ...{ index: index + 1 } }
        }
        if ( action.type === 'blink' ) {
            return { ...state, ...{ cursorBlink: !cursorBlink } }
        }
        if ( action.type === 'newline' ) {
            return { ...initialState, ...{ textIndex: textIndex + 1, characters: textLines[textIndex + 1].split( "" ) } }
        }
        if ( action.type === 'hide' ) {
            return { ...state, ...{ textIndex: textIndex + 1 } }
        }
    }

    const [state, dispatch] = useReducer( reducer, initialState )
    const { string, textIndex, characters, index, cursorBlink } = state;
    const indexRef = useRef( 0 )
    const timerRef = useRef( null );
    useEffect( () => {
        const typedText = () => {
            if ( characters.length > index ) {
                if ( index === 0 ) {
                    clearTimeout( timerRef.current )
                }
                timerRef.current = setTimeout( () => {
                    dispatch( { type: 'append' } )
                    dispatch( { type: 'increment' } )
                }, 40 )
            }
            else if ( indexRef.current < textLines.length - 1 ) {
                dispatch( { type: 'blink' } )
                clearTimeout( timerRef.current )
                timerRef.current = setTimeout( () => {
                    indexRef.current++;
                    dispatch( { type: 'newline' } )
                }, 1300 )
            }
            else {
                dispatch( { type: 'blink' } )
                clearTimeout( timerRef.current )
                timerRef.current = setTimeout( () => {
                    dispatch( { type: 'hide' } )
                }, 1300 )
            }
        }
        typedText()
        return () => clearTimeout( timerRef.current )
    }, [index, characters.length, textLines.length] )
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