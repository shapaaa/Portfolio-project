import styled from "styled-components";
import TypedText from "../components/TypedText";


const Container = styled.div`
margin:20px auto 0 auto;
height: max-content;
@media only screen  and (max-width:700px){
  width:95vw;
}
@media only screen  and (max-width:1000px){
  width:90vw;
}
width: 80vw;
`

const Title = styled.div`
font-family: 'Open Sans';
font-size:clamp(24px,3vw,28px);
text-align:center;
`

const About = () => {

  return (
    <Container>
      <Title>About Me</Title>
      <TypedText />
    </Container>
  )

}
export default About;