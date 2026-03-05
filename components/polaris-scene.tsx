/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

import Navbar from "./navbar";
import HeroSection from "./hero-section";
import AboutSection from "./about-section";
import SystemRequirementsSection from "./system-requirements-section";
import DownloadSection from "./download-section";
import InstallGuideSection from "./install-guide-section";
import Footer from "./footer";

gsap.registerPlugin(ScrollTrigger);

export default function PolarisScene() {
  useEffect(() => {
    /* ================= LENIS ================= */
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    (window as any).scrollToDownload = () => {
      lenis.scrollTo("#download", { offset: -50, duration: 2 });
    };

    /* ================= CURSOR ================= */
    const cursorDot = document.querySelector(".cursor-dot") as HTMLElement;
    const cursorCircle = document.querySelector(".cursor-circle") as HTMLElement;

    document.addEventListener("mousemove", (e) => {
      gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0.1 });
      gsap.to(cursorCircle, { x: e.clientX, y: e.clientY, duration: 0.4 });
    });

    /* ================= MAGNETIC ================= */
    document.querySelectorAll(".magnetic-target").forEach((el) => {
      el.addEventListener("mousemove", (e: any) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(el, { x: x * 0.2, y: y * 0.2, duration: 0.3 });
        gsap.to(cursorCircle, {
          scale: 1.5,
          borderColor: "rgba(145,16,12,0.2)",
          backgroundColor: "rgba(145,16,12,0.05)",
          duration: 0.3,
        });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.3 });
        gsap.to(cursorCircle, {
          scale: 1,
          borderColor: "rgba(145,16,12,0.4)",
          backgroundColor: "transparent",
          duration: 0.3,
        });
      });
    });

    /* ================= THREE.JS ================= */
    const container = document.getElementById("canvas-container")!;

    const isWebGLAvailable = (() => {
      try {
        const testCanvas = document.createElement("canvas");
        return !!(
          window.WebGLRenderingContext &&
          (testCanvas.getContext("webgl") ||
            testCanvas.getContext("experimental-webgl"))
        );
      } catch {
        return false;
      }
    })();

    if (!isWebGLAvailable) {
      const particleSVGs = Array.from({ length: 60 }, (_, i) => {
        const x = 30 + Math.random() * 40;
        const y = 20 + Math.random() * 60;
        const size = 0.8 + Math.random() * 1.4;
        const delay = (Math.random() * 6).toFixed(2);
        const dur = (4 + Math.random() * 5).toFixed(2);
        const opacity = (0.15 + Math.random() * 0.35).toFixed(2);
        return `<circle cx="${x}%" cy="${y}%" r="${size}" fill="rgba(145,16,12,${opacity})"
          style="animation: particleDrift${i % 4} ${dur}s ${delay}s ease-in-out infinite alternate" />`;
      }).join("");

      container.innerHTML = `
        <style>
          @keyframes octoSpin   { from { transform: rotateY(0deg) rotateX(15deg); } to { transform: rotateY(360deg) rotateX(15deg); } }
          @keyframes octoInner  { from { transform: rotateX(0deg) rotateY(-20deg); } to { transform: rotateX(360deg) rotateY(-20deg); } }
          @keyframes ringOrbit  { from { transform: rotateX(72deg) rotateZ(0deg); } to { transform: rotateX(72deg) rotateZ(360deg); } }
          @keyframes corePulse  { 0%,100% { transform: scale(1); opacity:.12; } 50% { transform: scale(1.08); opacity:.18; } }
          @keyframes particleDrift0 { to { transform: translate(6px, -8px);  opacity:.1; } }
          @keyframes particleDrift1 { to { transform: translate(-5px, 7px);  opacity:.05; } }
          @keyframes particleDrift2 { to { transform: translate(8px,  5px);  opacity:.15; } }
          @keyframes particleDrift3 { to { transform: translate(-7px,-6px);  opacity:.08; } }
          @keyframes sceneFloat { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-12px); } }
        </style>
        <svg style="position:fixed;inset:0;width:100%;height:100%;pointer-events:none;" xmlns="http://www.w3.org/2000/svg">
          ${particleSVGs}
        </svg>
        <div style="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none;perspective:800px;">
          <div style="animation: sceneFloat 6s ease-in-out infinite; position:relative; width:200px; height:200px;">
            <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;transform-style:preserve-3d;animation: ringOrbit 12s linear infinite;">
              <div style="width:200px;height:200px;border-radius:50%;border:1.5px solid rgba(0,0,0,0.12);box-shadow:0 0 0 1px rgba(0,0,0,0.05);"></div>
            </div>
            <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;transform-style:preserve-3d;animation: octoSpin 8s linear infinite;">
              <svg width="110" height="110" viewBox="-55 -55 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow:visible;">
                <line x1="0" y1="-38" x2="38" y2="0"  stroke="rgba(145,16,12,0.35)" stroke-width="0.8"/>
                <line x1="0" y1="-38" x2="0"  y2="28" stroke="rgba(145,16,12,0.20)" stroke-width="0.8"/>
                <line x1="0" y1="-38" x2="-38" y2="0" stroke="rgba(145,16,12,0.35)" stroke-width="0.8"/>
                <line x1="0" y1="-38" x2="0"  y2="-28" stroke="rgba(145,16,12,0.15)" stroke-width="0.8"/>
                <line x1="38"  y1="0"  x2="0"   y2="28"  stroke="rgba(145,16,12,0.30)" stroke-width="0.8"/>
                <line x1="0"   y1="28" x2="-38" y2="0"   stroke="rgba(145,16,12,0.30)" stroke-width="0.8"/>
                <line x1="-38" y1="0"  x2="0"   y2="-28" stroke="rgba(145,16,12,0.20)" stroke-width="0.8"/>
                <line x1="0"   y1="-28" x2="38" y2="0"   stroke="rgba(145,16,12,0.20)" stroke-width="0.8"/>
                <line x1="0" y1="38" x2="38"  y2="0"  stroke="rgba(145,16,12,0.35)" stroke-width="0.8"/>
                <line x1="0" y1="38" x2="0"   y2="28" stroke="rgba(145,16,12,0.15)" stroke-width="0.8"/>
                <line x1="0" y1="38" x2="-38" y2="0"  stroke="rgba(145,16,12,0.35)" stroke-width="0.8"/>
                <line x1="0" y1="38" x2="0"   y2="-28" stroke="rgba(145,16,12,0.20)" stroke-width="0.8"/>
              </svg>
            </div>
            <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;transform-style:preserve-3d;animation: octoInner 5s linear infinite;">
              <svg width="60" height="60" viewBox="-30 -30 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow:visible; animation: corePulse 3s ease-in-out infinite;">
                <polygon points="0,-22 22,0 0,22 -22,0" fill="rgba(145,16,12,0.08)" stroke="rgba(145,16,12,0.15)" stroke-width="0.5"/>
                <polygon points="0,-22 22,0 0,8"  fill="rgba(145,16,12,0.05)"/>
                <polygon points="0,22 -22,0 0,-8" fill="rgba(145,16,12,0.05)"/>
              </svg>
            </div>
          </div>
        </div>`;
      return;
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xffffff, 0.002);

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      return;
    }

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const starGroup = new THREE.Group();
    scene.add(starGroup);

    const starMesh = new THREE.Mesh(
      new THREE.OctahedronGeometry(1.5, 0),
      new THREE.MeshBasicMaterial({ color: 0x91100c, wireframe: true, transparent: true, opacity: 0.3 }),
    );
    starGroup.add(starMesh);

    const coreMesh = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.8, 0),
      new THREE.MeshBasicMaterial({ color: 0x91100c, transparent: true, opacity: 0.1 }),
    );
    starGroup.add(coreMesh);

    const ringMesh = new THREE.Mesh(
      new THREE.TorusGeometry(2.5, 0.01, 16, 100),
      new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.1 }),
    );
    ringMesh.rotation.set(Math.PI / 2, Math.PI / 8, 0);
    starGroup.add(ringMesh);

    const pGeo = new THREE.BufferGeometry();
    const pCount = 600;
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount * 3; i++) pPos[i] = (Math.random() - 0.5) * 20;
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));

    const particlePoints = new THREE.Points(
      pGeo,
      new THREE.PointsMaterial({ size: 0.03, color: 0x91100c, transparent: true, opacity: 0.4 }),
    );
    scene.add(particlePoints);

    camera.position.z = 6;

    let mouseX = 0, mouseY = 0;
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX - window.innerWidth / 2;
      mouseY = e.clientY - window.innerHeight / 2;
    });

    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      starGroup.rotation.y += 0.05 * (mouseX * 0.0005 - starGroup.rotation.y);
      starGroup.rotation.x += 0.05 * (mouseY * 0.0005 - starGroup.rotation.x);
      starMesh.rotation.y += 0.002;
      coreMesh.rotation.x += 0.002;
      ringMesh.rotation.z -= 0.001;
      starMesh.scale.setScalar(1 + Math.sin(t * 1.5) * 0.05);
      particlePoints.rotation.y = t * 0.02;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    /* ================= GSAP ================= */
    gsap.fromTo(
      ".reveal-text",
      { yPercent: 120, skewY: 4, opacity: 0 },
      { yPercent: 0, skewY: 0, opacity: 1, duration: 1.6, ease: "power4.out", stagger: 0.18, delay: 0.3 },
    );

    gsap.to(".fade-in-up", { opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 1 });

    ScrollTrigger.create({
      trigger: "footer",
      start: "top center",
      onEnter: () => {
        gsap.to(".cursor-dot", { backgroundColor: "white" });
        gsap.to(".cursor-circle", { borderColor: "white" });
      },
      onLeaveBack: () => {
        gsap.to(".cursor-dot", { backgroundColor: "#91100c" });
        gsap.to(".cursor-circle", { borderColor: "rgba(145,16,12,0.4)" });
      },
    });

    return () => {
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      container.innerHTML = "";
    };
  }, []);

  /* ================= JSX ================= */
  return (
    <>
      <div className="cursor-dot" />
      <div className="cursor-circle" />
      <div id="canvas-container" />

      <Navbar />

      <div>
        <HeroSection />
        <AboutSection />
        <SystemRequirementsSection />
        <DownloadSection />
        <InstallGuideSection />
        <Footer />
      </div>
    </>
  );
}
