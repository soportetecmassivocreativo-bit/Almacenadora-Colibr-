"use client";

import { useEffect, useRef } from "react";
import styles from "./About.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Sparkles, Handshake, Cpu } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-anim",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // Line drawing animation
      const paths = sectionRef.current?.querySelectorAll(".decor-full path");
      paths?.forEach((path) => {
        const p = path as SVGPathElement;
        const length = p.getTotalLength() || 1200;
        
        p.style.strokeDasharray = `${length}`;
        p.style.strokeDashoffset = `${length}`;
        
        gsap.to(p, {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
          repeatDelay: 0.5,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} id="nosotros" ref={sectionRef}>
      {/* Decorative logo lines */}
      <div className="decor-full">
        <svg width="100%" height="100%" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100,150 C300,100 500,500 720,400 C940,300 1100,100 1540,150" stroke="#FFFFFF" strokeWidth="3.8" />
          <path d="M-80,180 C320,130 520,530 740,430 C960,330 1120,130 1560,180" stroke="#FFFFFF" strokeWidth="2.5" />
          <path d="M-120,120 C280,70 480,470 700,370 C920,270 1080,70 1520,120" stroke="#FFFFFF" strokeWidth="2.0" />
          <path d="M-50,220 C350,170 550,570 770,470 C990,370 1150,170 1590,220" stroke="#FFFFFF" strokeWidth="1.8" />
          <path d="M-150,90 C250,40 450,440 670,340 C890,240 1050,40 1490,90" stroke="#FFFFFF" strokeWidth="1.5" />
          <path d="M1200,200 C1300,400 1100,600 1350,750" stroke="#FFFFFF" strokeWidth="3.0" />
          <path d="M1230,220 C1330,420 1130,620 1380,770" stroke="#FFFFFF" strokeWidth="1.8" />
        </svg>
      </div>

      {/* Quiénes Somos */}
      <div className={`${styles.card} ${styles.introCard} about-anim mirror-card`}>
        <span className={styles.tag}>SOBRE NOSOTROS</span>
        <h2 className={styles.mainTitle}>¿Quiénes Somos?</h2>
        <p className={styles.introText}>
          Almacenadora Colibrí es una empresa líder en el sector de almacenamiento y resguardo, especializada en la administración de depósitos y protección de contenedores. Nacimos con el propósito de ofrecer un espacio seguro, confiable y eficiente, sirviendo como guardianes estratégicos para el resguardo de tu carga.
        </p>
      </div>

      {/* Misión y Visión Cards */}
      <div className={styles.cardsContainer}>
        <div className={`${styles.card} ${styles.missionCard} about-anim mirror-card`}>
          <h3 className={styles.cardTitle}>MISIÓN</h3>
          <p className={styles.text}>
            Ser la empresa de confianza que garantiza la seguridad y el óptimo resguardo de la mercancía. Comprometidos a proporcionar soluciones de almacenamiento eficientes y flexibles, respetando las normas y leyes que nos rigen.
          </p>
        </div>

        <div className={`${styles.card} ${styles.visionCard} about-anim mirror-card`}>
          <h3 className={styles.cardTitle}>VISIÓN</h3>
          <p className={styles.text}>
            Ser una empresa líder y referente a nivel nacional e internacional, en la gestión de depósito y resguardo de contenedores, reconocida por la excelencia operativa, estándares de seguridad y cumplimiento de normas, expandiendo constantemente nuestra capacidad y elevando el estándar de la industria del almacenamiento y resguardo de carga.
          </p>
        </div>
      </div>

      {/* Valores Corporativos */}
      <div className={`${styles.valuesSection} about-anim`}>
        <h3 className={styles.valuesTitle}>Nuestros Valores</h3>
        <div className={styles.valuesGrid}>
          <div className={`${styles.valueCard} mirror-card`}>
            <div className={styles.valueIconWrapper}>
              <Shield size={24} />
            </div>
            <h4>Seguridad e Integridad</h4>
            <p>Garantizamos el resguardo óptimo de la carga bajo las más estrictas normas y leyes.</p>
          </div>
          <div className={`${styles.valueCard} mirror-card`}>
            <div className={styles.valueIconWrapper}>
              <Sparkles size={24} />
            </div>
            <h4>Excelencia Operativa</h4>
            <p>Buscamos la perfección en cada maniobra, despacho and control de inventario.</p>
          </div>
          <div className={`${styles.valueCard} mirror-card`}>
            <div className={styles.valueIconWrapper}>
              <Handshake size={24} />
            </div>
            <h4>Compromiso Total</h4>
            <p>Tu tranquilidad es nuestra responsabilidad. Cuidamos tu carga como si fuera nuestra.</p>
          </div>
          <div className={`${styles.valueCard} mirror-card`}>
            <div className={styles.valueIconWrapper}>
              <Cpu size={24} />
            </div>
            <h4>Innovación Constante</h4>
            <p>Aplicamos tecnologías emergentes y herramientas modernas para optimizar el espacio.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
