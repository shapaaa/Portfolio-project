import styled from "styled-components";
import Home from "./pages/Home";
import About from "./pages/About";
import './styles/style.css';
import Work from "./pages/Work";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";


const Container = styled.div`
`

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
        </Route>
      </Routes>
    </Container>
  )
}
export default App;