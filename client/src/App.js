import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./component/Signup";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Login from "./component/Login";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Poppins"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/registration" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
