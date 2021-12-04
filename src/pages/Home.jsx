import styled, { keyframes } from "styled-components";
import Github from '../assets/icons/github'
import Twitter from '../assets/icons/twitter'
import Linkedin from '../assets/icons/linkedin'
import Dev from '../assets/icons/dev'

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
width: 300px;
height:300px;
transform: translateY(200px);
opacity: 0;
animation: ${fadeinup} 1.1s .02s 1 ease-in-out forwards;
`
const Info = styled.p`
font-size: 20px;
margin-bottom: 0;
text-align:center;
line-height:1.8em;
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
const Home = () => {
    return (
        <Container>
            <Image src='https://www.dhilipkmr.dev/static/profilePic-162001e6f25969e3061354534123fea9.png' />
            <Info>Software Engineer @rtCamp</Info>
            <Info>lifelong learner | amateur blogger | empath | occasional traveller</Info>
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