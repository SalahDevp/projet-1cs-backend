import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import config from "./config.json";
import Login from "./pages/LoginForm";
import CreerAnnonce from "./pages/CreerAnnonce";
import Annonce from "./pages/Annonce";
import NotFound from "./pages/NotFound";
import AuthentifiedHome from "./pages/AuthentifiedHome";
import Profile from "./pages/Profile";

function App() {
  return (
    <GoogleOAuthProvider clientId={config.clientId}>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/creeannonce" element={<CreerAnnonce />} />
            <Route path="/sign" element={<Login />} />
            <Route path="/annonce/:id" element={<Annonce />} />
            <Route path="/home" element={<AuthentifiedHome />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
