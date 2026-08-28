"use client";

export default function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.55} color="#F3F0E8" />
      <directionalLight position={[4, 5, 4]} intensity={0.6} color="#FFFFFF" />
      <pointLight position={[-6, 2, 2]} intensity={12} color="#D71920" distance={14} />
      <pointLight position={[6, -1, 3]} intensity={12} color="#275DFF" distance={14} />
      <spotLight
        position={[0, 8, 4]}
        angle={0.5}
        penumbra={0.8}
        intensity={0.5}
        color="#FFFFFF"
      />
    </>
  );
}
