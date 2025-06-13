import Header from "./components/Header/header"
import Footer from "./components/Footer"

import Main from "./pages/main"
import About from "./pages/about/about"

import { BrowserRouter, Route, Routes } from "react-router"

import "./style/index.css"

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
