"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import gsap from "gsap";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Initial animation
    gsap.fromTo(
      ".nav-item",
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: "power3.out" }
    );

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""} nav-header`}>
      <Link href="#inicio" className={`${styles.logo} nav-item`}>
        <img src="/Logo.png" alt="Almacenadora Colibrí" className={styles.logoImage} />
      </Link>
      
      <button 
        className={styles.hamburger} 
        onClick={() => setIsOpen(!isOpen)} 
        aria-label="Toggle Menu"
      >
        <span className={`${styles.bar} ${isOpen ? styles.barOpen1 : ""}`}></span>
        <span className={`${styles.bar} ${isOpen ? styles.barOpen2 : ""}`}></span>
        <span className={`${styles.bar} ${isOpen ? styles.barOpen3 : ""}`}></span>
      </button>

      <nav className={`${styles.nav} ${isOpen ? styles.navActive : ""}`}>
        <Link href="#inicio" onClick={() => setIsOpen(false)} className={`${styles.navLink} nav-item`}>Inicio</Link>
        <Link href="#nosotros" onClick={() => setIsOpen(false)} className={`${styles.navLink} nav-item`}>Nosotros</Link>
        <Link href="#procedimientos" onClick={() => setIsOpen(false)} className={`${styles.navLink} nav-item`}>Procedimientos</Link>
        <Link href="#mapa-procesos" onClick={() => setIsOpen(false)} className={`${styles.navLink} nav-item`}>Mapa de Procesos</Link>
        <Link href="#servicios" onClick={() => setIsOpen(false)} className={`${styles.navLink} nav-item`}>Servicios</Link>
        <Link href="#tipos-de-carga" onClick={() => setIsOpen(false)} className={`${styles.navLink} nav-item`}>Tipos de Carga</Link>
        <Link href="#contacto" onClick={() => setIsOpen(false)} className={`${styles.ctaButton} nav-item`}>Contacto</Link>
      </nav>
    </header>
  );
}
