"use client";

import { useEffect, useRef } from "react";
import styles from "./Services.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Package, Anchor, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".bento-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
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
    <section className={styles.section} id="servicios" ref={sectionRef}>
      {/* Decorative logo lines */}
      <div className="decor-full">
        <svg width="100%" height="100%" viewBox="0 0 1440 1200" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100,200 C400,250 600,600 720,550 C840,500 1100,300 1540,350" stroke="#FFFFFF" strokeWidth="3.8" />
          <path d="M-80,230 C420,280 620,630 740,580 C860,530 1120,330 1560,380" stroke="#FFFFFF" strokeWidth="2.5" />
          <path d="M-120,170 C380,220 580,570 700,520 C820,470 1080,270 1520,320" stroke="#FFFFFF" strokeWidth="1.8" />
          
          <path d="M1540,650 C1100,700 900,1000 720,950 C540,900 300,750 -100,800" stroke="#FFFFFF" strokeWidth="3.5" />
          <path d="M1560,680 C1120,730 920,1030 740,980 C560,930 320,780 -80,830" stroke="#FFFFFF" strokeWidth="1.8" />
          <path d="M1520,620 C1080,670 880,970 700,920 C520,870 280,720 -120,770" stroke="#FFFFFF" strokeWidth="1.5" />
        </svg>
      </div>

      <div className={styles.header}>
        <h2 className={styles.title}>
          SOLUCIONES Y <span className={styles.highlight}>OPERACIONES DE RESGUARDO</span>
        </h2>
        <p className={styles.subtitle}>
          Diseñamos procedimientos de almacenamiento seguro y ejecutamos maniobras de precisión 
          diarias para la protección perimetral y física de sus activos.
        </p>
      </div>

      {/* Spacer / Anchor for Gallery */}
      <div className={styles.divider} id="galeria"></div>

      {/* Part 2: Operations Gallery (5 columns of image + text) */}
      <div className={styles.galleryGrid}>
        {/* Card 1: Gestión de Almacén */}
        <div className={`${styles.galleryCard} bento-card mirror-card`}>
          <div className={styles.galleryImageWrapper}>
            <img 
              src="/warehouse_management.jpg" 
              alt="Gestión de Almacén" 
              className={styles.galleryImage}
            />
          </div>
          <div className={styles.galleryCardBody}>
            <h3 className={styles.galleryCardTitle}>Gestión de Almacén</h3>
            <p className={styles.galleryCardDesc}>Monitoreo constante, optimización del espacio, control de inventario, planificación de recursos y aplicación de tecnologías emergentes.</p>
          </div>
        </div>

        {/* Card 2: Forklift */}
        <div className={`${styles.galleryCard} bento-card mirror-card`}>
          <div className={styles.galleryImageWrapper}>
            <img 
              src="/forklift-1.jpg" 
              alt="Maniobras de resguardo" 
              className={styles.galleryImage}
            />
          </div>
          <div className={styles.galleryCardBody}>
            <h3 className={styles.galleryCardTitle}>Maniobras con Montacargas</h3>
            <p className={styles.galleryCardDesc}>Operación especializada con montacargas de alta capacidad para la movilización y estiba segura de contenedores.</p>
          </div>
        </div>

        {/* Card 2: Blue-red stack */}
        <div className={`${styles.galleryCard} bento-card mirror-card`}>
          <div className={styles.galleryImageWrapper}>
            <img 
              src="/container-blue-red.jpg" 
              alt="Almacenaje de contenedores" 
              className={styles.galleryImage}
            />
          </div>
          <div className={styles.galleryCardBody}>
            <h3 className={styles.galleryCardTitle}>Estiba de Contenedores</h3>
            <p className={styles.galleryCardDesc}>Columnas organizadas y alineación estratégica de contenedores secos y de líneas aliadas en el patio de resguardo.</p>
          </div>
        </div>

        {/* Card 3: Reach stacker back */}
        <div className={`${styles.galleryCard} bento-card mirror-card`}>
          <div className={styles.galleryImageWrapper}>
            <img 
              src="/reachstacker-back.jpg" 
              alt="Maquinaria pesada" 
              className={`${styles.galleryImage} ${styles.galleryImageRight}`}
            />
          </div>
          <div className={styles.galleryCardBody}>
            <h3 className={styles.galleryCardTitle}>Operación de Reach Stacker</h3>
            <p className={styles.galleryCardDesc}>Apiladora de alto tonelaje ejecutando movimientos y posicionamiento vertical de contenedores con alta precisión.</p>
          </div>
        </div>

        {/* Card 4: Warehouse boxes */}
        <div className={`${styles.galleryCard} bento-card mirror-card`}>
          <div className={styles.galleryImageWrapper}>
            <img 
              src="/warehouse-boxes.jpg" 
              alt="Protección e inventario" 
              className={styles.galleryImage}
            />
          </div>
          <div className={styles.galleryCardBody}>
            <h3 className={styles.galleryCardTitle}>Verificación de Mercancía</h3>
            <p className={styles.galleryCardDesc}>Inspección física, embalaje y paletizado de cajas y productos directamente en los puntos de apertura y desconsolidación.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
