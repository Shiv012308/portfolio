"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import SceneLights from "@/components/three/SceneLights";
import FloatingPoster from "@/components/three/FloatingPoster";
import CameraRig from "@/components/three/CameraRig";

function DesignFolder() {
  return (
    <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.2}>
      <group position={[1.8, -1, -0.5]} rotation={[0.1, -0.4, 0.05]}>
        <RoundedBox args={[1.6, 1.1, 0.15]} radius={0.05} smoothness={4}>
          <meshStandardMaterial color="#D71920" roughness={0.6} />
        </RoundedBox>
        <RoundedBox args={[0.7, 0.25, 0.02]} radius={0.03} position={[-0.35, 0.65, 0]}>
          <meshStandardMaterial color="#D71920" roughness={0.6} />
        </RoundedBox>
      </group>
    </Float>
  );
}

function AbstractShapes() {
  return (
    <>
      <Float speed={0.6} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh position={[-2.4, 1.3, -1.5]}>
          <torusGeometry args={[0.4, 0.12, 16, 48]} />
          <meshStandardMaterial color="#1746B8" roughness={0.4} metalness={0.2} />
        </mesh>
      </Float>
      <Float speed={0.4} rotationIntensity={0.15} floatIntensity={0.2}>
        <mesh position={[2.6, 1.6, -2]}>
          <icosahedronGeometry args={[0.35, 0]} />
          <meshStandardMaterial color="#F3F0E8" roughness={0.7} />
        </mesh>
      </Float>
      <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.25}>
        <mesh position={[-2.2, -1.4, -1]}>
          <sphereGeometry args={[0.22, 32, 32]} />
          <meshStandardMaterial color="#D1AA4F" roughness={0.5} metalness={0.3} />
        </mesh>
      </Float>
    </>
  );
}

function GridPlane() {
  return (
    <mesh position={[0, 0, -4]} rotation={[0, 0, 0]}>
      <planeGeometry args={[20, 12]} />
      <meshBasicMaterial color="#0C0C0E" transparent opacity={0.6} />
    </mesh>
  );
}

export default function HeroScene({ scrollProgress }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 6], fov: 45 }}
    >
      <Suspense fallback={null}>
        <color attach="background" args={["#050505"]} />
        <fog attach="fog" args={["#050505", 6, 14]} />
        <SceneLights />
        <GridPlane />

        <FloatingPoster position={[-1.4, 0.4, 0]} rotation={[0, 0.15, -0.05]} color="#F3F0E8" label="ARTBOARD 01" />
        <FloatingPoster position={[0.2, -0.6, -1.2]} rotation={[0, -0.1, 0.05]} color="#D71920" label="" scale={0.85} speed={0.5} />
        <FloatingPoster position={[1.6, 1.1, -1.8]} rotation={[0, -0.25, 0.03]} color="#1746B8" label="" scale={0.7} speed={0.4} />

        <DesignFolder />
        <AbstractShapes />

        <CameraRig scrollProgress={scrollProgress} />
      </Suspense>
    </Canvas>
  );
}
