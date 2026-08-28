"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Text } from "@react-three/drei";
import * as THREE from "three";

export default function DesignFolder3D({ position, category, active, onClick }) {
  const group = useRef(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (!group.current) return;
    const targetZ = hovered ? position[2] + 0.5 : position[2];
    const targetRotY = hovered ? 0.07 : 0;
    const targetScale = hovered ? 1.05 : 1;

    group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, targetZ, 0.12);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotY, 0.12);
    const s = THREE.MathUtils.lerp(group.current.scale.x, targetScale, 0.12);
    group.current.scale.set(s, s, s);
  });

  return (
    <group
  ref={group}
  position={position}
  onPointerOver={(e) => {
  e.stopPropagation();
  setHovered(true);
}}
onPointerOut={() => setHovered(false)}
>
      <RoundedBox args={[1.5, 1.05, 0.12]} radius={0.05} smoothness={4}>
        <meshStandardMaterial
          color={active ? category.accent : "#151515"}
          roughness={0.55}
          metalness={0.1}
          emissive={hovered ? category.accent : "#000000"}
          emissiveIntensity={hovered ? 0.15 : 0}
        />
      </RoundedBox>

      <RoundedBox args={[0.65, 0.22, 0.02]} radius={0.02} position={[-0.4, 0.58, 0]}>
        <meshStandardMaterial color={category.accent} roughness={0.5} />
      </RoundedBox>

      <Text
        position={[0, -0.05, 0.07]}
        fontSize={0.11}
        color="#F3F0E8"
        maxWidth={1.2}
        anchorX="center"
        anchorY="middle"
        textAlign="center"
      >
        {category.name.toUpperCase()}
      </Text>
      <Text
        position={[0, -0.35, 0.07]}
        fontSize={0.075}
        color="#9A9A9A"
        anchorX="center"
        anchorY="middle"
      >
        {`${category.count} PROJECTS`}
      </Text>
    </group>
  );
}
