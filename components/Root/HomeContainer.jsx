"use client";

import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { AnimatePresence, motion as m } from "framer-motion";

export default function HomeContainer() {
  return (
    <AnimatePresence>
      <m.div
        key="Home"
        className="w-full h-[400px] sm:h-[50rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
      >
        <Canvas>
          <color attach="background" args={["white"]} />
          <Scene />
        </Canvas>
      </m.div>
    </AnimatePresence>
  );
}
