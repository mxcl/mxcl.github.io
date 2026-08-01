"use client";

import { useEffect, useRef } from "react";

import * as THREE from "three";

const VERTEX_SHADER = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

const FRAGMENT_SHADER = `
precision highp float;

varying vec2 vUv;
uniform float uTime;
uniform float uExcite;
uniform vec2 uPointer;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0)), f.x),
    f.y
  );
}

float fbm(vec2 p) {
  float value = 0.0;
  float weight = 0.5;
  for (int i = 0; i < 4; i++) {
    value += weight * noise(p);
    p = p * 2.03 + 17.1;
    weight *= 0.5;
  }
  return value;
}

void main() {
  vec2 center = vec2(0.5, 0.47);
  vec2 ellipse = vec2(0.225, 0.305);
  vec2 q = (vUv - center) / ellipse;
  float radius = length(q);
  float angle = atan(q.y, q.x);
  float turn = angle / 6.2831853 + 0.5;
  float cursor = exp(-length(vUv - uPointer) * 13.0) * uExcite;

  float flow = fbm(vec2(angle * 1.8 - uTime * 0.34, uTime * 0.11));
  float fine = noise(vec2(angle * 7.0 + uTime * 0.8, uTime * 0.23));
  float warp = (flow - 0.5) * (0.055 + cursor * 0.07);

  float core = exp(-abs(radius - 1.0 - warp) * 75.0);
  float threadA = exp(-abs(radius - 1.045 - sin(angle * 5.0 - uTime * 1.7) * 0.018) * 145.0);
  float threadB = exp(-abs(radius - 0.955 - sin(angle * 7.0 + uTime * 1.15) * 0.014) * 175.0);

  float pulseA = pow(max(0.0, sin(angle * 9.0 - uTime * 4.2 + flow * 5.0)), 12.0);
  float pulseB = pow(max(0.0, sin(angle * 13.0 + uTime * 3.1 + fine * 4.0)), 16.0);
  float outer = exp(-abs(radius - 1.13 - (fine - 0.5) * 0.14) * 70.0)
    * (pulseA + pulseB) * 0.9;
  float wispFade = 1.0 - smoothstep(1.06, 1.58, radius);
  float wisps = exp(-abs(radius - 1.24 - (flow - 0.5) * 0.32) * 42.0)
    * (pulseA * 0.7 + pulseB * 0.5) * wispFade;

  float cellA = floor(turn * 72.0);
  float seedA = hash(vec2(cellA, 19.0));
  float lifeA = fract(seedA + uTime * (0.09 + seedA * 0.08));
  float localA = fract(turn * 72.0) - 0.5 + (lifeA - 0.5) * (seedA - 0.5);
  float sparkA = exp(-localA * localA * 210.0)
    * exp(-abs(radius - (1.04 + lifeA * 0.48)) * 155.0)
    * pow(1.0 - lifeA, 2.0);

  float cellB = floor(turn * 109.0);
  float seedB = hash(vec2(cellB, 47.0));
  float lifeB = fract(seedB + uTime * (0.12 + seedB * 0.06));
  float localB = fract(turn * 109.0) - 0.5 - (lifeB - 0.5) * (seedB - 0.5);
  float sparkB = exp(-localB * localB * 260.0)
    * exp(-abs(radius - (1.02 + lifeB * 0.58)) * 185.0)
    * pow(1.0 - lifeB, 2.4);
  float sparks = (sparkA + sparkB) * (0.75 + cursor * 1.8);

  float energy = core * (0.65 + flow * 0.7)
    + threadA * (0.25 + pulseA)
    + threadB * (0.2 + pulseB)
    + outer
    + wisps
    + sparks * 1.7;
  energy *= 1.0 + cursor * 2.3;

  float side = smoothstep(-0.75, 0.75, q.x);
  vec3 cyan = vec3(0.16, 0.72, 1.0);
  vec3 violet = vec3(0.82, 0.25, 1.0);
  vec3 color = mix(cyan, violet, side);
  color = mix(color, vec3(1.0), clamp(core * 0.72 + pulseA + sparks + cursor, 0.0, 1.0));

  float glow = exp(-abs(radius - 1.0) * 18.0) * 0.18;
  float alpha = clamp(energy * 0.92 + glow, 0.0, 1.0);
  if (alpha < 0.01) discard;
  gl_FragColor = vec4(color * (energy * 1.35 + glow), alpha);
}
`;

export function ElectricPortal({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    const geometry = new THREE.PlaneGeometry(2, 2);
    const uniforms = {
      uTime: { value: 0 },
      uExcite: { value: 0 },
      uPointer: { value: new THREE.Vector2(-1, -1) },
    };
    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      depthWrite: false,
    });
    scene.add(new THREE.Mesh(geometry, material));

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      renderer.setSize(width, height, false);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();

    let targetExcite = 0;
    const move = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      uniforms.uPointer.value.set(
        (event.clientX - rect.left) / rect.width,
        1 - (event.clientY - rect.top) / rect.height,
      );
      targetExcite = 1;
    };
    const leave = () => {
      targetExcite = 0;
    };
    canvas.addEventListener("pointermove", move);
    canvas.addEventListener("pointerleave", leave);

    let frame = 0;
    const start = performance.now();
    const render = (now: number) => {
      uniforms.uTime.value = reducedMotion ? 2.4 : (now - start) / 1000;
      uniforms.uExcite.value +=
        (targetExcite - uniforms.uExcite.value) * 0.07;
      renderer.render(scene, camera);
      if (!reducedMotion) frame = requestAnimationFrame(render);
    };
    render(start);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerleave", leave);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
}
