import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

export const show = keyframes`
100%{
    opacity:1;
}
`
const List = styled.ul`
list-style: none;
font-size:clamp(18px,2vw,20px);
font-weight: 500;
transition: all .25s 0s ease-in;
display: flex;
justify-content:center;
@media only screen and (min-width:701px)
{
    opacity: 0;
    animation: ${show} .22s .8s 1 ease-out forwards;
    ${( { smallscreen } ) => smallscreen && css`
       display: none;
    `}
}
@media only screen and (max-width:700px)
{
    ${( { largescreen } ) => largescreen && css`
    display: none;
    `}
    font-size:20px;
    position: absolute;
    top:8rem;
    transform: translateX(-100%);
    z-index:2;
    padding:0;
    margin:0;
    width:100%;
    justify-content:  flex-start;
    flex-direction: column;
    opacity: 0;
    transition: opacity .8s ease 0s;
    ${( props ) => props.animated && css`
    position: absolute;
    opacity: 1;
    height: calc(100% - 8rem); 
    transform: translateX(0);
    background:hsla(0deg, 0%, 100%, 0.97);;
    `}
} 
`
export const NavLink = styled( Link )`
text-decoration: none;
font-weight: 530;
color: black;
width:fit-content;
display: block;
position: relative;
&::after{
    content: "";
    position: absolute;
    bottom:-10px;
    left:0;
    width:0;
    background-color:black;
    ${( { title } ) => title && css`
    background-color:#4433FF;
    ` };
    height:2px;
    transition: width .2s ease-out,font-weight .2s ease-out;
}
&:hover::after{
    width:100%;
}
`
const Resume = styled( NavLink ).attrs( {
    as: "a"
} )``;
const ListElement = styled.li`
margin: 0 15px; 
padding: 5px 0;
@media only screen and (max-width:700px)
{
    transform:translate(-100%,50px);
    padding: 10px 25px;
    margin: 5px 10px;
${( props ) => props.animated && props.about && css`
transform:translate(0,50px);
`}
${( props ) => props.about && css`
transition: transform .45s 20ms ease;
`}
${( props ) => props.animated && props.work && css`
transform:translate(0,50px);
`}
${( props ) => props.work && css`
transition: transform .55s 140ms ease; 
`}
${( props ) => props.animated && props.blogs && css`
transform:translate(0,50px);
`}
${( props ) => props.blogs && css`
transition: transform .55s 280ms ease; 
`}
}
`
const ListComponent = ( { animateFalse, animate, smallscreen, largescreen } ) => {
    return (
        <List onClick={animateFalse} smallscreen={smallscreen} largescreen={largescreen} animated={animate} >
            <ListElement animated={animate} about>
                <NavLink to='/about'>About</NavLink>
            </ListElement>
            <ListElement animated={animate} work>
                <NavLink to='/work'>Work</NavLink>
            </ListElement>
            <ListElement animated={animate} blogs>
                <Resume target="_blank" href='https://tinyurl.com/shardul-resume'>Resume</Resume>
            </ListElement>
        </List>
    )
}
export default ListComponent;