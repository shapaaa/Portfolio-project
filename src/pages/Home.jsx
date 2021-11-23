import styled, { keyframes } from "styled-components";
import Github from '../assets/github'
import Twitter from '../assets/twitter'
import Linkedin from '../assets/linkedin'
import Dev from '../assets/dev'

const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Name = styled.h1`
font-size: clamp(24px,4vw,56px);
margin: 0;
color:var(--purp);
line-height: 1.7em;
`;
const Image = styled.img`
width: 300px;
height:300px;
`
const Info = styled.p`
font-size: 20px;
margin-bottom: 0;
text-align:center;
line-height:1.8em;
`
const SocialInfo = styled.div`
display: flex;
`
const GreetContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const waveAnimation = keyframes`
0%{
    transform:rotate(0deg);
}
10%{
    transform:rotate(20deg);
}
20%{
    transform:rotate(30deg);
}
30%{
    transform:rotate(0deg);
}
40%{
    transform:rotate(30deg);
}
50%{
    transform:rotate(0deg);
}
60%{
    transform:rotate(30deg);
}
70%{
    transform:rotate(0deg);
}
80%{
    transform:rotate(30deg);
}
90%{
    transform:rotate(0deg);
}
`
const WavingHand = styled.span`
font-size: clamp(18px,3vw,43px);
margin-right: 5px;
animation: ${waveAnimation} 2s 1 .5s;
transform-origin: 70% 70%;
`
const Home = () => {
    return (
        <Container>
            <GreetContainer>
                <Name>Hi, </Name>
                <WavingHand>👋 </WavingHand>
                <Name> I'm Shardul</Name>
            </GreetContainer>
            <Image src='https://www.dhilipkmr.dev/static/profilePic-162001e6f25969e3061354534123fea9.png' />
            <Info>Software Engineer @rtCamp</Info>
            <Info>amateur blogger | empath | occasional traveller</Info>
            <SocialInfo>
                <a target='_blank' rel="noreferrer" href='https://github.com/shapaaa'> <Github /> </a>
                <a target='_blank' rel="noreferrer" href='https://twitter.com/Shardul52754488'> <Twitter /></a>
                <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/shardul-pathak-718694176/'><Linkedin /> </a>
                <a target='_blank' rel="noreferrer" href='https://dev.to/shapaaa'> <Dev /></a>
            </SocialInfo>
        </Container>
    )
}
export default Home;