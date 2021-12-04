import { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

const Container = styled.div`
position: relative;
display: flex;
justify-content: space-around;
height:9rem;
@media only screen and (max-width:700px){
height:8rem;
}
align-items:center;
border-bottom: 1px solid var(--color-stroke);
`
const NavContainer = styled.div`
position: relative;
background-color: white;
z-index:1000;
@media only screen and (max-width:700px)
{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
`
const NavLink = styled( Link )`
text-decoration: none;
font-weight: 500px;
color:black;
width:fit-content;
display: block;
position: relative;
&::after{
    content: "";
    position: absolute;
    bottom:-10px;
    left:0;
    width:0;
    background-color:black ;
    ${({title})=> title && css`
    background-color:#4433FF;
    ` };
    height:2px;
    transition: width .2s ease-out,font-weight .2s ease-out;
}
&:hover::after{
    width:100%;
}
`
const show = keyframes`
100%{
    opacity:1;
}
`
const Title = styled.h1`
font-size: clamp(24px,3vw,28px);
margin: 0;
opacity: 0;
color:blue;
font-family:wotfard;
animation: ${show} .22s .8s 1 ease-out forwards;
`
const TitleContainer = styled.div`
justify-self: baseline;
`
const List = styled.ul`
list-style: none;
font-size:clamp(18px,2vw,20px);
font-weight: 500;
transition: all .25s 0s ease-in;
display: flex;
justify-content:center;
@media only screen and (min-width:701px)
{
    opacity: 0;
    animation: ${show} .22s .82s 1 ease-out forwards;
}
@media only screen and (max-width:700px)
{
    font-size:20px;
    position: absolute;
    top:8rem;
    left: 0;
    z-index:2;
    padding:0;
    margin:0;
    width:100%;
    justify-content:  flex-start;
    flex-direction: column;
    opacity: 0;
    transition: opacity 500ms ease 0s ;
    ${( props ) => props.animated && css`
     position: absolute;
     opacity: 1;
     height: 1100px;
     background: hsla(0deg, 0%, 100%, 0.85);
`}
} 
`
const ListElement = styled.li`
margin: 0 15px; 
padding: 5px 0;
@media only screen and (max-width:700px)
{
    transform:translate(-100px,50px);
    padding: 10px 25px;
    margin: 5px 10px;
${( props ) => props.animated && props.about && css`
transform:translate(0,50px);
`}
${( props ) =>  props.about && css`
transition: transform .45s 0s ease-out;
`}
${( props ) => props.animated && props.work && css`
transform:translate(0,50px);
`}
${( props ) =>  props.work && css`
transition: transform .45s .2s ease-out; 
`}
${( props ) => props.animated && props.blogs && css`
transform:translate(0,50px);
`}
${( props ) =>  props.blogs && css`
transition: transform .45s .5s ease-out; 
`}
}

`
const Menu = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
margin-bottom: 6px;
cursor: pointer;
@media only screen and (max-width:700px)
{
    opacity: 0;
    animation: ${show} .22s .82s 1 ease-out forwards;
} 
@media only screen and (min-width:701px)
{
    display: none;
} 
`
const MenuLine = styled.div`
border-bottom: 2.6px solid black;
width:25px;
height: 6px;
transition: transform .3s 0s ease-out,opacity .3s 0s ease-out;
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
const Header = () => {
    const [animate, setAnimate] = useState( false );
    const handleClick = () => {
        setAnimate( !animate )
    }
    return (
        <Container>
            <NavContainer>
                <TitleContainer>
                    <NavLink title to='/'>
                        <Title>SHARDUL PATHAK</Title>
                    </NavLink>
                </TitleContainer>
                <Menu onClick={handleClick}>
                    <MenuLine animated={animate} one ></MenuLine>
                    <MenuLine animated={animate} two ></MenuLine>
                    <MenuLine animated={animate} three></MenuLine>
                </Menu>
            </NavContainer>
            <List animated={animate} >
                <ListElement animated={animate} about>
                    <NavLink to='/about'>About</NavLink>
                </ListElement>
                <ListElement animated={animate} work>
                    <NavLink to='/work'>Work</NavLink>
                </ListElement>
                <ListElement animated={animate} blogs> 
                    <NavLink to='/blogs'>Blogs</NavLink>
                </ListElement>
            </List>
        </Container>
    )
}
export default Header;