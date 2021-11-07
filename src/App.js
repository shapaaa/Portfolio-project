import styled from "styled-components";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Blogs from "./pages/Blogs";


const Container = styled.div``

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="about" element={ <About /> } />
          <Route path="portfolio" element={ <Portfolio /> } />
          <Route path="blogs" element={ <Blogs /> } />
        </Route>
      </Routes>
    </Container>
  )
}
export default App;