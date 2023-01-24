import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { MovieProvider } from "./components/MoviesContext/ContextMovies";

import { Router } from "./Router";

import { defaultTheme } from "./styles/themes/defaulttheme";
import { GlobalStyle } from "./styles/themes/global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <MovieProvider>
          <Router />
        </MovieProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
