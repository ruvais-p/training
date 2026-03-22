"use client";
import { useEffect, useRef } from "react";

const STEP = 6;
const LEVELS = 12;

function noise(x, y, t) {
  return (
    Math.sin(x * 0.008 + t * 0.4) * 0.3 +
    Math.sin(y * 0.011 + t * 0.3) * 0.25 +
    Math.sin((x + y) * 0.006 + t * 0.5) * 0.25 +
    Math.sin(x * 0.014 - y * 0.009 + t * 0.6) * 0.2
  );
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function interpPoint(x1, y1, v1, x2, y2, v2, threshold) {
  const t = (threshold - v1) / (v2 - v1);
  return [lerp(x1, x2, t), lerp(y1, y2, t)];
}

export default function TopoBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animId;
    let t = 0;
    let field = [];

    function buildField(w, h) {
      const cols = Math.ceil(w / STEP) + 2;
      const rows = Math.ceil(h / STEP) + 2;
      field = Array.from({ length: rows }, (_, ry) =>
        Array.from({ length: cols }, (_, cx) =>
          noise(cx * STEP, ry * STEP, t)
        )
      );
      return { cols, rows };
    }

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resize();

    function draw() {
      const ctx = canvas.getContext("2d");
      const w = canvas.width;
      const h = canvas.height;

      // Clear with background colour
      ctx.fillStyle = "#020e04";
      ctx.fillRect(0, 0, w, h);

      const cols = Math.ceil(w / STEP) + 2;
      const rows = Math.ceil(h / STEP) + 2;

      // Rebuild field for this frame
      for (let ry = 0; ry < rows; ry++) {
        if (!field[ry]) field[ry] = [];
        for (let cx = 0; cx < cols; cx++) {
          field[ry][cx] = noise(cx * STEP, ry * STEP, t);
        }
      }

      // Draw each contour level
      for (let lvl = 0; lvl < LEVELS; lvl++) {
        const threshold = -0.9 + (1.8 / (LEVELS - 1)) * lvl;
        const alpha = lvl % 3 === 0 ? 0.10 : 0.06;
        const lineWidth = lvl % 4 === 0 ? 1.2 : 0.6;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(200,245,60,${alpha})`;
        ctx.lineWidth = lineWidth;

        for (let ry = 0; ry < rows - 1; ry++) {
          for (let cx = 0; cx < cols - 1; cx++) {
            const x = cx * STEP;
            const y = ry * STEP;

            const tl = field[ry][cx];
            const tr = field[ry][cx + 1];
            const br = field[ry + 1][cx + 1];
            const bl = field[ry + 1][cx];

            const config =
              (tl > threshold ? 8 : 0) |
              (tr > threshold ? 4 : 0) |
              (br > threshold ? 2 : 0) |
              (bl > threshold ? 1 : 0);

            if (config === 0 || config === 15) continue;

            // Edge midpoints via interpolation
            const top    = interpPoint(x, y, tl, x + STEP, y, tr, threshold);
            const right  = interpPoint(x + STEP, y, tr, x + STEP, y + STEP, br, threshold);
            const bottom = interpPoint(x, y + STEP, bl, x + STEP, y + STEP, br, threshold);
            const left   = interpPoint(x, y, tl, x, y + STEP, bl, threshold);

            const segments = {
              1:  [left, bottom],
              2:  [bottom, right],
              3:  [left, right],
              4:  [top, right],
              5:  [left, top, bottom, right],
              6:  [top, bottom],
              7:  [left, top],
              8:  [top, left],
              9:  [top, bottom],
              10: [top, right, left, bottom],
              11: [top, right],
              12: [left, right],
              13: [bottom, right],
              14: [left, bottom],
            };

            const pts = segments[config];
            if (!pts) continue;

            for (let i = 0; i < pts.length; i += 2) {
              ctx.moveTo(pts[i][0], pts[i][1]);
              ctx.lineTo(pts[i + 1][0], pts[i + 1][1]);
            }
          }
        }

        ctx.stroke();
      }

      t += 0.008;
      animId = requestAnimationFrame(draw);
    }

    draw();

    const onResize = () => { resize(); buildField(canvas.width, canvas.height); };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
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
        display: "block",
        overflow: "hidden",
      }}
    />
  );
}
