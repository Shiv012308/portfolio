"use client";

import { Float, RoundedBox, Text } from "@react-three/drei";

export default function FloatingPoster({
  position,
  rotation = [0, 0, 0],
  color = "#F3F0E8",
  label = "",
  scale = 1,
  speed = 0.7,
}) {
  return (
    <Float speed={speed} rotationIntensity={0.15} floatIntensity={0.25}>
      <group position={position} rotation={rotation} scale={scale}>
        <RoundedBox args={[1.4, 1.9, 0.04]} radius={0.03} smoothness={4}>
          <meshStandardMaterial color={color} roughness={0.75} metalness={0.05} />
        </RoundedBox>
        {label && (
          <Text
            position={[0, 0, 0.03]}
            fontSize={0.16}
            color={color === "#F3F0E8" ? "#050505" : "#F3F0E8"}
            maxWidth={1.1}
            anchorX="center"
            anchorY="middle"
            font={undefined}
          >
            {label}
          </Text>
        )}
      </group>
    </Float>
  );
}
