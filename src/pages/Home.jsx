import styled, { keyframes } from "styled-components";
import Github from '../assets/icons/github'
import Twitter from '../assets/icons/twitter'
import Linkedin from '../assets/icons/linkedin'
import Dev from '../assets/icons/dev'
import Emoji from '../assets/icons/Emoji.png';
const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const fadeinup = keyframes`
30%{
    opacity:0;
}
100%{
    opacity:1;
    transform:translateY(0); 
}
`
const Image = styled.img`
margin:20px 0;
width: 350px;
height:350px;
transform: translateY(200px);
opacity: 0;
animation: ${fadeinup} 1.1s .02s 1 ease-in-out forwards;
`
const Info = styled.p`
font-size: 20px;
margin-bottom: 0;
text-align:center;
line-height:1.5em;
@media only screen  and (max-width:530px){
  line-height: 1.2;
  justify-self: flex-start;
}
transform: translateY(150px);
opacity: 0;
animation: ${fadeinup} 1s .12s 1 ease-in-out forwards;
`
const SocialInfo = styled.div`
display: flex;
opacity: 0;
transform: translateY(150px);
animation: ${fadeinup} 1s .14s 1 ease-in-out forwards;
`
const Wrapper = styled.div`
display: flex;
@media only screen  and (max-width:514px){
  flex-direction: column;
  margin-top: 10px;
}
`
const SocialMediaContainer = styled.div`
margin: 30px 0;
align-items: center;
display: flex;
flex-direction: column;
`
const Home = () => {
    return (
        <Container>
            <Image src={Emoji} />
            <Info>Software Engineer @rtCamp</Info>
            <Wrapper>
                <Info>Programmer • Developer • Learner </Info>
                <Info>&nbsp;• Amateur Blogger</Info>
            </Wrapper>
            <SocialMediaContainer>
                <Info> Also you can find me on </Info>
                <SocialInfo>
                    <a target='_blank' rel="noreferrer" href='https://github.com/shapaaa'> <Github /> </a>
                    <a target='_blank' rel="noreferrer" href='https://twitter.com/Shardul52754488'> <Twitter /></a>
                    <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/shardul-pathak-718694176/'><Linkedin /> </a>
                    <a target='_blank' rel="noreferrer" href='https://dev.to/shapaaa'> <Dev /></a>
                </SocialInfo>
            </SocialMediaContainer>
        </Container>
    )
}
export default Home;