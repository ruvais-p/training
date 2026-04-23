"use client";
import { useEffect, useRef } from "react";

export default function GridBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame;
    let offset = 0;

    const GRID_SIZE = 30;
    const SPEED = 0.08;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function drawBackground(w, h) {
      // white base
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, w, h);

      // center soft glow (subtle gray for depth)
      const radial = ctx.createRadialGradient(
        w / 2,
        h / 2,
        100,
        w / 2,
        h / 2,
        h * 0.7
      );
      radial.addColorStop(0, "rgba(0, 0, 0, 0.015)");
      radial.addColorStop(0.4, "rgba(0, 0, 0, 0.005)");
      radial.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = radial;
      ctx.fillRect(0, 0, w, h);

      // top fade
      const topFade = ctx.createLinearGradient(0, 0, 0, 220);
      topFade.addColorStop(0, "rgba(0, 0, 0, 0.02)");
      topFade.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = topFade;
      ctx.fillRect(0, 0, w, 220);

      // bottom vignette
      const bottomFade = ctx.createLinearGradient(0, h - 240, 0, h);
      bottomFade.addColorStop(0, "rgba(0, 0, 0, 0)");
      bottomFade.addColorStop(1, "rgba(0, 0, 0, 0.08)");
      ctx.fillStyle = bottomFade;
      ctx.fillRect(0, h - 240, w, 240);
    }

    function drawGrid(w, h) {
      ctx.save();

      // minor grid
      ctx.strokeStyle = "rgba(0, 0, 0, 0.08)";
      ctx.lineWidth = 0.6;

      for (let x = -GRID_SIZE + (offset % GRID_SIZE); x < w + GRID_SIZE; x += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      for (let y = -GRID_SIZE + (offset % GRID_SIZE); y < h + GRID_SIZE; y += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      ctx.restore();
    }

    function draw() {
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);
      drawBackground(w, h);
      drawGrid(w, h);

      offset += SPEED;
      animationFrame = requestAnimationFrame(draw);
    }

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}