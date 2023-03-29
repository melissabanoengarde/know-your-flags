"use client";
import { Canvas } from "@react-three/fiber";

export default function SceneContainer({ children }) {
  return (
    <Canvas>
      <color attach="background" args={["white"]} />
      {children}
    </Canvas>
  );
}
