// Import React and necessary hooks
import React, { useState, useEffect, useRef } from 'react';
// Import Lottie animation component
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// Import component and global styles
import "./style/index.css";
import "../../style/index.css";

// Import logo assets
import logoB from "../../assets/logo/ITESPBD.png";
import logoS from "../../assets/logo/ITESPSD.png";

// Menu items configuration
const menuItems = [
  {
    label: "SOBRE",
    links: [
      { name: "Sobre o Instituto", path: "about" },
      /*
      { name: "Nossa equipe", path: "team" },
      { name: "Parceiros", path: "annual-report" },
      { name: "Financiadores", path: "annual-report" },
      { name: "Relátorio Anual", path: "annual-report" },
      */
      { name: "Prestação de Contas", path: "accountability" },
      { name: "Como Atuamos", path: "act" },
      {name: "Nosso Impacto", path: "impact"},
    ]
  },
  /*
  {
    label: "TEMAS",
    links: [
      { name: "Materia 1", path: "tema-1" },
      { name: "Materia 2", path: "tema-2" },
      { name: "Materia 3", path: "tema-3" },
    ]
  },
  */
];

// Header component
const Header = () => {
  // State to control if the header is scrolled
  const [scrolled, setScrolled] = useState(false);
  // State to control if the viewport is mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  // State to control mobile menu open/close
  const [menuOpen, setMenuOpen] = useState(false);
  // Ref for controlling Lottie animation
  const animationRef = useRef();

  // Effect to handle scroll and resize events
  useEffect(() => {
    // Update scrolled state based on scroll position
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Update isMobile state based on window width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Select logo based on scroll state
  const logo = scrolled ? logoS : logoB;

  // Handle mobile menu icon click
  const handleMenuClick = () => {
    setMenuOpen((prev) => !prev);
    animationRef.current?.play();
  };

  return (
    <header className="header">
      <div className={`container ${scrolled ? "containerScrolled" : ""}`}>
        {/* Logo */}
        <a href='/'>
          <img src={logo} alt="logo" className="logo" />
        </a>

        {/* Mobile menu */}
        {isMobile ? (
          <div className="mobileMenuContainer">
            {/* Hamburger menu button with Lottie animation */}
            <button
              className="mobileMenuIcon"
              onClick={handleMenuClick}
              aria-label="Abrir menu"
            >
              <DotLottieReact
                lottieRef={animationRef}
                src="https://lottie.host/0264f366-a678-40a8-9336-6a83d5a6a9ef/cts1gXd9TV.lottie"
                autoplay={false}
                loop={false}
              />
            </button>

            {/* Mobile navigation menu */}
            {menuOpen && (
              <nav className="mobileMenu">
                <ul>
                  {/* Render menu items and submenus */}
                  {menuItems.map((item) => (
                    <li key={item.label}>
                      <span className="textMenu">{item.label}</span>
                      <ul className="dropdown">
                        {item.links.map((link, i) => (
                          <li key={i}>
                            <a href={`/${link.path}`}>{link.name}</a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                  {/* Additional static menu items */}
                  <li className="textMenu"><a href="/publicacoes">PUBLICAÇÕES</a></li>
                  <li className="textMenu"><a href="/quero-apoiar">QUERO APOIAR</a></li>
                </ul>
              </nav>
            )}
          </div>
        ) : (
          // Desktop menu
          <nav className="containerMenu preto">
            {/* Render menu items and submenus */}
            {menuItems.map((item) => (
              <ul className="menu" key={item.label}>
                <li>
                  <a href="#" className="textMenu">{item.label}</a>
                  <ul className="dropdown">
                    {item.links.map((link, i) => (
                      <li key={i}>
                        <a href={`/${link.path}`}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            ))}
            {/* Additional static menu items */}
            <li className="apoiar">
              <a href="/publicacoes" className="textMenu">PUBLICAÇÕES</a>
              <a href="/quero-apoiar" className="textMenu">QUERO APOIAR</a>
            </li>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
