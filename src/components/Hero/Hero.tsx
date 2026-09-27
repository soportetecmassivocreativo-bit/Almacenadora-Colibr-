"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Hero.module.css";
import gsap from "gsap";
import { ShieldCheck } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-anim",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",
          delay: 0.2,
        }
      );

      gsap.fromTo(
        `.${styles.shape1}, .${styles.shape2}`,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero} id="inicio" ref={containerRef}>
      {/* Background Real Video Loop */}
      <video
        src="/Video Colibri (1).webm"
        autoPlay
        loop
        muted
        playsInline
        className={styles.backgroundVideo}
      ></video>

      <div className={styles.shape1}></div>
      <div className={styles.shape2}></div>
      
      <div className={styles.content}>
        <div className={`${styles.badge} hero-anim`}>
          <ShieldCheck size={16} className={styles.badgeIcon} />
          <span>Almacenadora Aduanal Verificada • Punto Fijo</span>
        </div>
        <h1 className={`${styles.title} hero-anim`}>
          ALMACENADORA <br />
          <span className={styles.highlight}>COLIBRÍ</span>
        </h1>
        <p className={`${styles.subtitle} hero-anim`}>
          TU CARGA NUESTRA RESPONSABILIDAD
        </p>
        <p className={`${styles.description} hero-anim`}>
          Centro especializado en el depósito, custodia y resguardo estratégico de contenedores. 
          Infraestructura fortificada y control de inventario de alta precisión para la protección perimetral y física de sus activos.
        </p>
        <div className={`${styles.ctaGroup} hero-anim`}>
          <div className={styles.btnWrapper1}>
            <Link href="#contacto" className={styles.primaryBtn}>
              Comenzar ahora
            </Link>
          </div>
          <div className={styles.btnWrapper2}>
            <Link href="#servicios" className={styles.secondaryBtn}>
              Nuestros servicios
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
