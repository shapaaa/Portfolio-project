import { useRef, useEffect } from "react";
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
padding:30px;
@media only screen and (max-width:500px)
{
    padding:20px;
}
transform: translateY(10vw);
opacity: 0;
transition: transform .8s 0ms ease-out,opacity 1s 0ms ease-out;
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
padding-right:14px;
width: fit-content;
border-radius: 4px;
color:var(--red);
transition: background-color .5s 0s ease;
& > div > svg{
    fill:var(--red);
}
`
const ButtonContainer = styled.div`
    display:flex;
    justify-content:flex-start;
    margin-top: 10px;
    gap:clamp(20px,2vw,30px);
    `
export const LinkContent = styled.div`
display:flex;
align-items:center;
font-size: clamp(18px,3vw,20px);
`
const Project = ( { project } ) => {

    const { name, about, siteLink, githubLink } = project;
    const ref = useRef( null );
    const callback = ( entries, observer ) => {
        if ( entries[0].intersectionRatio >= 0.6 ) {
            entries[0].target.style.transform = "translateY(0)";
            entries[0].target.style.opacity = 1;
        }
    };
    useEffect( () => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.6
        };
        const observer = new IntersectionObserver( callback, options );
        observer.observe( ref.current );
    }, [] );
    return (
        <Container ref={ref}>
            <Title>{name}</Title>
            <Content>{about}</Content>
            <ButtonContainer>
                {
                    siteLink &&
                    <Link target="_blank" href={siteLink}><LinkContent>Live Site&nbsp;<LinkIcon /></LinkContent></Link>
                }
                {
                    githubLink &&
                    <Link target="_blank" href={githubLink}><LinkContent>Code&nbsp;<LinkIcon /></LinkContent></Link>
                }
            </ButtonContainer>
        </Container>
    )
}
export default Project;
