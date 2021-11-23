import { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Container = styled.div`
position: relative;
width:80vw;
margin:0 auto;
@media only screen and (min-width:701px)
{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
`
const NavContainer = styled.div`
height:10vh;
display: flex;
width: 100%;
justify-content: flex-start;
align-items: center;
position: relative;
background-color: white;
z-index:1000;
@media only screen and (max-width:700px)
{
    justify-content: space-around;
}
`
const NavLink = styled(Link)`
text-decoration: none;
color: black;
`
const Title = styled.h1`
font-size: 2.5rem;
font-family: var(--secondary-font);
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
    width:100vw;
    position: absolute;
    z-index:2;
    padding:0;
    top:-100px;
    height:20vh;
    flex-direction: column;
    background-color: white;
${(props)=>props.animated && css`
top:64px;
`}
} 
`
const ListElement = styled.li`
margin: 0 15px; 
@media only screen and (max-width:700px)
{
    margin:5px 0px;
}
&:hover
{
    color: var(--purp);
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
${(props)=>
    props.animated && props.one && css`
       transform:scale3d(1,1,1) translate3d(-.8px,5.7px,0px) rotateZ(-45deg);
    `
}
${(props)=>
    props.animated && props.two && css`
       opacity:0;
    `
} 
${(props)=>
    props.animated && props.three && css`
       transform: scale3d(1,1,1) translate3d(.8px,-5.7px,0px) rotateZ(45deg);
    `
} 
`
const Header = () => {
    const [animate,setAnimate] = useState(false);
    const handleClick = ()=>{
        setAnimate(!animate)
    }
    return (
        <Container>
            <NavContainer>
                <TitleContainer>
                    <NavLink to='/'>
                        <Title>Shardul.Pathak</Title>
                    </NavLink>
                </TitleContainer>
                <Menu onClick={handleClick}>
                    <MenuLine animated={animate} one ></MenuLine>
                    <MenuLine animated={animate} two ></MenuLine>
                    <MenuLine animated={animate} three></MenuLine>
                </Menu>
            </NavContainer>
                <List animated={animate}>
                    <NavLink to='/about'><ListElement>About</ListElement></NavLink>
                    <NavLink to='/portfolio'><ListElement>Portfolio</ListElement></NavLink>
                    <NavLink to='/blogs'><ListElement>Blogs</ListElement></NavLink>
                </List>
        </Container>
    )
}
export default Header;