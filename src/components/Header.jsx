import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``
const NavContainer = styled.nav`
display: flex;
justify-content: space-around;
`
const NavLink = styled(Link)`
text-decoration: none;
color: black;
`
const Title = styled.h1`
font-size: 2.5rem;
`
const TitleContainer = styled.div`
`
const List = styled.ul`
list-style: none;
display: flex;
justify-content:space-evenly;
width: 20%;
font-size: 1.8rem;
`
const ListElement = styled.li``

const Header = () => {
    return (
        <Container>
            <NavContainer>
                <TitleContainer>
                    <NavLink to='/'>
                        <Title>Shardul.Pathak</Title>
                    </NavLink>
                </TitleContainer>
                <List>
                    <NavLink to='/about'><ListElement>About</ListElement></NavLink>
                    <NavLink to='/portfolio'><ListElement>Portfolio</ListElement></NavLink>
                    <NavLink to='/blogs'><ListElement>Blogs</ListElement></NavLink>
                    {/* <ListElement>Resume</ListElement> */ }
                </List>
            </NavContainer>
        </Container>
    )
}
export default Header;