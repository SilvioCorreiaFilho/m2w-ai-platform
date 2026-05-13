"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 1800;

function ParticleField() {
  const meshRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const { positions, colors, sizes } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 3.5 + Math.random() * 8;

      positions[i3]     = r * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.55;
      positions[i3 + 2] = r * Math.cos(phi) - 2;

      /* Lime-to-amber gradient: #C2FF3D → #FF8C00 */
      const t = Math.random();
      if (t < 0.65) {
        /* Lime family */
        colors[i3]     = 0.55 + t * 0.2;   /* R */
        colors[i3 + 1] = 0.90 + t * 0.08;  /* G */
        colors[i3 + 2] = 0.05 + t * 0.08;  /* B */
      } else {
        /* Warm amber/orange accent */
        const u = (t - 0.65) / 0.35;
        colors[i3]     = 0.90 + u * 0.08;
        colors[i3 + 1] = 0.40 + u * 0.15;
        colors[i3 + 2] = 0.02;
      }

      sizes[i] = Math.random() * 0.03 + 0.004;
    }

    return { positions, colors, sizes };
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 0.35;
      mouseRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 0.35;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.014 + mouseRef.current.x * 0.45;
    meshRef.current.rotation.x =
      Math.sin(t * 0.007) * 0.10 + mouseRef.current.y * 0.28;
    meshRef.current.rotation.z = t * 0.005;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={PARTICLE_COUNT}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={PARTICLE_COUNT}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.055}
        vertexColors
        transparent
        opacity={0.45}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function OrbitRing({
  radius,
  speed,
  color,
  opacity,
}: {
  radius: number;
  speed: number;
  color: string;
  opacity: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = t * speed * 0.7;
    ref.current.rotation.y = t * speed;
    ref.current.rotation.z = t * speed * 0.4;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.006, 8, 120]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

export function MiaScene() {
  return (
    <>
      <ambientLight intensity={0.08} />
      <ParticleField />
      {/* Lime / warm rings replacing the old violet ones */}
      <OrbitRing radius={2.6} speed={0.11} color="#C2FF3D" opacity={0.10} />
      <OrbitRing radius={4.0} speed={0.06} color="#FF8C00" opacity={0.07} />
      <OrbitRing radius={5.5} speed={0.04} color="#C2FF3D" opacity={0.05} />
    </>
  );
}
