"use client";

import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import Link from "next/link";
import { AnimatePresence, motion as m } from "framer-motion";
import { UserAuth } from "@/context/AuthContext";

export default function HomeContainer() {
  const { user } = UserAuth();
  return (
    <AnimatePresence>
      <section className="w-full subtract-header-height  z-[10] lg:z-0 lg:flex lg:justify-between lg:items-center lg:gap-0 px-8 lg:px-20 xl:px-48">
        <m.div
          key="globe"
          className="fixed top-40 md:top-20 lg:top-0 left-0 h-[70%] md:h-[100%] w-full lg:h-[80%] lg:w-1/2 z-[-1] lg:static lg:z-0 lg:order-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <Canvas>
            <color attach="background" args={["white"]} />
            <Scene />
          </Canvas>
        </m.div>

        <m.div
          key="content"
          className="pt-20 lg:pt-[10rem] lg:pl-[3rem] text-center uppercase text-gray-400 select-none lg:text-left lg:flex lg:flex-col lg:gap-3 lg:w-1/2 lg:h-[400px]  lg:items-start lg:order-1 lg:self-start lg:relative lg:z-20 bg-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h2 className="text-7xl mb-3 lg:mb-0 lg:text-[10vmin]">WorldFlags</h2>
          <p className="px-5 lg:px-0 md:w-[500px] lg:w-[400px] mx-auto lg:mx-0 text-sm mb-8 ">
            Challenge your geographical prowess. Test your ability to identify
            the countries represented by a variety of flags from across the
            world.
          </p>
          <Link
            className="px-20 py-1 text-gray-400 uppercase duration-100 bg-white border border-gray-300 hover:bg-gray-300 hover:text-white active:bg-gray-300 active:text-white"
            href={user ? `/game` : `/login`}
          >
            Play
          </Link>
        </m.div>
      </section>
    </AnimatePresence>
  );
}
