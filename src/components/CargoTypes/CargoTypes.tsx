"use client";

import { useEffect, useRef } from "react";
import styles from "./CargoTypes.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Package, Layers, Snowflake } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CargoTypes() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cargo-card",
        { y: 40, opacity: 0 },
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
    <section className={styles.section} id="tipos-de-carga" ref={containerRef}>
      {/* Decorative logo lines */}
      <div className="decor-full">
        <svg width="100%" height="100%" viewBox="0 0 1440 700" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100,150 C300,200 600,600 720,500 C840,400 1100,100 1540,150" stroke="#FFFFFF" strokeWidth="3.8" />
          <path d="M-80,180 C320,230 620,630 740,530 C860,430 1120,130 1560,180" stroke="#FFFFFF" strokeWidth="2.5" />
          <path d="M-60,210 C340,260 640,660 760,560 C880,460 1140,160 1580,210" stroke="#FFFFFF" strokeWidth="1.8" />
          <path d="M-120,120 C280,170 580,570 700,470 C820,370 1080,70 1520,120" stroke="#FFFFFF" strokeWidth="1.5" />
        </svg>
      </div>

      <div className={styles.header}>
        <h2 className={styles.title}>
          ¿Cuáles son los tipos de <span className={styles.highlight}>CARGA</span>?
        </h2>
        <p className={styles.subtitle}>
          Especializados en el resguardo, protección y clasificación de mercancías adaptadas a sus necesidades de almacenamiento.
        </p>
      </div>

      <div className={styles.grid}>
        {/* Type 1: Carga General */}
        <div className={`${styles.card} cargo-card mirror-card`}>
          <img src="/cargo-general.jpg" alt="Carga General" className={styles.cardImage} />
          <div className={styles.cardTop}>
            <div className={styles.iconWrapper}>
              <Package size={28} />
            </div>
            <h3 className={styles.cardTitle}>
              CARGA <span>General</span>
            </h3>
            <p className={styles.cardDesc}>
              Son productos embalados o empaquetados de manera individual para facilitar su manipulación y control.
            </p>
          </div>
          <div>
            <div className={styles.listTitle}>Ejemplos de Carga:</div>
            <div className={styles.exampleList}>
              <span className={styles.exampleTag}>Alimentos empacados</span>
              <span className={styles.exampleTag}>Ropa</span>
              <span className={styles.exampleTag}>Repuestos</span>
              <span className={styles.exampleTag}>Equipos electrónicos</span>
            </div>
          </div>
        </div>

        {/* Type 2: Carga a Granel */}
        <div className={`${styles.card} cargo-card mirror-card`}>
          <img src="/cargo-bulk.jpg" alt="Carga a Granel" className={styles.cardImage} />
          <div className={styles.cardTop}>
            <div className={styles.iconWrapper}>
              <Layers size={28} />
            </div>
            <h3 className={styles.cardTitle}>
              CARGA <span>a Granel</span>
            </h3>
            <p className={styles.cardDesc}>
              Conformada por productos que se movilizan en grandes cantidades sin empaque individual.
            </p>
          </div>
          <div>
            <div className={styles.listTitle}>Ejemplos de Carga:</div>
            <div className={styles.exampleList}>
              <span className={styles.exampleTag}>Trigo</span>
              <span className={styles.exampleTag}>Maíz</span>
              <span className={styles.exampleTag}>Carbón</span>
              <span className={styles.exampleTag}>Combustibles</span>
              <span className={styles.exampleTag}>Aceites</span>
            </div>
          </div>
        </div>

        {/* Type 3: Carga Refrigerada */}
        <div className={`${styles.card} cargo-card mirror-card`}>
          <img src="/cargo-reefer.jpg" alt="Carga Refrigerada" className={styles.cardImage} />
          <div className={styles.cardTop}>
            <div className={styles.iconWrapper}>
              <Snowflake size={28} />
            </div>
            <h3 className={styles.cardTitle}>
              CARGA <span>Refrigerada</span>
            </h3>
            <p className={styles.cardDesc}>
              Incluye productos que necesitan mantenerse a temperaturas controladas para conservar su calidad y evitar daños durante el traslado y almacenamiento.
            </p>
          </div>
          <div>
            <div className={styles.listTitle}>Ejemplos de Carga:</div>
            <div className={styles.exampleList}>
              <span className={styles.exampleTag}>Carnes</span>
              <span className={styles.exampleTag}>Frutas</span>
              <span className={styles.exampleTag}>Lácteos</span>
              <span className={styles.exampleTag}>Vacunas</span>
              <span className={styles.exampleTag}>Medicamentos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
