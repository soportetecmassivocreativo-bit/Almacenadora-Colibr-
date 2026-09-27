"use client";

import { useEffect, useRef } from "react";
import styles from "./Gallery.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gallery-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} id="galeria" ref={containerRef}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Nuestra <span className={styles.highlight}>Operación</span>
        </h2>
        <p className={styles.subtitle}>
          Vistazo real de nuestro patio de almacenamiento y las maniobras de alta precisión ejecutadas diariamente para proteger tu carga.
        </p>
      </div>

      <div className={styles.grid}>
        {/* Card 1: Forklift */}
        <div className={`${styles.card} gallery-card`}>
          <div className={styles.imageWrapper}>
            <img 
              src="/forklift-1.jpg" 
              alt="Maniobras de resguardo" 
              className={styles.image}
            />
          </div>
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>Maniobras con Montacargas</h3>
            <p className={styles.cardDesc}>Operación especializada con montacargas de alta capacidad para la movilización y estiba segura de contenedores.</p>
          </div>
        </div>

        {/* Card 2: Blue-red stack */}
        <div className={`${styles.card} gallery-card`}>
          <div className={styles.imageWrapper}>
            <img 
              src="/container-blue-red.jpg" 
              alt="Almacenaje de contenedores" 
              className={styles.image}
            />
          </div>
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>Estiba de Contenedores</h3>
            <p className={styles.cardDesc}>Columnas organizadas y alineación estratégica de contenedores secos y de líneas aliadas en el patio de resguardo.</p>
          </div>
        </div>

        {/* Card 3: Reach stacker back */}
        <div className={`${styles.card} gallery-card`}>
          <div className={styles.imageWrapper}>
            <img 
              src="/reachstacker-back.jpg" 
              alt="Maquinaria pesada" 
              className={`${styles.image} ${styles.imageRight}`}
            />
          </div>
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>Operación de Reach Stacker</h3>
            <p className={styles.cardDesc}>Apiladora de alto tonelaje ejecutando movimientos y posicionamiento vertical de contenedores con alta precisión.</p>
          </div>
        </div>

        {/* Card 4: Warehouse boxes */}
        <div className={`${styles.card} gallery-card`}>
          <div className={styles.imageWrapper}>
            <img 
              src="/warehouse-boxes.jpg" 
              alt="Protección e inventario" 
              className={styles.image}
            />
          </div>
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>Verificación de Mercancía</h3>
            <p className={styles.cardDesc}>Inspección física, embalaje y paletizado de cajas y productos directamente en los puntos de apertura y desconsolidación.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
