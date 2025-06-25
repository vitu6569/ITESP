import React, { useState, useEffect, useRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import "./style/index.css";
import "../../style/index.css";

import logoB from "../../assets/logo/ITESPBD.png";
import logoS from "../../assets/logo/ITESPSD.png";

const menuItems = [
  {
    label: "SOBRE",
    links: [
      { name: "Sobre o Instituto", path: "about" },
      { name: "Prestação de Contas", path: "accountability" },
      { name: "Como Atuamos", path: "act" },
      { name: "Nosso Impacto", path: "impact" },
    ]
  }
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const animationRef = useRef();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const logo = scrolled ? logoS : logoB;

  const handleMenuClick = () => {
    setMenuOpen((prev) => !prev);
    animationRef.current?.play();
  };

  return (
    <header className="header">
      <div className={`container ${scrolled ? "containerScrolled" : ""}`}>
        <a href="/">
          <img src={logo} alt="logo" className="logo" />
        </a>

        {isMobile ? (
          <div className="mobileMenuContainer">
            <button className="mobileMenuIcon" onClick={handleMenuClick} aria-label="Abrir menu">
              <DotLottieReact
                lottieRef={animationRef}
                src="https://lottie.host/0264f366-a678-40a8-9336-6a83d5a6a9ef/cts1gXd9TV.lottie"
                autoplay={false}
                loop={false}
              />
            </button>

            {menuOpen && (
              <nav className={`mobileMenu mobileMenuOpen`}>
                <ul>
                  <li><a className="textMenu" href="/">INICIO</a></li>
                  
                  {menuItems.map((item, index) => (
                    <li key={item.label}>
                      <button
                        className="textMenu submenuToggle"
                        onClick={() => setOpenSubmenu(openSubmenu === index ? null : index)}
                      >
                        {item.label}
                      </button>
                      <ul className={`dropdownMobile ${openSubmenu === index ? "open" : ""}`}>
                        {item.links.map((link, i) => (
                          <li key={i}><a href={`/${link.path}`}>{link.name}</a></li>
                        ))}
                      </ul>
                    </li>
                  ))}

                  <li><a className="textMenu" href="/notice">NOTÍCIAS</a></li>
                </ul>
              </nav>
            )}
          </div>
        ) : (
          <nav className="containerMenu preto">
            <ul className="menu">
              <li><a href="/" className="textMenu">INICIO</a></li>
            </ul>
            {menuItems.map((item) => (
              <ul className="menu" key={item.label}>
                <li>
                  <a href="#" className="textMenu">{item.label}</a>
                  <ul className="dropdown">
                    {item.links.map((link, i) => (
                      <li key={i}><a href={`/${link.path}`}>{link.name}</a></li>
                    ))}
                  </ul>
                </li>
              </ul>
            ))}
            <ul className="menu">
              <li className="apoiar">
                <a href="/notice" className="textMenu">NOTÍCIAS</a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
