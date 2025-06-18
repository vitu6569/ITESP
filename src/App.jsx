import Header from "./components/Header/header"
import Footer from "./components/Footer"

import Main from "./pages/main"
import About from "./pages/about/about"
import AccountAbility from "./pages/accountability"
import Notice from "./pages/notice/index"
import NotFound from "./pages/NotFound" // Crie esse componente

import { BrowserRouter, Route, Routes } from "react-router"

import "./style/index.css"
import HowToAct from "./pages/act"
import OurImpact from "./pages/impact"
import SectionProject from "./components/Section"

function App() {
  return (
    <div style={{ maxWidth: "100%", alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "sticky", top: 0, zIndex: 1000 }}>
        <Header />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/AccountAbility" element={<AccountAbility />} />
          <Route path="/Act" element={<HowToAct />} />
          <Route path="/impact" element={<OurImpact />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="*" element={<NotFound />} /> {/* Rota para páginas não encontradas */}
        </Routes>
      </BrowserRouter>
      <Footer />
      <div className="footer__bottom labelFonte">
        © 2025 Instituto Talentos Esportivos São Pedro . All Rights Reserved.
      </div>
    </div>
  )
}

export default App
