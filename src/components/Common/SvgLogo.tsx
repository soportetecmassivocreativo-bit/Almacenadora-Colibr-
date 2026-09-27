"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SvgLogoProps {
  color?: "white" | "dark";
  width?: string;
  height?: string;
}

export default function SvgLogo({ color = "white", width = "100%", height = "100%" }: SvgLogoProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const currentSvg = svgRef.current;
    if (!currentSvg) return;

    const ctx = gsap.context(() => {
      const paths = currentSvg.querySelectorAll(".logo-path");
      const texts = currentSvg.querySelectorAll(".logo-text");

      if (!paths.length || !texts.length) return;

      // Setup initial state for paths
      paths.forEach((path) => {
        const p = path as SVGPathElement;
        const length = p.getTotalLength();
        p.style.strokeDasharray = `${length}`;
        p.style.strokeDashoffset = `${length}`;
      });

      // Reset texts
      gsap.set(texts, { opacity: 0, y: 8 });

      // Create scroll triggered animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: currentSvg,
          start: "top 90%",
          toggleActions: "restart none none none", // Replay when entering viewport
        },
      });

      // Animate drawing of bird paths
      tl.to(paths, {
        strokeDashoffset: 0,
        duration: 1.6,
        ease: "power2.inOut",
        stagger: 0.15,
      })
      // Animate text reveal
      .to(texts, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      }, "-=0.8"); // Overlap text animation with the end of drawing
    }, currentSvg);

    return () => ctx.revert();
  }, []);

  const strokeColor = color === "white" ? "#FFFFFF" : "#141926";
  const textColor = color === "white" ? "#FFFFFF" : "#141926";

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 320 130"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      {/* The Colibri Hummingbird Vector paths */}
      <g stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* Beak & Head curve */}
        <path className="logo-path" d="M 210,58 C 235,60 260,54 278,51" />
        <path className="logo-path" d="M 210,58 C 205,51 193,47 180,54" />
        
        {/* Upper main wing loop */}
        <path className="logo-path" d="M 180,54 C 155,31 138,15 160,5 C 185,-5 210,30 215,64" />
        
        {/* Lower smaller wing loop */}
        <path className="logo-path" d="M 190,48 C 175,34 160,24 173,18 C 187,12 203,34 207,54" />
        
        {/* Main Body sweep */}
        <path className="logo-path" d="M 215,64 C 218,86 215,112 195,128" />
        
        {/* Outer tail sweep */}
        <path className="logo-path" d="M 195,128 C 170,143 145,143 137,123 C 130,108 155,98 205,68" />
        
        {/* Inner tail feather line */}
        <path className="logo-path" d="M 180,121 C 160,131 143,128 145,116 C 147,105 170,98 200,75" />
      </g>
      
      {/* Text group */}
      <g fill={textColor} fontFamily="var(--font-primary)">
        {/* "ALMACENADORA" */}
        <text
          className="logo-text"
          x="15"
          y="56"
          fontSize="11"
          fontWeight="400"
          letterSpacing="3"
        >
          ALMACENADORA
        </text>
        
        {/* "COLIBRÍ" */}
        <text
          className="logo-text"
          x="15"
          y="100"
          fontSize="35"
          fontWeight="800"
          letterSpacing="1.5"
        >
          COLIBRÍ
        </text>
      </g>
    </svg>
  );
}
