import { React, useState } from 'react';
import { FiSun, FiMoon } from "react-icons/fi";
import NavBar from './containers/NavBar';


//CSS IMPORTS
import { ThemeProvider } from "styled-components"
import styled from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme'
import { Toggler } from './components/Toggler'
import { GlobalStyles } from "./styles/GlobalStyles";


function App() {
  
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => { theme === "light" ? setTheme("dark") : setTheme("light") }
  const icon = theme === "light" ? <FiMoon size={26} /> : <FiSun color={"white"} size={26} />


  const Container = styled.div`
  display: flex;
  flex-direction:column;
  height: 100vh;
  justify-content: flex-start;
  width: 100%;
`;


  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />

    <Container className="App"><NavBar/>
   <Toggler onClick={toggleTheme}>{icon}</Toggler>

    </Container>
    </ThemeProvider>
  );
}

export default App;
