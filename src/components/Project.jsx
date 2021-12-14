import styled from "styled-components";
import LinkIcon from "../assets/icons/LinkIcon";

const Container = styled.div`
border-radius: 8px;
background:white;
overflow:hidden;
display: flex;
flex-direction: column;
gap:clamp(10px,5vw,15px);
@media only screen and (min-width:701px)
{
    min-width: 500px;
    max-width: 700px;
}
width: 100%;
box-shadow: var(--color-stroke) 0px 0px 5px;
border-bottom: 2px solid var(--color-stroke);
padding:30px;
&:hover{
    box-shadow: var(--color-stroke) 0px 0px 10px;
}
@media only screen and (max-width:500px)
{
    padding:20px;
}
`;
const Title = styled.div`
font-size:clamp(22px,2vw,24px);
font-weight:500;
background: -webkit-linear-gradient(135deg,#E60067 40%, #4433FF);
background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Content = styled.p`
margin:0;
font-size: 20px;
line-height: calc(1em + 1rem);
`;
export const Link = styled.a`
cursor:pointer;
text-decoration: none;
border:2px solid var(--red);
padding:14px;
width: fit-content;
border-radius: 4px;
color:var(--red);
transition: background-color .5s 0s ease;
&:hover{
    background-color:var(--red);
    color:white;
}
&:hover > div > svg{
    fill:white;
}
& > div > svg{
    fill:var(--red);
}
&:hover > div > svg{
    fill:white;
}
&:hover > div {
    color:white;
}
`
const ButtonContainer = styled.div`
    display:flex;
    justify-content:flex-start;
    gap:clamp(15px,1vw,30px);
`
export const LinkContent = styled.div`
display:flex;
align-items:center;
font-size: clamp(18px,3vw,20px);
`
const Video = styled.video`
width: 100%;
object-fit: cover;
height:clamp(300px,40vw,360px);
box-shadow: #f0eeee 0px 0rem 5px;
`
const Project = ( { project } ) => {
    const { name, about, techStack, siteLink, githubLink,video } = project;
    return (
        <Container>
            <Title>{name}</Title>
            <Content>{about}</Content>
            <Video loop muted autoPlay="true"  src={video}></Video>
            {/* <Content>TechStack:{techStack}</Content> */}
                <ButtonContainer>
                    {
                        siteLink &&
                    <Link target="_blank" href={siteLink}><LinkContent>Live Site&nbsp; <LinkIcon /></LinkContent></Link>
                    }
                    {
                        githubLink && 
                    <Link target="_blank" href={githubLink}><LinkContent>Code &nbsp; <LinkIcon /></LinkContent></Link>
                    }
                </ButtonContainer>
        </Container>
    )
}
export default Project;
