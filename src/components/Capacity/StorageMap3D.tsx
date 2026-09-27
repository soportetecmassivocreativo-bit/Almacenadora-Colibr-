"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./StorageMap3D.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function StorageMap3D() {
  const [activeZone, setActiveZone] = useState<number | null>(null);

  // Refs for animated numbers
  const z1Ref = useRef<SVGTextElement>(null);
  const z2Ref = useRef<SVGTextElement>(null);
  const z3Ref = useRef<SVGTextElement>(null);
  const z4Ref = useRef<SVGTextElement>(null);

  useEffect(() => {
    // Javascript object to hold current values during GSAP tween
    const counterObj = { z1: 0, z2: 0, z3: 0, z4: 0 };

    const ctx = gsap.context(() => {
      gsap.to(counterObj, {
        z1: 60,
        z2: 120,
        z3: 60,
        z4: 168,
        duration: 2.0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: z1Ref.current,
          start: "top 90%",
          toggleActions: "restart reset restart reset", // Count up when entering, reset to 0 when leaving (top or bottom)
        },
        onUpdate: () => {
          if (z1Ref.current) z1Ref.current.textContent = Math.round(counterObj.z1).toString();
          if (z2Ref.current) z2Ref.current.textContent = Math.round(counterObj.z2).toString();
          if (z3Ref.current) z3Ref.current.textContent = Math.round(counterObj.z3).toString();
          if (z4Ref.current) z4Ref.current.textContent = Math.round(counterObj.z4).toString();
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={`${styles.mapContainer} mirror-card`}>
      {/* Title block */}
      <div className={styles.techHeader}>
        <div className={styles.techTitle}>DIAGRAMA VECTORIAL DE CAPACIDAD</div>
        <div className={styles.techSubtitle}>CONTROL DE DISTRIBUCIÓN Y APILAMIENTO DE CONTENEDORES</div>
      </div>

      <div className={styles.svgWrapper}>
        <svg
          viewBox="0 0 600 440"
          className={styles.svg}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Defs for dropshadow and gradients */}
          <defs>
            <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.45" />
            </filter>
            
            {/* Gradients for the 2D rectangles */}
            <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(40, 149, 222, 0.22)" />
              <stop offset="100%" stopColor="rgba(40, 149, 222, 0.08)" />
            </linearGradient>
            <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(245, 132, 3, 0.22)" />
              <stop offset="100%" stopColor="rgba(245, 132, 3, 0.08)" />
            </linearGradient>
            <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(191, 0, 17, 0.22)" />
              <stop offset="100%" stopColor="rgba(191, 0, 17, 0.08)" />
            </linearGradient>
            <linearGradient id="navyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(13, 59, 96, 0.35)" />
              <stop offset="100%" stopColor="rgba(13, 59, 96, 0.15)" />
            </linearGradient>
          </defs>

          {/* Background clean blueprint grid lines - subtle */}
          <g stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1">
            <line x1="118" y1="0" x2="118" y2="440" />
            <line x1="253" y1="0" x2="253" y2="440" />
            <line x1="263" y1="0" x2="263" y2="440" />
            <line x1="483" y1="0" x2="483" y2="440" />
            <line x1="0" y1="80" x2="600" y2="80" />
            <line x1="0" y1="215" x2="600" y2="215" />
            <line x1="0" y1="380" x2="600" y2="380" />
          </g>

          {/* Background clean blueprint grid lines - subtle, dark on light background */}
          <g stroke="rgba(0, 0, 0, 0.04)" strokeWidth="1">
            <line x1="118" y1="0" x2="118" y2="440" />
            <line x1="253" y1="0" x2="253" y2="440" />
            <line x1="263" y1="0" x2="263" y2="440" />
            <line x1="483" y1="0" x2="483" y2="440" />
            <line x1="0" y1="80" x2="600" y2="80" />
            <line x1="0" y1="215" x2="600" y2="215" />
            <line x1="0" y1="380" x2="600" y2="380" />
          </g>

          {/* ==================== PARKING LOT (Top Left, y=80 to 190, next to Zona 1) ==================== */}
          <g className={styles.parkingArea}>
            {/* Parking Outer Boundary */}
            <rect x="15" y="80" width="90" height="110" rx="8" fill="rgba(0,0,0,0.01)" stroke="rgba(0,0,0,0.12)" strokeWidth="1.2" strokeDasharray="3,1" />
            
            {/* Vertical Road-Painted Label inside the parking lot on the right side channel */}
            <text
              x="84"
              y="135"
              textAnchor="middle"
              transform="rotate(-90 84 135)"
              fill="#000000"
              fontSize="7.2"
              fontWeight="bold"
              letterSpacing="1.2"
              fontFamily="var(--font-primary)"
            >
              ESTACIONAMIENTO
            </text>

            {/* Parking Bay Lines */}
            <line x1="15" y1="102" x2="70" y2="102" stroke="rgba(0,0,0,0.1)" strokeWidth="0.8" />
            <line x1="15" y1="124" x2="70" y2="124" stroke="rgba(0,0,0,0.1)" strokeWidth="0.8" />
            <line x1="15" y1="146" x2="70" y2="146" stroke="rgba(0,0,0,0.1)" strokeWidth="0.8" />
            <line x1="15" y1="168" x2="70" y2="168" stroke="rgba(0,0,0,0.1)" strokeWidth="0.8" />
            <line x1="15" y1="190" x2="70" y2="190" stroke="rgba(0,0,0,0.1)" strokeWidth="0.8" />

            {/* 3 Detailed Cars */}
            {/* Slot 1: Parked Blue Car */}
            <g>
              <rect x="22" y="86" width="28" height="11" rx="2" fill="#1C6CA1" stroke="#2895DE" strokeWidth="0.8" />
              <rect x="29" y="88" width="10" height="7" rx="1" fill="#141926" />
              <rect x="32" y="89" width="4" height="5" fill="#FFFFFF" opacity="0.6" />
            </g>
            
            {/* Slot 2: Empty with "P" */}
            <text x="42.5" y="117" textAnchor="middle" fill="rgba(0,0,0,0.25)" fontSize="8.5" fontFamily="var(--font-primary)" fontWeight="bold">P</text>
            
            {/* Slot 3: Parked Orange Car */}
            <g>
              <rect x="22" y="130" width="28" height="11" rx="2" fill="#C46902" stroke="#F58403" strokeWidth="0.8" />
              <rect x="29" y="132" width="10" height="7" rx="1" fill="#141926" />
              <rect x="32" y="133" width="4" height="5" fill="#FFFFFF" opacity="0.6" />
            </g>
            
            {/* Slot 4: Empty with "P" */}
            <text x="42.5" y="161" textAnchor="middle" fill="rgba(0,0,0,0.25)" fontSize="8.5" fontFamily="var(--font-primary)" fontWeight="bold">P</text>
            
            {/* Slot 5: Parked Red Car */}
            <g>
              <rect x="22" y="174" width="28" height="11" rx="2" fill="#99000D" stroke="#BF0011" strokeWidth="0.8" />
              <rect x="29" y="176" width="10" height="7" rx="1" fill="#141926" />
              <rect x="32" y="177" width="4" height="5" fill="#FFFFFF" opacity="0.6" />
            </g>
          </g>

          {/* ==================== BATHROOM CUBICLES (Middle, y=205 to 245) ==================== */}
          <g className={styles.bathroomArea}>
            {/* Cubicles outer boundary */}
            <rect x="22" y="202" width="76" height="24" rx="3" fill="rgba(0,0,0,0.01)" stroke="#BF0011" strokeWidth="1.2" />
            
            {/* Inner division walls */}
            <line x1="47" y1="202" x2="47" y2="226" stroke="#BF0011" strokeWidth="0.8" />
            <line x1="73" y1="202" x2="73" y2="226" stroke="#BF0011" strokeWidth="0.8" />
            
            {/* Small doors representations */}
            <line x1="28" y1="226" x2="33" y2="229" stroke="#BF0011" strokeWidth="1" />
            <line x1="53" y1="226" x2="58" y2="229" stroke="#BF0011" strokeWidth="1" />
            <line x1="79" y1="226" x2="84" y2="229" stroke="#BF0011" strokeWidth="1" />
            
            <text x="60" y="242" textAnchor="middle" fill="#000000" fontSize="8" fontWeight="bold" letterSpacing="0.3" fontFamily="var(--font-primary)">BAÑOS</text>
          </g>

          {/* ==================== ADMINISTRATIVE OFFICES AS 2 CONTAINERS (Bottom Left, y=260 to 350, next to Zona 3) ==================== */}
          <g className={styles.adminArea}>
            {/* Offices Block boundary */}
            <rect x="15" y="260" width="90" height="90" rx="8" fill="rgba(0,0,0,0.01)" stroke="rgba(0,0,0,0.12)" strokeWidth="1.2" strokeDasharray="3,1" />
            
            {/* Container 1 */}
            <g>
              <rect x="20" y="272" width="80" height="22" rx="2" fill="rgba(40,149,222,0.15)" stroke="#2895DE" strokeWidth="1.2" />
              {/* Corrugated ribs */}
              <line x1="28" y1="272" x2="28" y2="294" stroke="#2895DE" strokeWidth="0.6" opacity="0.6" />
              <line x1="36" y1="272" x2="36" y2="294" stroke="#2895DE" strokeWidth="0.6" opacity="0.6" />
              <line x1="44" y1="272" x2="44" y2="294" stroke="#2895DE" strokeWidth="0.6" opacity="0.6" />
              <line x1="52" y1="272" x2="52" y2="294" stroke="#2895DE" strokeWidth="0.6" opacity="0.6" />
              <line x1="60" y1="272" x2="60" y2="294" stroke="#2895DE" strokeWidth="0.6" opacity="0.6" />
              <line x1="68" y1="272" x2="68" y2="294" stroke="#2895DE" strokeWidth="0.6" opacity="0.6" />
              <line x1="76" y1="272" x2="76" y2="294" stroke="#2895DE" strokeWidth="0.6" opacity="0.6" />
              <line x1="84" y1="272" x2="84" y2="294" stroke="#2895DE" strokeWidth="0.6" opacity="0.6" />
              <line x1="92" y1="272" x2="92" y2="294" stroke="#2895DE" strokeWidth="0.6" opacity="0.6" />
            </g>

            {/* Container 2 */}
            <g>
              <rect x="20" y="300" width="80" height="22" rx="2" fill="rgba(40,149,222,0.15)" stroke="#2895DE" strokeWidth="1.2" />
              {/* Corrugated ribs */}
              <line x1="28" y1="300" x2="28" y2="322" stroke="#2895DE" strokeWidth="0.6" opacity="0.6" />
              <line x1="36" y1="300" x2="36" y2="322" stroke="#2895DE" strokeWidth="0.6" opacity="0.6" />
              <line x1="44" y1="300" x2="44" y2="322" stroke="#2895DE" strokeWidth="0.6" opacity="0.6" />
              <line x1="52" y1="300" x2="52" y2="322" stroke="#2895DE" strokeWidth="0.6" opacity="0.6" />
              <line x1="60" y1="300" x2="60" y2="322" stroke="#2895DE" strokeWidth="0.6" opacity="0.6" />
              <line x1="68" y1="300" x2="68" y2="322" stroke="#2895DE" strokeWidth="0.6" opacity="0.6" />
              <line x1="76" y1="300" x2="76" y2="322" stroke="#2895DE" strokeWidth="0.6" opacity="0.6" />
              <line x1="84" y1="300" x2="84" y2="322" stroke="#2895DE" strokeWidth="0.6" opacity="0.6" />
              <line x1="92" y1="300" x2="92" y2="322" stroke="#2895DE" strokeWidth="0.6" opacity="0.6" />
            </g>
            
            <text x="60" y="342" textAnchor="middle" fill="#000000" fontSize="8" fontWeight="bold" letterSpacing="0.3" fontFamily="var(--font-primary)">OFICINAS</text>
          </g>

          {/* ==================== ZONA 4 (Bottom Right, 168 Cap - Largest) ==================== */}
          <g
            className={`${styles.zoneGroup} ${activeZone === 4 ? styles.active : ""}`}
            onMouseEnter={() => setActiveZone(4)}
            onMouseLeave={() => setActiveZone(null)}
          >
            <rect
              x="263"
              y="200"
              width="220"
              height="160"
              rx="12"
              fill="url(#navyGrad)"
              stroke="#0d3b60"
              strokeWidth="2"
              className={styles.zoneRect}
            />
            {/* Capacity number written inside the square */}
            <text
              ref={z4Ref}
              x="373"
              y="290"
              textAnchor="middle"
              className={styles.capText}
              fill="#FFFFFF"
            >
              0
            </text>
          </g>

          {/* ==================== REFRIGERATED CARGO AREA (Top Right, y=80 to 190, next to Zona 2) ==================== */}
          <g className={styles.reeferArea}>
            {/* Reefers block boundary */}
            <rect x="490" y="80" width="90" height="110" rx="8" fill="rgba(0,0,0,0.01)" stroke="rgba(0,0,0,0.12)" strokeWidth="1.2" strokeDasharray="3,1" />
            
            {/* Reefer Container 1 */}
            <g>
              <rect x="495" y="92" width="80" height="22" rx="2" fill="#EAEAEA" stroke="#A0A0A0" strokeWidth="1.2" />
              {/* Cooling Unit grille */}
              <rect x="497" y="94" width="10" height="18" fill="#555" rx="1" />
              <line x1="500" y1="97" x2="500" y2="109" stroke="#777" strokeWidth="0.8" />
              <line x1="503" y1="97" x2="503" y2="109" stroke="#777" strokeWidth="0.8" />
              {/* Vertical panel lines */}
              <line x1="516" y1="92" x2="516" y2="114" stroke="#A0A0A0" strokeWidth="0.6" opacity="0.8" />
              <line x1="528" y1="92" x2="528" y2="114" stroke="#A0A0A0" strokeWidth="0.6" opacity="0.8" />
              <line x1="540" y1="92" x2="540" y2="114" stroke="#A0A0A0" strokeWidth="0.6" opacity="0.8" />
              <line x1="552" y1="92" x2="552" y2="114" stroke="#A0A0A0" strokeWidth="0.6" opacity="0.8" />
              <line x1="564" y1="92" x2="564" y2="114" stroke="#A0A0A0" strokeWidth="0.6" opacity="0.8" />
            </g>

            {/* Reefer Container 2 */}
            <g>
              <rect x="495" y="120" width="80" height="22" rx="2" fill="#EAEAEA" stroke="#A0A0A0" strokeWidth="1.2" />
              {/* Cooling Unit grille */}
              <rect x="497" y="122" width="10" height="18" fill="#555" rx="1" />
              <line x1="500" y1="125" x2="500" y2="137" stroke="#777" strokeWidth="0.8" />
              <line x1="503" y1="125" x2="503" y2="137" stroke="#777" strokeWidth="0.8" />
              {/* Vertical panel lines */}
              <line x1="516" y1="120" x2="516" y2="142" stroke="#A0A0A0" strokeWidth="0.6" opacity="0.8" />
              <line x1="528" y1="120" x2="528" y2="142" stroke="#A0A0A0" strokeWidth="0.6" opacity="0.8" />
              <line x1="540" y1="120" x2="540" y2="142" stroke="#A0A0A0" strokeWidth="0.6" opacity="0.8" />
              <line x1="552" y1="120" x2="552" y2="142" stroke="#A0A0A0" strokeWidth="0.6" opacity="0.8" />
              <line x1="564" y1="120" x2="564" y2="142" stroke="#A0A0A0" strokeWidth="0.6" opacity="0.8" />
            </g>

            <text x="535" y="160" textAnchor="middle" fill="#000000" fontSize="7" fontWeight="bold" letterSpacing="0.2" fontFamily="var(--font-primary)">CARGA</text>
            <text x="535" y="170" textAnchor="middle" fill="#000000" fontSize="7" fontWeight="bold" letterSpacing="0.2" fontFamily="var(--font-primary)">REFRIGERADA</text>
          </g>

          {/* ==================== MACHINE AREA (Bottom Right, y=225 to 375, next to Zona 4) ==================== */}
          <g className={styles.machineArea}>
            {/* Machines Block boundary */}
            <rect x="490" y="225" width="90" height="135" rx="8" fill="rgba(0,0,0,0.01)" stroke="rgba(0,0,0,0.12)" strokeWidth="1.2" strokeDasharray="3,1" />

            {/* 1. Forklift Vector (Montacargas en y=235 a 275) - High-end technical blueprint style */}
            <g transform="translate(4, 5)">
              {/* Chassis rail & steel frame */}
              <path d="M 505,258 L 528,258 M 505,258 L 505,251 M 528,258 L 528,251" stroke="#F58403" strokeWidth="1" fill="none" />
              {/* Heavy Counterweight block */}
              <rect x="505" y="246" width="7" height="12" fill="rgba(245, 132, 3, 0.08)" stroke="#C46902" strokeWidth="0.8" />
              {/* Engine hood block */}
              <polygon points="512,258 528,258 528,248 515,248" fill="rgba(245, 132, 3, 0.12)" stroke="#C46902" strokeWidth="0.8" />
              {/* Overhead Guard Cage (thin pillars) */}
              <line x1="517" y1="248" x2="517" y2="238" stroke="#333" strokeWidth="1" />
              <line x1="525" y1="248" x2="525" y2="238" stroke="#333" strokeWidth="1" />
              <line x1="516" y1="238" x2="527" y2="238" stroke="#333" strokeWidth="1" />
              <line x1="520" y1="238" x2="520" y2="248" stroke="#333" strokeWidth="0.6" />
              
              {/* Steering wheel & seat */}
              <line x1="523" y1="248" x2="525" y2="243" stroke="#222" strokeWidth="1" />
              <line x1="524" y1="243" x2="528" y2="243" stroke="#222" strokeWidth="1" />
              
              {/* Dual-rail Telescopic Mast */}
              <line x1="531" y1="232" x2="531" y2="258" stroke="#111" strokeWidth="1.6" />
              <line x1="533" y1="232" x2="533" y2="258" stroke="#666" strokeWidth="0.8" />
              
              {/* Hydraulic Tilt Cylinder */}
              <line x1="525" y1="252" x2="531" y2="246" stroke="#444" strokeWidth="0.8" />
              
              {/* Carriage & Forks */}
              <path d="M 533,248 L 542,248 L 542,252" fill="none" stroke="#222" strokeWidth="1.2" strokeLinecap="round" />
              
              {/* Load Crate */}
              <rect x="534" y="235" width="11" height="13" rx="1.5" fill="#D2B48C" stroke="#8B5A2B" strokeWidth="0.6" />
              <line x1="534" y1="235" x2="545" y2="248" stroke="#8B5A2B" strokeWidth="0.4" opacity="0.6" />
              
              {/* Wheels with hubs */}
              <circle cx="510" cy="258" r="4.8" fill="#141926" stroke="#222" strokeWidth="1" />
              <circle cx="510" cy="258" r="1.8" fill="none" stroke="#FFCC00" strokeWidth="0.8" />
              <circle cx="525" cy="258" r="4.8" fill="#141926" stroke="#222" strokeWidth="1" />
              <circle cx="525" cy="258" r="1.8" fill="none" stroke="#FFCC00" strokeWidth="0.8" />
            </g>

            {/* 2. Container Reach Stacker Vector (Apiladora en y=285 a 325) - High-end technical blueprint style */}
            <g transform="translate(4, 3)">
              {/* Chassis low deck */}
              <path d="M 503,313 L 533,313 L 533,306 L 503,306 Z" fill="rgba(255, 179, 0, 0.12)" stroke="#B55800" strokeWidth="0.8" />
              
              {/* Rear Cabin */}
              <rect x="506" y="296" width="8" height="10" rx="1" stroke="#333" fill="rgba(14, 19, 38, 0.7)" strokeWidth="0.8" />
              <line x1="509" y1="296" x2="509" y2="306" stroke="#333" strokeWidth="0.6" />
              
              {/* Main boom support bracket */}
              <polygon points="504,306 512,306 509,292 505,292" fill="rgba(255, 179, 0, 0.2)" stroke="#B55800" strokeWidth="0.6" />
              
              {/* Hydraulic lift cylinder under the boom */}
              <line x1="514" y1="306" x2="528" y2="286" stroke="#444" strokeWidth="1.5" />
              <line x1="515" y1="306" x2="529" y2="286" stroke="#888" strokeWidth="0.6" />

              {/* Telescopic Boom (Big arm) */}
              <line x1="507" y1="292" x2="538" y2="280" stroke="#222" strokeWidth="2.8" strokeLinecap="round" />
              <line x1="520" y1="287" x2="542" y2="278" stroke="#FFB300" strokeWidth="1.6" strokeLinecap="round" />
              
              {/* Spreader mechanism */}
              <path d="M 542,278 L 544,286 M 534,286 L 554,286" fill="none" stroke="#222" strokeWidth="1" />
              <line x1="535" y1="286" x2="535" y2="291" stroke="#222" strokeWidth="0.8" />
              <line x1="553" y1="286" x2="553" y2="291" stroke="#222" strokeWidth="0.8" />
              
              {/* Container being lifted */}
              <rect x="530" y="291" width="26" height="9" rx="1" fill="rgba(40,149,222,0.15)" stroke="#2895DE" strokeWidth="0.8" />
              <line x1="543" y1="291" x2="543" y2="300" stroke="#2895DE" strokeWidth="0.5" opacity="0.6" />
              
              {/* Heavy Tires */}
              <circle cx="510" cy="313" r="6" fill="#141926" stroke="#222" strokeWidth="1" />
              <circle cx="510" cy="313" r="2" fill="none" stroke="#FFB300" strokeWidth="0.8" />
              <circle cx="527" cy="313" r="6" fill="#141926" stroke="#222" strokeWidth="1" />
              <circle cx="527" cy="313" r="2" fill="none" stroke="#FFB300" strokeWidth="0.8" />
            </g>

            <text x="535" y="342" textAnchor="middle" fill="#000000" fontSize="8" fontWeight="bold" letterSpacing="0.3" fontFamily="var(--font-primary)">AREA DE MAQUINAS</text>
          </g>

          {/* Dotted Perimeter Fence (Cercado de la Almacenadora) in solid black, wrapping around the entire canvas */}
          <g className={styles.perimeterGroup}>
            <path
              d="M 275,415 L 19,415 A 16,16 0 0 1 3,399 L 3,51 A 16,16 0 0 1 19,35 L 581,35 A 16,16 0 0 1 597,51 L 597,399 A 16,16 0 0 1 581,415 L 325,415"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeDasharray="4,4"
            />
            
            {/* Access Gate Entrance markings on asphalt shifted down */}
            <line x1="275" y1="415" x2="325" y2="415" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2,2" />

            {/* Vector Guardhouse / Security Gatehouse (Garita de Seguridad) shifted down to the new fence limit */}
            <g transform="translate(0, 40)">
              {/* Guardhouse Cabin Shadow */}
              <rect x="290" y="360" width="20" height="22" rx="2" fill="rgba(0,0,0,0.5)" filter="url(#shadow)" />
              {/* Cabin Body */}
              <rect x="290" y="360" width="20" height="22" rx="2" fill="#141926" stroke="#FFCC00" strokeWidth="1" />
              {/* Slanted Roof */}
              <polygon points="286,360 314,360 310,354 290,354" fill="#FFCC00" />
              {/* Security Window */}
              <rect x="294" y="364" width="12" height="7" fill="rgba(40,149,222,0.3)" stroke="#2895DE" strokeWidth="0.8" />
              {/* Pivot Support for Barrier arm */}
              <circle cx="314" cy="372" r="2" fill="#FFCC00" />
              {/* Striped Access Barrier Arm (Pluma de Seguridad) blocking the entrance */}
              <line x1="314" y1="372" x2="330" y2="372" stroke="#BF0011" strokeWidth="1.8" strokeDasharray="3,1" />
            </g>
          </g>

          {/* HUD Crosshairs like the reference */}
          <g stroke="rgba(255, 255, 255, 0.15)" strokeWidth="0.8">
            <path d="M15,25 L15,35 M10,30 L20,30" />
            <path d="M585,25 L585,35 M580,30 L590,30" />
            <path d="M15,415 L15,425 M10,420 L20,420" />
            <path d="M585,415 L585,425 M580,420 L590,420" />
          </g>

          {/* ==================== ZONA 1 (Top Left, 60 Cap - Small) ==================== */}
          <g
            className={`${styles.zoneGroup} ${activeZone === 1 ? styles.active : ""}`}
            onMouseEnter={() => setActiveZone(1)}
            onMouseLeave={() => setActiveZone(null)}
          >
            <rect
              x="118"
              y="80"
              width="135"
              height="135"
              rx="12"
              fill="url(#blueGrad)"
              stroke="#2895DE"
              strokeWidth="2"
              className={styles.zoneRect}
            />
            {/* Capacity number written inside the square */}
            <text
              ref={z1Ref}
              x="185.5"
              y="158"
              textAnchor="middle"
              className={styles.capText}
              fill="#2895DE"
            >
              0
            </text>
          </g>

          {/* ==================== ZONA 3 (Bottom Left, 60 Cap - Small) ==================== */}
          <g
            className={`${styles.zoneGroup} ${activeZone === 3 ? styles.active : ""}`}
            onMouseEnter={() => setActiveZone(3)}
            onMouseLeave={() => setActiveZone(null)}
          >
            <rect
              x="118"
              y="225"
              width="135"
              height="135"
              rx="12"
              fill="url(#redGrad)"
              stroke="#BF0011"
              strokeWidth="2"
              className={styles.zoneRect}
            />
            {/* Capacity number written inside the square */}
            <text
              ref={z3Ref}
              x="185.5"
              y="303"
              textAnchor="middle"
              className={styles.capText}
              fill="#BF0011"
            >
              0
            </text>
          </g>

          {/* ==================== ZONA 2 (Top Right, 120 Cap - Larger) ==================== */}
          <g
            className={`${styles.zoneGroup} ${activeZone === 2 ? styles.active : ""}`}
            onMouseEnter={() => setActiveZone(2)}
            onMouseLeave={() => setActiveZone(null)}
          >
            <rect
              x="263"
              y="80"
              width="220"
              height="110"
              rx="12"
              fill="url(#orangeGrad)"
              stroke="#F58403"
              strokeWidth="2"
              className={styles.zoneRect}
            />
            {/* Capacity number written inside the square */}
            <text
              ref={z2Ref}
              x="373"
              y="145"
              textAnchor="middle"
              className={styles.capText}
              fill="#F58403"
            >
              0
            </text>
          </g>

          {/* ==================== Interactive Labels & Connector Lines ==================== */}
          {/* Label ZONA 1 */}
          <g className={`${styles.labelGroup} ${activeZone === 1 ? styles.labelActive : ""}`}>
            <line x1="120" y1="63" x2="150" y2="90" stroke="#2895DE" strokeWidth="1.5" strokeDasharray="3,2" />
            <circle cx="150" cy="90" r="3.5" fill="#2895DE" />
            
            <g filter="url(#shadow)">
              <rect x="5" y="45" width="115" height="35" rx="6" fill="#141926" stroke="#2895DE" strokeWidth="1" />
              <text x="62.5" y="66" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800" fontFamily="var(--font-primary)" letterSpacing="0.5">ZONA 1</text>
            </g>
          </g>

          {/* Label ZONA 2 */}
          <g className={`${styles.labelGroup} ${activeZone === 2 ? styles.labelActive : ""}`}>
            <line x1="480" y1="63" x2="450" y2="90" stroke="#F58403" strokeWidth="1.5" strokeDasharray="3,2" />
            <circle cx="450" cy="90" r="3.5" fill="#F58403" />
            
            <g filter="url(#shadow)">
              <rect x="480" y="45" width="115" height="35" rx="6" fill="#141926" stroke="#F58403" strokeWidth="1" />
              <text x="537.5" y="66" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800" fontFamily="var(--font-primary)" letterSpacing="0.5">ZONA 2</text>
            </g>
          </g>

          {/* Label ZONA 3 */}
          <g className={`${styles.labelGroup} ${activeZone === 3 ? styles.labelActive : ""}`}>
            <line x1="120" y1="378" x2="150" y2="350" stroke="#BF0011" strokeWidth="1.5" strokeDasharray="3,2" />
            <circle cx="150" cy="350" r="3.5" fill="#BF0011" />
            
            <g filter="url(#shadow)">
              <rect x="5" y="360" width="115" height="35" rx="6" fill="#141926" stroke="#BF0011" strokeWidth="1" />
              <text x="62.5" y="381" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800" fontFamily="var(--font-primary)" letterSpacing="0.5">ZONA 3</text>
            </g>
          </g>

          {/* Label ZONA 4 */}
          <g className={`${styles.labelGroup} ${activeZone === 4 ? styles.labelActive : ""}`}>
            <line x1="480" y1="378" x2="450" y2="350" stroke="#0D3B60" strokeWidth="1.5" strokeDasharray="3,2" />
            <circle cx="450" cy="350" r="3.5" fill="#0D3B60" />
            
            <g filter="url(#shadow)">
              <rect x="480" y="360" width="115" height="35" rx="6" fill="#141926" stroke="#0D3B60" strokeWidth="1" />
              <text x="537.5" y="381" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800" fontFamily="var(--font-primary)" letterSpacing="0.5">ZONA 4</text>
            </g>
          </g>
        </svg>
      </div>

      {/* Technical footer */}
      <div className={styles.techFooter}>
        <div className={styles.systemStatus}>SISTEMA VECTORIAL ACTIVO // ALMACENADORA COLIBRI</div>
      </div>
    </div>
  );
}
