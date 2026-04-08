"use client";

import { useRef, useCallback, useEffect } from "react";
import "./BorderGlow.css";

function parseHSL(hslStr) {
  const match = hslStr.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);
  if (!match) return { h: 40, s: 80, l: 80 };
  return { h: parseFloat(match[1]), s: parseFloat(match[2]), l: parseFloat(match[3]) };
}

function buildGlowVars(glowColor, intensity) {
  const { h, s, l } = parseHSL(glowColor);
  const base = `${h}deg ${s}% ${l}%`;
  const opacities = [100, 60, 50, 40, 30, 20, 10];
  const keys = ["", "-60", "-50", "-40", "-30", "-20", "-10"];
  const vars = {};

  for (let i = 0; i < opacities.length; i += 1) {
    vars[`--glow-color${keys[i]}`] = `hsl(${base} / ${Math.min(opacities[i] * intensity, 100)}%)`;
  }

  return vars;
}

const GRADIENT_POSITIONS = ["80% 55%", "69% 34%", "8% 6%", "41% 38%", "86% 85%", "82% 18%", "51% 4%"];
const GRADIENT_KEYS = ["--gradient-one", "--gradient-two", "--gradient-three", "--gradient-four", "--gradient-five", "--gradient-six", "--gradient-seven"];
const COLOR_MAP = [0, 1, 2, 0, 1, 2, 1];

function buildGradientVars(colors) {
  const vars = {};

  for (let i = 0; i < 7; i += 1) {
    const color = colors[Math.min(COLOR_MAP[i], colors.length - 1)];
    vars[GRADIENT_KEYS[i]] = `radial-gradient(at ${GRADIENT_POSITIONS[i]}, ${color} 0px, transparent 50%)`;
  }

  vars["--gradient-base"] = `linear-gradient(${colors[0]} 0 100%)`;
  return vars;
}

function easeOutCubic(x) {
  return 1 - Math.pow(1 - x, 3);
}

