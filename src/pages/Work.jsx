import styled, { css } from "styled-components";
import Github from "../assets/icons/github";
import Project, { LinkContent  } from "../components/Project";
import portfolio from '../assets/videos/portfolio.webm'
import wordcamp from '../assets/videos/wordcamp.webm'
import weather from '../assets/videos/weather.mp4'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap:30px;
@media only screen and (max-width:600px)
{
    width: 95%;
  }
  width: 80%;
  margin: 0 auto;
  `
const Title = styled.div`
font-size:clamp(24px,3vw,28px);
font-family: 'Open Sans';
padding:10px;
margin-top: 20px;
text-align: center;
${({small})=> !small && css`
    display: none;
`}
@media only screen and (min-width:530px)
{
    ${({small})=> small && css`
    display: none;`}
    ${({small})=> !small && css`
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
    name:'Portfolio Website',
    video:portfolio,
    about:'Built portfolio site to present about me,my skills & projects I worked upon',
    techStack:" React, Html, Css, WordPress",
    githubLink:'https://github.com/shapaaa/Portfolio-project'
  },
  {
    name:'WordCamp Events Application',
    video:wordcamp,
    about:'Built a React App which fetches data using WP REST API using WordCamp Central site.Displayed upcoming and past WordCamps in calendar view.',
    techStack:" React, Html, Css, WordPress",
    siteLink:'https://wordcamp-central.netlify.app/',
    githubLink:'https://github.com/shapaaa/WordCamp-Central-site'
  },
  {
    name:'Weather Application',
    video:weather,
    about:"Developed responsive weather app using openweathermap API.Used geolocation API to get the user's current location to display weather data based on his current location.Created search autocomplete feature in the search bar when users search location-specific weather data Created graph view using chart.js to show hourly weather report",
    techStack:" React, Chart.js, Html, Css",
    siteLink:'https://adhelp.netlify.app/',
    githubLink:'https://github.com/shapaaa/Weather-app'
  },
  {
    name:'User Authentication',
    about:'Developed user authentication using JSON web token and local storage API Developed social Oauth logins to authenticate users without email and password Created protected routes using node.js and used Postgres db to store user credentials',
    techStack:" Node.js, Postgres , React.js",
    githubLink:'https://github.com/shapaaa/grocery-app-server'
  },
  {
    name:'Adhelp.io',
    about:'Responsive landing page with grid layout.Built using Html, Css , Chart.js library',
    techStack:" Html, Css, Javascript",
    siteLink:'https://adhelp.netlify.app/',
    githubLink:'https://github.com/shapaaa/Adhelp.io'
  },
  {
    name:'Yelp Clone',
    about:'Developed a full-stack web application to show users data about different hotels and their reviews Users can add their reviews for the specific restaurant and new hotels to the application.For managing state in the application used context API',
    techStack:" Node.js, Postgres , React.js",
    githubLink:'https://github.com/shapaaa/yelp-client'
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
`

const Work = () => {
  return (
    <Container>
        <Title small>Projects</Title>
        <Title >Some recent side projects I have built</Title>
        <Projects>
          {
            projects.map((project)=>
              <Project project={project}/>
            )
          }
        </Projects>
        <Link target="_blank" href="https://github.com/shapaaa?tab=repositories"><LinkContent>Find More &nbsp; <Github /></LinkContent></Link>
    </Container>
  )
}
export default Work;