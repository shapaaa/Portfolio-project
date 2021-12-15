import styled, { css, keyframes } from "styled-components";
import Github from "../assets/icons/github";
import Project, { LinkContent } from "../components/Project";
import portfolio from '../assets/videos/portfolio.webm'
import wordcamp from '../assets/videos/wordcamp.webm'
import weather from '../assets/videos/weather.webm'
import adhelp from '../assets/videos/adhelp.webm'
import { Title } from "./About";

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap:40px;
@media only screen and (max-width:600px)
{
    width: 95%;
  }
  width: 80%;
  margin: 0 auto;
  `

const WorkTitle = styled( Title )`
${( { small } ) => !small && css`
    display: none;
`}
@media only screen and (min-width:530px)
{
    ${( { small } ) => small && css`
    display: none;`}
    ${( { small } ) => !small && css`
    display: block;`}
}
`
const Projects = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap:40px;
width:100%;
`
const projects = [
  {
    id: 1,
    name: 'Portfolio Website',
    video: portfolio,
    about: 'A Website to present my skills and projects I have done',
    githubLink: 'https://github.com/shapaaa/Portfolio-project'
  },
  {
    id: 2,
    name: 'Weather Application',
    video: weather,
    about: "A responsive web application to show weather data based on current location.Also user can get weather data about specific city by search",
    siteLink: 'https://weatherwebap.netlify.app/',
    githubLink: 'https://github.com/shapaaa/Weather-app'
  },
  {
    id: 3,
    name: 'User Authentication',
    about: 'Built user authentication using JSON web token, React, web storage API, Graphql, Node.Used Postgres database for the application storage.',
    githubLink: 'https://github.com/shapaaa/grocery-app-server'
  },
  {
    id: 4,
    name: 'WordCamp Events Application',
    video: wordcamp,
    about: 'A web app to find wordcamp events happening all over the world using rest apis as data source',
    siteLink: 'https://wordcamp-central.netlify.app/',
    githubLink: 'https://github.com/shapaaa/WordCamp-Central-site'
  },
  {
    id: 5,
    name: 'Yelp Clone',
    about: 'A website where people can find reviews about hotels.Also user can add new hotels and reviews about them.Built using React, Node, Postgres db.Used node-pg as a connector.',
    githubLink: 'https://github.com/shapaaa/yelp-client'
  },
  {
    id: 6,
    name: 'Adhelp.io',
    video: adhelp,
    about: 'Responsive landing page with grid layout.Built using Html, Css , Chart.js library',
    siteLink: 'https://adhelp.netlify.app/',
    githubLink: 'https://github.com/shapaaa/Adhelp.io'
  },
]
const Link = styled.a`
text-decoration: none;
cursor:pointer;
color: black;
border:2px solid black;
margin:30px 0px 100px 0px;
padding: 12px 16px;
@media only screen and (min-width:501px)
{
    padding:16px 32px;
}
border-radius: 4px;
transition: background-color .5s 0s ease;
&:hover{
    background-color:black;
    color:white;
}
& > div > svg{
  margin:0;
}
& > a {
  color:black;
}
&:hover > div > svg{
    fill:white;
}
&:hover > div{
    color:white;
}
@media only screen and (max-width:600px){
    color:white;
    background-color: black;
    & > div > svg{
      fill:white;
    }
}
`

const Work = () => {
  return (
    <Container>
      <WorkTitle small>Projects</WorkTitle>
      <WorkTitle>Take a look at what I've been working on!</WorkTitle>
      <Projects>
        {
          projects.map( ( project ) =>
            <Project key={project.id} project={project} />
          )
        }
      </Projects>
      <Link target="_blank" href="https://github.com/shapaaa?tab=repositories"><LinkContent>Find More &nbsp; <Github /></LinkContent></Link>
    </Container >
  )
}
export default Work;