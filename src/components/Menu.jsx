import styled, { css, keyframes } from "styled-components";

export const show = keyframes`
100%{
    opacity:1;
}
`
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
margin-bottom: 6px;
cursor: pointer;
@media only screen and (max-width:700px)
{
    opacity: 0;
    animation: ${show} .22s .8s 1 ease-out forwards;
} 
@media only screen and (min-width:701px)
{
    display: none;
} 
`
const MenuLine = styled.div`
border-bottom: 2.6px solid var(--color-text);
width:25px;
height: 6px;
transition: transform .3s 50ms ease-out,opacity .3s 50ms ease-out;
${( props ) =>
        props.animated && props.one && css`
       transform:scale3d(1,1,1) translate3d(-.8px,5.7px,0px) rotateZ(-45deg);
    `
    }
${( props ) =>
        props.animated && props.two && css`
       opacity:0;
    `
    } 
${( props ) =>
        props.animated && props.three && css`
       transform: scale3d(1,1,1) translate3d(.8px,-5.7px,0px) rotateZ(45deg);
    `
    } 
`
const Menu = ( { handleClick, animate } ) => {
    return (
        <Container onClick={handleClick}>
            <MenuLine animated={animate} one ></MenuLine>
            <MenuLine animated={animate} two ></MenuLine>
            <MenuLine animated={animate} three></MenuLine>
        </Container>
    )
}
export default Menu;