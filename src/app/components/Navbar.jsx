"use client";

import { useEffect, useState } from "react";
import { IconMenu2, IconMoon, IconSun, IconX } from "@tabler/icons-react";

const links = [
  ["Home", "/"], ["About", "/About"], ["Projects", "/Projects"],
  ["Blogs", "/Blogs"], ["Resume", "/Resume"],
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setActiveLink(window.location.pathname);
    const current = document.documentElement.dataset.theme || "dark";
    setTheme(current);
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("portfolio-theme", next);
  };

  return (
    <header className={`nav-wrap ${scrolled ? "nav-scrolled" : ""}`}>
      <nav className="nav-inner" aria-label="Main navigation">
        <a href="/" className="brand" aria-label="Ahsan home"><span>&lt;</span>ahsan<span>/&gt;</span></a>
        <div className="nav-links">
          {links.map(([name, href]) => (
            <a key={href} href={href} className={activeLink === href ? "active" : ""}>{name}</a>
          ))}
        </div>
        <div className="nav-actions">
          <button className="theme-button" onClick={toggleTheme} type="button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
            <IconSun className="sun-icon" size={18} />
            <IconMoon className="moon-icon" size={18} />
          </button>
          <a href="/Hire" className="nav-cta">Let&apos;s talk <span>↗</span></a>
          <button className="menu-button" onClick={() => setIsOpen(!isOpen)} type="button" aria-label="Toggle menu">
            {isOpen ? <IconX /> : <IconMenu2 />}
          </button>
        </div>
      </nav>
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        {links.map(([name, href]) => <a key={href} href={href}>{name}<span>→</span></a>)}
        <a href="/Hire">Let&apos;s work together <span>↗</span></a>
      </div>
    </header>
  );
}
