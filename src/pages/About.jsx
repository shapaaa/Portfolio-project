import styled from "styled-components";
const Container = styled.div`
margin:20px auto;
font-size: 2.2rem;
width: fit-content;
padding:20px;
`
const Title = styled.div`
font-family: 'Open Sans';
font-size: 4rem;
text-align:center;
`
const Text = styled.div`
font-family: 'Open Sans';
line-height: 2;
`
const AboutContainer = styled.div`
border:1px solid gray;
margin-top:20px;
border-radius: 4px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 55vh;
`
const TextWrapper = styled.div`
margin: 10px 30px 20px 30px;
`
const About = () => {
  return (
    <Container>
      <Title>Let Me</Title>
      <Title>Introduce</Title>
      <AboutContainer>
        <TextWrapper>
          <Text>
            Hi,I'm Shardul
          </Text>
          <Text>
            I'm a frontend developer from India
          </Text>
          <Text>
            I spend most of my time working/building sleek & responsive web apps
          </Text>
          <Text>
            Experienced in building with technologies like React,Node,Graphql & Postgres,etc
          </Text>
          <Text>
            Also I blog about some interesting technical concepts
          </Text>
          <Text>
            Other than the technical side
          </Text>
          <Text>
             I love playing & watching cricket 🏏
          </Text>
          <Text>
            I'm avid listener of podcasts 🎧 who loves getting insights from brilliant minds 
          </Text>
          <Text>
           Hmm...🤔 that's pretty much about me
          </Text>
        </TextWrapper>
      </AboutContainer>
    </Container>
  )
}
export default About;