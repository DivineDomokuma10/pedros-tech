"use client";

import { useEffect, useRef } from "react";

export function AnimatedSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const chars = "░▒▓█▀▄▌▐│─┤├┴┬╭╮╰╯";
    let time = 0;

    let width = 0;
    let height = 0;
    let centerX = 0;
    let centerY = 0;
    let radius = 0;

    const points: { x: number; y: number; z: number; char: string }[] = [];

    // 🔥 PRECOMPUTE SPHERE BASE (STATIC GEOMETRY)
    const basePoints: { x: number; y: number; z: number }[] = [];

    for (let phi = 0; phi < Math.PI * 2; phi += 0.15) {
      for (let theta = 0; theta < Math.PI; theta += 0.15) {
        basePoints.push({
          x: Math.sin(theta) * Math.cos(phi),
          y: Math.sin(theta) * Math.sin(phi),
          z: Math.cos(theta),
        });
      }
    }

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      centerX = width / 2;
      centerY = height / 2;
      radius = Math.min(width, height) * 0.525;
    };

    resize();
    window.addEventListener("resize", resize);

    // reused vars (avoid allocations)
    let x = 0,
      y = 0,
      z = 0;
    let rotX = 0,
      rotY = 0;
    let newX = 0,
      newY = 0,
      newZ = 0;
    let finalZ = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      rotY = time * 0.3;
      rotX = time * 0.2;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      points.length = 0;

      const len = basePoints.length;

      for (let i = 0; i < len; i++) {
        const p = basePoints[i];

        // apply Y rotation
        x = p.x;
        y = p.y;
        z = p.z;

        const x1 = x * cosY - z * sinY;
        const z1 = x * sinY + z * cosY;

        // apply X rotation
        newY = y * cosX - z1 * sinX;
        newZ = y * sinX + z1 * cosX;

        finalZ = newZ;

        const depth = (finalZ + 1) / 2;
        const charIndex = (depth * (chars.length - 1)) | 0;

        newX = centerX + x1 * radius;
        newY = centerY + newY * radius;

        points.push({
          x: newX,
          y: newY,
          z: finalZ,
          char: chars[charIndex],
        });
      }

      // depth sort (still needed for look)
      points.sort((a, b) => a.z - b.z);

      ctx.font = "12px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const alpha = 0.2 + (p.z + 1) * 0.4;

        ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
        ctx.fillText(p.char, p.x, p.y);
      }

      time += 0.02;
      frameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: "block" }}
    />
  );
}
