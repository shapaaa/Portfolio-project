import styled, { keyframes } from "styled-components";
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
const fadeinup = keyframes`
100%{
  transform: translateY(0);
  opacity: 1;
}
`
export const Title = styled.div`
font-size:clamp(24px,3vw,28px);
text-align:center;
line-height: 1.5;
transform: translateY(10%);
opacity: 0;
animation: ${fadeinup} .8s 0ms ease-out forwards;
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