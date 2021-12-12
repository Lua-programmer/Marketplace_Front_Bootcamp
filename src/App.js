import React, { Fragment , useState , useEffect  } from "react";
import GlobalTheme from "./Style/GlobalStyle"
import { ThemeProvider } from "styled-components";
import { lightTheme , darkTheme } from "./Style/theme";
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
    
      <ThemeProvider theme={ theme ==='dark' ? lightTheme : darkTheme}>
        <Fragment>
          <GlobalTheme>
              <Navbar/>
              <ButtonChange onClick={toggleTheme}>trocar tema </ButtonChange>
            
          </GlobalTheme>
        </Fragment>
      </ThemeProvider>
    
  );
}


export default App;
