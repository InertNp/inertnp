import { Route, Routes, useLocation } from "react-router-dom";
import { Connect } from "./homepage/Connect";
import { Home } from "./homepage/Home";
import { Skills } from "./homepage/Skills";
import { NavBar } from "./Navbar/NavBar";
import { AnimatePresence } from "framer-motion";

export function Main({ theme }) {
  const loca = useLocation();

  return (
    <>
      <NavBar theme={theme} />
      <AnimatePresence>
        <Routes location={loca} key={loca.key}>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
