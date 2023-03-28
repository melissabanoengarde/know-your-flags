"use client";

import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

export default function HomeContainer() {
  return (
    <div className="w-full h-[400px] sm:h-[50rem] ">
      <Canvas>
        <color attach="background" args={["white"]} />
        <Scene />
      </Canvas>
    </div>
  );
}
