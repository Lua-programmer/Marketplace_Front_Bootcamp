import React, { Fragment , useState , useEffect  } from "react";

import { ThemeProvider } from "styled-components";
import { lightTheme , darkTheme } from "./theme";
import GlobalTheme from "./GlobalStyle";
import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";




const ButtonChange = styled.button`
  width: 100px;
  height: 40px;
  margin-right: 20px;
  border-radius: 10px;
`;

function App() {

  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }else {
      window.localStorage.setItem('theme', 'light');
      setTheme('ligth')
    }
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, [])


  return (
    
      <ThemeProvider theme={ theme ==='light' ? lightTheme : darkTheme}>
        <Fragment>
          <GlobalTheme>
            
              <ButtonChange onClick={toggleTheme} >trocar tema </ButtonChange>
              
              <Navbar/>
            
          </GlobalTheme>
        </Fragment>
      </ThemeProvider>
    
  );
}


export default App;
