"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ContactSection.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-anim",
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.2,
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

  useEffect(() => {
    const handleOpenEmailModal = () => setIsModalOpen(true);
    window.addEventListener("open-email-modal", handleOpenEmailModal);
    return () => window.removeEventListener("open-email-modal", handleOpenEmailModal);
  }, []);

  return (
    <section className={styles.section} id="contacto" ref={containerRef}>
      {/* Decorative logo lines */}
      <div className="decor-full">
        <svg width="100%" height="100%" viewBox="0 0 1440 600" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100,150 C300,100 500,500 720,400 C940,300 1100,100 1540,150" stroke="#FFFFFF" strokeWidth="3.8" />
          <path d="M-80,180 C320,130 520,530 740,430 C960,330 1120,130 1560,180" stroke="#FFFFFF" strokeWidth="2.5" />
          <path d="M-120,120 C280,70 480,470 700,370 C920,270 1080,70 1520,120" stroke="#FFFFFF" strokeWidth="2.0" />
          <path d="M-50,220 C350,170 550,570 770,470 C990,370 1150,170 1590,220" stroke="#FFFFFF" strokeWidth="1.8" />
        </svg>
      </div>
      <div className={styles.container}>
        {/* Left column wrapped in a text card */}
        <div className={`${styles.left} ${styles.leftCard} contact-anim mirror-card`}>
          <span className={styles.tag}>CONTACTO</span>
          <h2 className={styles.title}>
            Solicitar <span className={styles.highlight}>Cotización.</span>
          </h2>
          <p className={styles.desc}>
            Comunícate para recibir un presupuesto que se ajuste a tus necesidades de resguardo, protección y almacenamiento de contenedores. ¿Buscas crear una alianza comercial? Envíanos tu mensaje.
          </p>
          <div className={styles.buttons}>
            <button 
              onClick={() => setIsModalOpen(true)}
              className={styles.btnPrimary}
              style={{ cursor: 'pointer' }}
            >
              Solicitar Cotización
            </button>
            <a 
              href="https://wa.me/584129851553" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.btnSecondary}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              Contactar por WhatsApp
            </a>
          </div>
        </div>

        {/* Right column (Info Card) */}
        <div className={`${styles.right} contact-anim`}>
          <div className={`${styles.card} mirror-card`}>
            {/* WhatsApp Phone Group */}
            <a 
              href="https://wa.me/584129851553" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.infoGroupLink}
            >
              <div className={styles.infoGroup}>
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                </div>
                <div className={styles.infoContent}>
                  <span className={styles.infoLabel}>Llámanos</span>
                  <span className={styles.infoValue}>0412-9851553</span>
                </div>
              </div>
            </a>

            {/* Email Group */}
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} 
              className={styles.infoGroupLink}
            >
              <div className={styles.infoGroup}>
                <div className={styles.iconWrapper}>
                  <Mail size={24} />
                </div>
                <div className={styles.infoContent}>
                  <span className={styles.infoLabel}>Escríbenos</span>
                  <span className={styles.infoValue}>colibrialmacenadora@gmail.com</span>
                </div>
              </div>
            </a>

            {/* Address Group */}
            <a 
              href="https://www.google.com/maps/place/11%C2%B044'49.6%22N+70%C2%B009'13.5%22W/@11.747102,-70.156321,17z/data=!3m1!4b1!4m4!3m3!8m2!3d11.747102!4d-70.1537461?entry=ttu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.infoGroupLink}
            >
              <div className={styles.infoGroup}>
                <div className={styles.iconWrapper}>
                  <MapPin size={24} />
                </div>
                <div className={styles.infoContent}>
                  <span className={styles.infoLabel}>Visítanos</span>
                  <span className={styles.infoValue}>
                    11°44'49.6"N 70°09'13.5"W, Judibana, Falcón
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* Modal para selección de cliente de correo */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={`${styles.modalContent} mirror-card`} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setIsModalOpen(false)}>
              &times;
            </button>
            
            <h3 className={styles.modalTitle}>¿Cómo deseas enviarnos tu correo?</h3>
            <p className={styles.modalDesc}>
              Selecciona tu proveedor de correo para redactar tu solicitud de cotización directamente.
            </p>
            
            <div className={styles.providerGrid}>
              {/* Opción Gmail */}
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=colibrialmacenadora@gmail.com&su=Solicitud%20de%20Cotizacion%20-%20Almacenadora%20Colibri"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.providerCard}
                onClick={() => setIsModalOpen(false)}
              >
                <div className={`${styles.providerIcon} ${styles.gmailBg}`}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <span>Gmail</span>
              </a>

              {/* Opción Outlook / Hotmail */}
              <a 
                href="https://outlook.live.com/mail/0/deeplink/compose?to=colibrialmacenadora@gmail.com&subject=Solicitud%20de%20Cotizacion%20-%20Almacenadora%20Colibri"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.providerCard}
                onClick={() => setIsModalOpen(false)}
              >
                <div className={`${styles.providerIcon} ${styles.outlookBg}`}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-4H6V8h12v4z"/>
                  </svg>
                </div>
                <span>Outlook / Hotmail</span>
              </a>

              {/* Opción Default App / Mailto */}
              <a 
                href="mailto:colibrialmacenadora@gmail.com?subject=Solicitud%20de%20Cotizaci%C3%B3n%20-%20Almacenadora%20Colibr%C3%AD"
                className={styles.providerCard}
                onClick={() => setIsModalOpen(false)}
              >
                <div className={`${styles.providerIcon} ${styles.defaultBg}`}>
                  <Mail size={24} />
                </div>
                <span>Aplicación Local</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
