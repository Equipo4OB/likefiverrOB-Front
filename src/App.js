import { React } from "react";
import NavBarv2 from "../src/components/v2/navbar"
import HomePage from "./pages/HomePage";
import Explore from "./pages/Explorar";

import Footer from "./components/Footer/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorkDetail from "./components/WorkDetail/index";
import Detail from "./components/v2/Detail"

//CSS IMPORTS
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { lightTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import CategoryList from "./components/CategoryList";

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
