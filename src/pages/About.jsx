import styled from "styled-components";
const Container = styled.div``
const TypedText = styled.div`
  overflow: hidden;
  border-right: .15em solid orange;
  font-size: 1.6rem;
  width: 0;
`
const TyperContainer = styled.div`
display: inline-block;
`
const About = () => {
  return (
    <Container>
      <TyperContainer>
        <TypedText>Web Developer</TypedText>
      </TyperContainer>
    </Container>
  )
}
export default About;