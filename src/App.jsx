import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/http";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Home from "./pages/Home";
import Nutrients from "./pages/Nutrients";
import Exercises from "./pages/Exercises";
import Calculators from "./pages/Calculators";

import Header from "./components/Header/Header";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nutrients" element={<Nutrients />} />
              <Route path="/exercises" element={<Exercises />} />
              <Route path="/calculators" element={<Calculators />} />
            </Routes>
          </main>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
