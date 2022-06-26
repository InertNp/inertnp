import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Connect } from "./homepage/Connect";
import { Home } from "./homepage/Home";
import { Skills } from "./homepage/Skills";
import { NavBar } from "./Navbar/NavBar";

export function Main({ theme }) {
  return (
    <BrowserRouter>
      <NavBar theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </BrowserRouter>
  );
}
