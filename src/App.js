import { React } from "react";
import NavBar from "./components/NavBar/Index";

//CSS IMPORTS
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { lightTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";

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
      <GlobalStyles />{" "}
      <Container className="App">
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>{" "}
      </Container>
    </ThemeProvider>
  );
}

export default App;
