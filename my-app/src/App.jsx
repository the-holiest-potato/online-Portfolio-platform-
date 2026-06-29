import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import LoginPage from "./pages/Login.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<LoginPage />} />
         <Route path="/" element={<LandingPage  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;