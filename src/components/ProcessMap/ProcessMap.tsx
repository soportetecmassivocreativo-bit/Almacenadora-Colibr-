"use client";

import { useEffect, useRef } from "react";
import styles from "./ProcessMap.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".map-anim",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );

      // Line drawing animation
      const paths = containerRef.current?.querySelectorAll(".decor-full path");
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} id="mapa-procesos" ref={containerRef}>
      {/* Decorative logo lines */}
      <div className="decor-full">
        <svg width="100%" height="100%" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100,150 C300,200 600,600 720,500 C840,400 1100,100 1540,150" stroke="#FFFFFF" strokeWidth="3.8" />
          <path d="M-80,180 C320,230 620,630 740,530 C860,430 1120,130 1560,180" stroke="#FFFFFF" strokeWidth="2.5" />
          <path d="M-60,210 C340,260 640,660 760,560 C880,460 1140,160 1580,210" stroke="#FFFFFF" strokeWidth="1.8" />
          <path d="M-120,120 C280,170 580,570 700,470 C820,370 1080,70 1520,120" stroke="#FFFFFF" strokeWidth="1.5" />
          <path d="M600,300 C500,450 700,600 800,750" stroke="#FFFFFF" strokeWidth="3.0" />
          <path d="M620,320 C520,470 720,620 820,770" stroke="#FFFFFF" strokeWidth="1.8" />
        </svg>
      </div>

      <div className={styles.header}>
        <h2 className={styles.title}>Mapa de Procesos</h2>
        <div className={styles.subtitle}>Estructura y Entes Reguladores</div>
      </div>

      <div className={styles.mapWrapper}>
        {/* Tier 1: Entes Reguladores */}
        <div className={`${styles.tierContainer} map-anim mirror-card`}>
          <div className={styles.tierHeader}>Entes que Regulan la Actividad</div>
          <div className={styles.tierGrid}>
            <div className={`${styles.tierCard} mirror-card-white`}>Presidencia y Gerencia</div>
            <div className={`${styles.tierCard} mirror-card-white`}>SENIAT</div>
            <div className={`${styles.tierCard} mirror-card-white`}>Normas del INPSASEL</div>
            <div className={`${styles.tierCard} mirror-card-white`}>Manual de Proc. Interno</div>
          </div>
        </div>

        {/* Core Flow */}
        <div className={`${styles.coreFlowRow} map-anim`}>
          <div className={styles.clientBadge}>CLIENTE</div>
          
          <div className={styles.flowGrid}>
            <div className={`${styles.flowStep} mirror-card`}>
              Recepción, Procedimiento y Despacho
            </div>
            <div className={`${styles.flowStep} mirror-card`}>
              Realizar Operaciones Según Orden de Servicio
            </div>
            <div className={`${styles.flowStep} mirror-card`}>
              Levantar Documentación Pertinente
            </div>
            <div className={`${styles.flowStep} mirror-card`}>
              Pago y Despacho del Contenedor
            </div>
          </div>

          <div className={styles.clientBadge}>CLIENTE</div>
        </div>

        {/* Tier 3: Unidades de Apoyo */}
        <div className={`${styles.tierContainer} map-anim mirror-card`}>
          <div className={styles.tierHeader}>Unidades de Apoyo</div>
          <div className={styles.tierGrid}>
            <div className={`${styles.tierCard} mirror-card-white`}>Coord. de Operaciones</div>
            <div className={`${styles.tierCard} mirror-card-white`}>Analista de Operación</div>
            <div className={`${styles.tierCard} mirror-card-white`}>Vigilantes</div>
            <div className={`${styles.tierCard} mirror-card-white`}>Administración</div>
          </div>
        </div>
      </div>
    </section>
  );
}
