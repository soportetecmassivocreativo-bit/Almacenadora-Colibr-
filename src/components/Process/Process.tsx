"use client";

import { useEffect, useRef } from "react";
import styles from "./Process.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRightCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".process-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
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
    <section className={styles.section} id="procedimientos" ref={containerRef}>
      {/* Decorative logo lines */}
      <div className="decor-full">
        <svg width="100%" height="100%" viewBox="0 0 1440 700" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1540,100 C1100,150 900,450 720,400 C540,350 300,100 -100,150" stroke="#FFFFFF" strokeWidth="3.8" />
          <path d="M1560,130 C1120,180 920,480 740,430 C560,380 320,130 -80,180" stroke="#FFFFFF" strokeWidth="2.5" />
          <path d="M1520,70 C1080,120 880,420 700,370 C520,320 280,70 -120,120" stroke="#FFFFFF" strokeWidth="2.0" />
          <path d="M1590,160 C1150,210 950,510 770,460 C590,410 350,160 -50,210" stroke="#FFFFFF" strokeWidth="1.8" />
          <path d="M1490,40 C1050,90 850,390 670,340 C490,290 250,40 -150,90" stroke="#FFFFFF" strokeWidth="1.5" />
          <path d="M240,100 C100,250 200,450 50,550" stroke="#FFFFFF" strokeWidth="3.0" />
          <path d="M260,120 C120,270 220,470 70,570" stroke="#FFFFFF" strokeWidth="1.8" />
        </svg>
      </div>

      <div className={styles.header}>
        <h2 className={styles.title}>Nuestros Procedimientos</h2>
        <div className={styles.subtitle}>Forma de administración</div>
      </div>

      <div className={styles.grid}>
        <div className={`${styles.card} process-card mirror-card`}>
          <div className={styles.cardImageContainer}>
            <img src="/images/proc_recepcion.jpg" alt="Recepción e inspección" className={styles.cardImage} />
          </div>
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}><ArrowRightCircle className={styles.icon} size={20} /> Recepción e inspección</h3>
            <p className={styles.cardText}>
              Acción de recepción y revisión detallada de carga con registro fotográfico y levantamiento de checklist de condiciones del contenedor, verifica su estado físico y detección de daños o irregularidades, así como la revisión de documentos.
            </p>
          </div>
        </div>

        <div className={`${styles.card} process-card mirror-card`}>
          <div className={styles.cardImageContainer}>
            <img src="/images/proc_almacenamiento.jpg" alt="Almacenamiento" className={styles.cardImage} />
          </div>
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}><ArrowRightCircle className={styles.icon} size={20} /> Almacenamiento</h3>
            <p className={styles.cardText}>
              Corresponde a la organización del área de almacenamiento según el tipo de carga y/o frecuencia de movimiento. Registrando ubicación de contenedores, disponibilidad de espacio, tipos de carga, estatus, inventarios, tiempos de permanencia y entradas/salidas.
            </p>
          </div>
        </div>

        <div className={`${styles.card} process-card mirror-card`}>
          <div className={styles.cardImageContainer}>
            <img src="/images/proc_clasificacion.jpg" alt="Clasificación detallada" className={styles.cardImage} />
          </div>
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}><ArrowRightCircle className={styles.icon} size={20} /> Clasificación detallada</h3>
            <p className={styles.cardText}>
              Por Tamaño; Por Tipo de Carga; Por Destino; Por Prioridad de Despacho.
            </p>
          </div>
        </div>

        <div className={`${styles.card} process-card mirror-card`}>
          <div className={styles.cardImageContainer}>
            <img src="/images/proc_prioridad.jpg" alt="Orden de prioridad" className={styles.cardImage} />
          </div>
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}><ArrowRightCircle className={styles.icon} size={20} /> Orden de prioridad</h3>
            <p className={styles.cardText}>
              Es una práctica estratégica en la organización del almacén principal basados en la directriz de Almacenadora Colibrí de dar respuesta efectivas y eficaces a sus clientes en términos de tiempo y calidad del servicio y se prioriza considerando múltiples factores.
            </p>
          </div>
        </div>

        <div className={`${styles.card} process-card mirror-card`}>
          <div className={styles.cardImageContainer}>
            <img src="/images/proc_equipos.jpg" alt="Equipos" className={styles.cardImage} />
          </div>
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}><ArrowRightCircle className={styles.icon} size={20} /> Equipos</h3>
            <p className={styles.cardText}>
              Uso de reach stacker, grúas, montacargas bajo las más estrictas normas de seguridad para maniobras seguras.
            </p>
          </div>
        </div>

        <div className={`${styles.card} process-card mirror-card`}>
          <div className={styles.cardImageContainer}>
            <img src="/images/proc_plan_movimiento.jpg" alt="Plan de movimiento" className={styles.cardImage} />
          </div>
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}><ArrowRightCircle className={styles.icon} size={20} /> Plan de movimiento</h3>
            <p className={styles.cardText}>
              Plan detallado de estiba para la coordinación eficiente de movimientos según las demandas entrada y salida de contenedores.
            </p>
          </div>
        </div>

        <div className={`${styles.card} process-card mirror-card`}>
          <div className={styles.cardImageContainer}>
            <img src="/images/proc_certificaciones.jpg" alt="Certificaciones y cap." className={styles.cardImage} />
          </div>
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}><ArrowRightCircle className={styles.icon} size={20} /> Certificaciones y cap.</h3>
            <p className={styles.cardText}>
              Todos los operadores están debidamente certificados y en permanente capacitación en pro de las mejoras o cambios de tecnología y mejoras en los equipos.
            </p>
          </div>
        </div>

        <div className={`${styles.card} ${styles.securityCard} process-card mirror-card`}>
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>Vigilancia y Seguridad</h3>
            <ul className={styles.securityList}>
              <li className={styles.securityItem}><div className={`${styles.circle} ${styles.cRed}`}></div> Control de acceso</li>
              <li className={styles.securityItem}><div className={`${styles.circle} ${styles.cYellow}`}></div> Sistema de vigilancia integrado</li>
              <li className={styles.securityItem}><div className={`${styles.circle} ${styles.cBlue}`}></div> Protocolos</li>
              <li className={styles.securityItem}><div className={`${styles.circle} ${styles.cCyan}`}></div> Énfasis en la vigilancia (Inventarios)</li>
              <li className={styles.securityItem}><div className={`${styles.circle} ${styles.cOrange}`}></div> Integridad de contenedores</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
