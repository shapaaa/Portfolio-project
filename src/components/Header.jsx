import { useState } from "react";
import styled, { keyframes } from "styled-components";
import ListComponent, { NavLink } from "./ListComponent";
import Menu from "./Menu";

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
export const show = keyframes`
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
const Header = () => {
    const [animate, setAnimate] = useState( false );
    const handleClick = () => {
        setAnimate( !animate )
    }
    return (
        <>
            <Container>
                <NavContainer>
                    <TitleContainer>
                        <NavLink title to='/'>
                            <Title>SHARDUL PATHAK</Title>
                        </NavLink>
                    </TitleContainer>
                    <Menu handleClick={handleClick} animate={animate} />
                </NavContainer>
                <ListComponent largescreen={true} animate={animate} />
            </Container>
            <ListComponent smallscreen={true} animate={animate} />
        </>
    )
}
export default Header;