function easeInOutCubic(x) {
  return x < 0.5
    ? 4 * x * x * x
    : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

function animateValue({
  start = 0,
  end = 100,
  duration = 1000,
  delay = 0,
  ease = easeOutCubic,
  onUpdate,
  onEnd,
}) {
  const t0 = performance.now() + delay;

  function tick() {
    const elapsed = performance.now() - t0;
    const t = Math.min(Math.max(elapsed / duration, 0), 1);
    onUpdate(start + (end - start) * ease(t));

    if (t < 1) requestAnimationFrame(tick);
    else if (onEnd) onEnd();
  }

  setTimeout(() => requestAnimationFrame(tick), delay);
}

export default function BorderGlow({
  children,
  className = "",
  edgeSensitivity = 30,
  glowColor = "40 80 80",
  backgroundColor = "#060010",
  borderRadius = 28,
  glowRadius = 40,
  glowIntensity = 1,
  coneSpread = 25,
  animated = false,
  autoAnimate = true,
  autoMoveInterval = [1800, 3200], // random delay range
  colors = ["#c084fc", "#f472b6", "#38bdf8"],
  fillOpacity = 0.5,
  style,
}) {
  const cardRef = useRef(null);
  const autoTimeoutRef = useRef(null);
  const isHoveringRef = useRef(false);

  const getCenterOfElement = useCallback((el) => {
    const { width, height } = el.getBoundingClientRect();
    return [width / 2, height / 2];
  }, []);

  const getEdgeProximity = useCallback((el, x, y) => {
    const [cx, cy] = getCenterOfElement(el);
    const dx = x - cx;
    const dy = y - cy;
    let kx = Infinity;
    let ky = Infinity;

    if (dx !== 0) kx = cx / Math.abs(dx);
    if (dy !== 0) ky = cy / Math.abs(dy);

    return Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);
  }, [getCenterOfElement]);

  const getCursorAngle = useCallback((el, x, y) => {
    const [cx, cy] = getCenterOfElement(el);
    const dx = x - cx;
    const dy = y - cy;
    if (dx === 0 && dy === 0) return 0;

    const radians = Math.atan2(dy, dx);
    let degrees = radians * (180 / Math.PI) + 90;
    if (degrees < 0) degrees += 360;
    return degrees;
  }, [getCenterOfElement]);

  const updateGlowFromPoint = useCallback((el, x, y) => {
    const edge = getEdgeProximity(el, x, y);
    const angle = getCursorAngle(el, x, y);

    el.style.setProperty("--edge-proximity", `${(edge * 100).toFixed(3)}`);
    el.style.setProperty("--cursor-angle", `${angle.toFixed(3)}deg`);
  }, [getCursorAngle, getEdgeProximity]);

  const animateToPoint = useCallback((el, startX, startY, endX, endY, duration = 1600) => {
    const startTime = performance.now();

    function tick(now) {
      const t = Math.min((now - startTime) / duration, 1);
      const eased = easeInOutCubic(t);

      const x = startX + (endX - startX) * eased;
      const y = startY + (endY - startY) * eased;

      updateGlowFromPoint(el, x, y);

      if (t < 1 && !isHoveringRef.current) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [updateGlowFromPoint]);

  const getRandomPoint = useCallback((el) => {
    const rect = el.getBoundingClientRect();

    // Keep glow more toward edges, not center
    const paddingX = rect.width * 0.12;
    const paddingY = rect.height * 0.12;

    const edgePoints = [
      [Math.random() * rect.width, paddingY], // top
      [Math.random() * rect.width, rect.height - paddingY], // bottom
      [paddingX, Math.random() * rect.height], // left
      [rect.width - paddingX, Math.random() * rect.height], // right
      [Math.random() * rect.width, Math.random() * rect.height], // anywhere
    ];

    return edgePoints[Math.floor(Math.random() * edgePoints.length)];
  }, []);

  const runAutoAnimation = useCallback(() => {
    const card = cardRef.current;
    if (!card || !autoAnimate || isHoveringRef.current) return;

    const rect = card.getBoundingClientRect();
    const currentX = parseFloat(card.dataset.x || rect.width / 2);
    const currentY = parseFloat(card.dataset.y || rect.height / 2);

    const [nextX, nextY] = getRandomPoint(card);
    card.dataset.x = nextX;
    card.dataset.y = nextY;

    animateToPoint(card, currentX, currentY, nextX, nextY, 1400 + Math.random() * 1000);

    const [minDelay, maxDelay] = autoMoveInterval;
    const nextDelay = minDelay + Math.random() * (maxDelay - minDelay);

    autoTimeoutRef.current = setTimeout(runAutoAnimation, nextDelay);
  }, [autoAnimate, autoMoveInterval, animateToPoint, getRandomPoint]);

  const handlePointerMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.dataset.x = x;
    card.dataset.y = y;

    updateGlowFromPoint(card, x, y);
  }, [updateGlowFromPoint]);

  const handlePointerEnter = useCallback(() => {
    isHoveringRef.current = true;
    if (autoTimeoutRef.current) clearTimeout(autoTimeoutRef.current);
  }, []);

  const handlePointerLeave = useCallback(() => {
    isHoveringRef.current = false;
    runAutoAnimation();
  }, [runAutoAnimation]);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const startX = rect.width / 2;
    const startY = rect.height / 2;

    card.dataset.x = startX;
    card.dataset.y = startY;

    updateGlowFromPoint(card, startX, startY);

    if (autoAnimate) {
      const timeout = setTimeout(() => {
        runAutoAnimation();
      }, 500);

      return () => {
        clearTimeout(timeout);
        if (autoTimeoutRef.current) clearTimeout(autoTimeoutRef.current);
      };
    }
  }, [autoAnimate, runAutoAnimation, updateGlowFromPoint]);

  useEffect(() => {
    if (!animated || !cardRef.current) return;

    const card = cardRef.current;
    const angleStart = 110;
    const angleEnd = 465;

    card.classList.add("sweep-active");
    card.style.setProperty("--cursor-angle", `${angleStart}deg`);

    animateValue({
      duration: 500,
      onUpdate: (v) => card.style.setProperty("--edge-proximity", v),
    });

    animateValue({
      ease: easeInOutCubic,
      duration: 1500,
      end: 50,
      onUpdate: (v) => {
        card.style.setProperty("--cursor-angle", `${(angleEnd - angleStart) * (v / 100) + angleStart}deg`);
      },
    });

    animateValue({
      ease: easeInOutCubic,
      delay: 1500,
      duration: 2250,
      start: 50,
      end: 100,
      onUpdate: (v) => {
        card.style.setProperty("--cursor-angle", `${(angleEnd - angleStart) * (v / 100) + angleStart}deg`);
      },
    });

    animateValue({
      ease: easeInOutCubic,
      delay: 2500,
      duration: 1500,
      start: 100,
      end: 0,
      onUpdate: (v) => card.style.setProperty("--edge-proximity", v),
      onEnd: () => card.classList.remove("sweep-active"),
    });
  }, [animated]);

  const glowVars = buildGlowVars(glowColor, glowIntensity);

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className={`border-glow-card ${className}`}
      style={{
        "--card-bg": backgroundColor,
        "--edge-sensitivity": edgeSensitivity,
        "--border-radius": `${borderRadius}px`,
        "--glow-padding": `${glowRadius}px`,
        "--cone-spread": coneSpread,
        "--fill-opacity": fillOpacity,
        ...glowVars,
        ...buildGradientVars(colors),
        ...style,
      }}
    >
      <span className="edge-light" />
      <div className="border-glow-inner">
        {children}
      </div>
    </div>
  );
}