"use client";

import { useEffect, useRef } from "react";
import styles from "./Capacity.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import StorageMap3D from "./StorageMap3D";

gsap.registerPlugin(ScrollTrigger);

export default function Capacity() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // DOM element references for counters
  const z1Ref = useRef<HTMLSpanElement>(null);
  const z2Ref = useRef<HTMLSpanElement>(null);
  const z3Ref = useRef<HTMLSpanElement>(null);
  const z4Ref = useRef<HTMLSpanElement>(null);
  const totalRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animations
      gsap.fromTo(
        ".cap-anim",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.6)", scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
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

      // Sequential capacity counters animation
      const capValues = { z1: 0, z2: 0, z3: 0, z4: 0, total: 0 };
      
      const resetCounters = () => {
        if (z1Ref.current) z1Ref.current.textContent = "0";
        if (z2Ref.current) z2Ref.current.textContent = "0";
        if (z3Ref.current) z3Ref.current.textContent = "0";
        if (z4Ref.current) z4Ref.current.textContent = "0";
        if (totalRef.current) totalRef.current.textContent = "0";
        capValues.z1 = 0;
        capValues.z2 = 0;
        capValues.z3 = 0;
        capValues.z4 = 0;
        capValues.total = 0;
      };

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "restart reset restart reset",
          onLeave: resetCounters,
          onLeaveBack: resetCounters,
        }
      });

      timeline
        .to(capValues, {
          z1: 60,
          duration: 0.5,
          ease: "power1.out",
          onUpdate: () => {
            if (z1Ref.current) z1Ref.current.textContent = Math.round(capValues.z1).toString();
          }
        })
        .to(capValues, {
          z2: 120,
          duration: 0.7,
          ease: "power1.out",
          onUpdate: () => {
            if (z2Ref.current) z2Ref.current.textContent = Math.round(capValues.z2).toString();
          }
        })
        .to(capValues, {
          z3: 60,
          duration: 0.5,
          ease: "power1.out",
          onUpdate: () => {
            if (z3Ref.current) z3Ref.current.textContent = Math.round(capValues.z3).toString();
          }
        })
        .to(capValues, {
          z4: 168,
          duration: 0.8,
          ease: "power1.out",
          onUpdate: () => {
            if (z4Ref.current) z4Ref.current.textContent = Math.round(capValues.z4).toString();
          }
        })
        .to(capValues, {
          total: 408,
          duration: 1.0,
          ease: "power2.out",
          onUpdate: () => {
            if (totalRef.current) totalRef.current.textContent = Math.round(capValues.total).toString();
          }
        });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} id="capacidad" ref={sectionRef}>
      {/* Decorative logo lines */}
      <div className="decor-full">
        <svg width="100%" height="100%" viewBox="0 0 1440 600" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1540,100 C1100,150 900,450 720,400 C540,350 300,100 -100,150" stroke="#FFFFFF" strokeWidth="3.8" />
          <path d="M1560,130 C1120,180 920,480 740,430 C560,380 320,130 -80,180" stroke="#FFFFFF" strokeWidth="2.5" />
          <path d="M1590,160 C1150,210 950,510 770,460 C590,410 350,160 -50,210" stroke="#FFFFFF" strokeWidth="1.8" />
          <path d="M1490,70 C1050,120 850,420 670,370 C490,320 280,70 -120,120" stroke="#FFFFFF" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="cap-anim" style={{ flex: 1.2, width: '100%' }}>
        <StorageMap3D />
      </div>

      <div className={`${styles.capacity} cap-anim mirror-card`}>
        <h2 className={styles.title}>Capacidad Máxima</h2>
        <ul className={styles.capList}>
          <li className={styles.capItem}><span>Zona de almacenamiento 1</span> <span><span ref={z1Ref}>0</span> contenedores</span></li>
          <li className={styles.capItem}><span>Zona de almacenamiento 2</span> <span><span ref={z2Ref}>0</span> contenedores</span></li>
          <li className={styles.capItem}><span>Zona de almacenamiento 3</span> <span><span ref={z3Ref}>0</span> contenedores</span></li>
          <li className={styles.capItem}><span>Zona de almacenamiento 4</span> <span><span ref={z4Ref}>0</span> contenedores</span></li>
        </ul>
        <div className={styles.total}>Total de <span ref={totalRef}>0</span> contenedores</div>
      </div>
    </section>
  );
}
