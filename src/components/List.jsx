import styled, { css, keyframes } from "styled-components";
import { NavLink } from "./Header";

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
    animation: ${show} .22s .82s 1 ease-out forwards;
    ${({smallscreen})=> smallscreen && css`
       display: none;
    `}
}
@media only screen and (max-width:700px)
{
    ${({largescreen})=> largescreen && css`
    display: none;
    `}
    font-size:20px;
    position: absolute;
    top:8rem;
    left: 0;
    z-index:2;
    padding:0;
    margin:0;
    width:100%;
    justify-content:  flex-start;
    flex-direction: column;
    opacity: 0;
    transition: opacity 500ms ease 0s;
    ${( props ) => props.animated && css`
     position: absolute;
     opacity: 1;
     height: 100%;
     max-height: 1100px;
     background: hsla(0deg, 0%, 100%, 0.85);
`}
} 
`
const ListElement = styled.li`
margin: 0 15px; 
padding: 5px 0;
@media only screen and (max-width:700px)
{
    transform:translate(-100px,50px);
    padding: 10px 25px;
    margin: 5px 10px;
${( props ) => props.animated && props.about && css`
transform:translate(0,50px);
`}
${( props ) => props.about && css`
transition: transform .45s 0s ease-out;
`}
${( props ) => props.animated && props.work && css`
transform:translate(0,50px);
`}
${( props ) => props.work && css`
transition: transform .45s .2s ease-out; 
`}
${( props ) => props.animated && props.blogs && css`
transform:translate(0,50px);
`}
${( props ) => props.blogs && css`
transition: transform .45s .5s ease-out; 
`}
}

`
const ListComponent = ({animate,smallscreen,largescreen}) => {
    return (
        <List smallscreen={smallscreen} largescreen={largescreen} animated={animate} >
            <ListElement animated={animate} about>
                <NavLink to='/about'>About</NavLink>
            </ListElement>
            <ListElement animated={animate} work>
                <NavLink to='/work'>Work</NavLink>
            </ListElement>
            <ListElement animated={animate} blogs>
                <NavLink to='/blogs'>Blogs</NavLink>
            </ListElement>
        </List>
    )
}
export default ListComponent;