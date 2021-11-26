import { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
const lefttoright = keyframes`
100%{
width:100%;
}
`

const Container = styled.div`
position: relative;
display: flex;
justify-content: space-around;
height:8rem;
align-items:center;
padding-top:10px;
&::after{
    content: "";
    position: absolute;
    bottom:-10px;
    left:0;
    width:0;
    background-color:var(--color-stroke);
    height:2px;
    transition: width .2s ease-out;
    animation: ${lefttoright} .8s 10ms forwards ease;
}
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
font-weight: 400px;
color:var(--gray);
width:fit-content;
display: block;
position: relative;
font-size: 1.8rem;
&::after{
    content: "";
    position: absolute;
    bottom:-10px;
    ${({title})=> title && css`
    bottom:-2px;
    ` };
    left:0;
    width:0;
    background-color:black;
    height:2px;
    transition: width .2s ease-out;
}
&:hover{
    color:black;
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
font-size: 3rem;
margin: 0;
font-family: 'Freehand','Open Sans',sans-serif;
color:black;
opacity: 0;
animation: ${show} .22s .8s 1 ease-out forwards;
`
const TitleContainer = styled.div`
justify-self: baseline;
`
const List = styled.ul`
list-style: none;
font-size: 2rem;
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
    position: absolute;
    z-index:2;
    padding:0;
    margin: 0;
    top:-1000px;
    width:100%;
    height: calc(100vh - 8rem);
    background-color: white;
    justify-content: flex-start;
    flex-direction: column;
    ${( props ) => props.animated && css`
    top:9rem;
    `}
} 
`
const ListElement = styled.li`
margin: 0 15px; 
padding: 5px 0;

@media only screen and (max-width:700px)
{
    margin:0;
    padding: 20px 0px 20px 20px ;
    display:block;
    border-bottom: 1px solid var(--color-stroke);
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
border-bottom: 2px solid black;
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
                        <Title>ShardulPathak</Title>
                    </NavLink>
                </TitleContainer>
                <Menu onClick={handleClick}>
                    <MenuLine animated={animate} one ></MenuLine>
                    <MenuLine animated={animate} two ></MenuLine>
                    <MenuLine animated={animate} three></MenuLine>
                </Menu>
            </NavContainer>
            <List animated={animate}>
                <ListElement>
                    <NavLink to='/about'>About</NavLink>
                </ListElement>
                <ListElement>
                    <NavLink to='/work'>Work</NavLink>
                </ListElement>
                <ListElement>
                    <NavLink to='/blogs'>Blogs</NavLink>
                </ListElement>
            </List>
        </Container>
    )
}
export default Header;