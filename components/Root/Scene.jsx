"use client";

import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Scene() {
  const sphereRef = useRef();

  useFrame((state, delta) => {
    sphereRef.current.rotation.y = sphereRef.current.rotation.y += delta / 5;
  });

  return (
    <>
      {/* <OrbitControls /> */}
      <ambientLight />
      <pointLight position={[-1, 1, 1]} intensity={8} penumbra={1} />

      <mesh ref={sphereRef} rotation={[0, 0, 0.5]}>
        <sphereGeometry args={[2, 30, 30]} />
        <meshStandardMaterial color="lightgray" wireframe />
      </mesh>
    </>
  );
}
