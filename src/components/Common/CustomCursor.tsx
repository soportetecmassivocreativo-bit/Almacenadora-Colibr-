"use client";

import { useEffect, useState } from "react";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const checkMobile = () => {
      setIsMobile(
        window.matchMedia("(max-width: 900px)").matches || 
        window.matchMedia("(pointer: coarse)").matches
      );
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        !target ||
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".interactive") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!mounted || isMobile) return null;

  return (
    <div 
      className={`${styles.cursor} ${hovered ? styles.cursorHovered : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <svg
        viewBox="130 -10 160 160"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g 
          stroke="#FFFFFF" 
          strokeWidth="3.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="rgba(255, 255, 255, 0.15)"
        >
          {/* Beak & Head curve */}
          <path d="M 210,58 C 235,60 260,54 278,51" />
          <path d="M 210,58 C 205,51 193,47 180,54" />
          
          {/* Upper main wing loop */}
          <path d="M 180,54 C 155,31 138,15 160,5 C 185,-5 210,30 215,64" />
          
          {/* Lower smaller wing loop */}
          <path d="M 190,48 C 175,34 160,24 173,18 C 187,12 203,34 207,54" />
          
          {/* Main Body sweep */}
          <path d="M 215,64 C 218,86 215,112 195,128" />
          
          {/* Outer tail sweep */}
          <path d="M 195,128 C 170,143 145,143 137,123 C 130,108 155,98 205,68" />
          
          {/* Inner tail feather line */}
          <path d="M 180,121 C 160,131 143,128 145,116 C 147,105 170,98 200,75" />
        </g>
      </svg>
    </div>
  );
}
