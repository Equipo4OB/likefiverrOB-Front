import { React } from "react";
import NavBarv2 from "../src/components/v2/navbar"
import HomePage from "./pages/HomePage";
import Explore from "./pages/Explorar";

import Footer from "./components/Footer/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorkDetail from "./components/WorkDetail/index";
import Detail from "./components/v2/Detail"
import AllCategory from "./components/v2/AllCategory"

//CSS IMPORTS
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { lightTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import CategoryList from "./components/CategoryList";
import Loopv2 from "./components/v2/Loop";
import AllCourses from "./components/v2/AllCourses"

function App() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: flex-start;
    width: 100%;
  `;

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Container className="App">
        <NavBarv2 />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/explorar" element={<Explore />} />
            <Route exact path="/todo" element={<AllCourses />} />
            <Route exact path="/react" element={<AllCategory cat="react" />} />
            <Route exact path="/angular" element={<AllCategory cat="angular" />} />
            <Route exact path="/nodejs" element={<AllCategory cat="nodejs" />} />
            <Route exact path="/java" element={<AllCategory cat="java" />} />
            <Route path="/cursos/:publicId" element={<Detail />} />
            <Route path="/categorias/:publicId" element={<CategoryList />} />
          </Routes>
        </BrowserRouter>{" "}
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
