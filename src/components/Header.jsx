import styled from "styled-components";

const Container = styled.div``
const NavContainer = styled.nav`
display: flex;
justify-content: space-around;
`
const Link = styled.a`
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
                    <Link href='/'>
                        <Title>Shardul.Pathak</Title>
                    </Link>
                </TitleContainer>
                <List>
                    <ListElement>About</ListElement>
                    <ListElement>Portfolio</ListElement>
                    <ListElement>Blogs</ListElement>
                    {/* <ListElement>Resume</ListElement> */ }
                </List>
            </NavContainer>
        </Container>
    )
}
export default Header;