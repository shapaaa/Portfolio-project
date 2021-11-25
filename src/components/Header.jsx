import { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Container = styled.div`
position: relative;
display: flex;
justify-content: space-around;
border-bottom: 1px solid var(--color-stroke);
min-height:8rem;
align-items:center;
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
&::after{
    content: "";
    position: absolute;
    bottom:-10px;
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
const Title = styled.h1`
font-size: 2.8rem;
font-weight: bolder;
font-family: 'Open Sans';
color:black;
`
const TitleContainer = styled.div`
justify-self: baseline;
`
const List = styled.ul`
list-style: none;
font-size: 1.8rem;
transition: all .25s 0s ease-in;
display: flex;
justify-content:center;
@media only screen and (max-width:700px)
{
    position: absolute;
    z-index:2;
    padding:0;
    top:-1000px;
    width:100%;
    height:80vh;
    background-color: white;
    justify-content: flex-start;
    flex-direction: column;
${( props ) => props.animated && css`
top:65px;
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
                    <NavLink to='/'>
                        <Title>Shardul Pathak</Title>
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