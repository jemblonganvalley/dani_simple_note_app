import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views";
import Register from "./views/register";
import Login from "./views/login";
import MainNavbar from "./components/navbar/MainNavbar";

function App() {
  return (
    <>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<p>Page Not Found</p>} />
      </Routes>
    </>
  );
}

export default App;
