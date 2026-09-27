"use client";

import Link from "next/link";
import styles from "./Footer.module.css";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        {/* Column 1: Brand & Description & Social Buttons */}
        <div className={styles.brand}>
          <Link href="#inicio" className={styles.logo}>
            <img src="/Logo-white.png" alt="Almacenadora Colibrí" className={styles.logoImage} />
          </Link>
          <p className={styles.desc}>
            Ofrecemos soluciones de almacenamiento y resguardo especializado de contenedores. Tu aliado estratégico en almacenamiento seguro y eficiente.
          </p>
          <div className={styles.socialButtons}>
            <a href="https://wa.me/584129851553" target="_blank" rel="noopener noreferrer" className={styles.socialCircle} aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/almacenadoracolibri/" target="_blank" rel="noopener noreferrer" className={styles.socialCircle} aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@almacenadoracolibri" target="_blank" rel="noopener noreferrer" className={styles.socialCircle} aria-label="TikTok">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Servicios */}
        <div className={styles.col}>
          <h4>Servicios</h4>
          <ul>
            <li><Link href="#procedimientos">Recepción e Inspección</Link></li>
            <li><Link href="#mapa-procesos">Regulación</Link></li>
            <li><Link href="#servicios">Plan de Movimiento</Link></li>
            <li><Link href="#tipos-de-carga">Clasificación Detallada</Link></li>
          </ul>
        </div>

        {/* Column 3: Navegación */}
        <div className={styles.col}>
          <h4>Navegación</h4>
          <ul>
            <li><Link href="#inicio">Inicio</Link></li>
            <li><Link href="#nosotros">Nosotros</Link></li>
            <li><Link href="#procedimientos">Procedimientos</Link></li>
            <li><Link href="#mapa-procesos">Mapa de Procesos</Link></li>
            <li><Link href="#servicios">Servicios</Link></li>
            <li><Link href="#tipos-de-carga">Tipos de Carga</Link></li>
            <li><Link href="#contacto">Contacto</Link></li>
          </ul>
        </div>

        {/* Column 4: Oficina Principal & RIF */}
        <div className={styles.col}>
          <h4>Oficina Principal</h4>
          <div className={styles.contactList}>
            <a 
              href="https://www.google.com/maps/place/11%C2%B044'49.6%22N+70%C2%B009'13.5%22W/@11.747102,-70.156321,17z/data=!3m1!4b1!4m4!3m3!8m2!3d11.747102!4d-70.1537461?entry=ttu" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.contactItemLink}
            >
              <div className={styles.contactItem}>
                <MapPin size={18} className={styles.contactIcon} />
                <span>11°44'49.6"N 70°09'13.5"W, Judibana, Falcón</span>
              </div>
            </a>
            <a 
              href="https://wa.me/584129851553" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.contactItemLink}
            >
              <div className={styles.contactItem}>
                <Phone size={18} className={styles.contactIcon} />
                <span>Teléfono: 0412-9851553</span>
              </div>
            </a>
            <a 
              href="#" 
              onClick={(e) => { 
                e.preventDefault(); 
                window.dispatchEvent(new CustomEvent("open-email-modal")); 
              }} 
              className={styles.contactItemLink}
            >
              <div className={styles.contactItem}>
                <Mail size={18} className={styles.contactIcon} />
                <span>Correo: colibrialmacenadora@gmail.com</span>
              </div>
            </a>
          </div>
          <div className={styles.rifBadge}>
            RIF: J-506213940
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Almacenadora Colibrí C.A. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
