import { GameContainer, SceneContainer, Scene } from "@/components";
import Link from "next/link";

export default function Game() {
  return (
    <section className="w-full text-gray-400 subtract-header-height">
      <GameContainer>
        <div className="w-[500px] h-[500px]">
          <SceneContainer>
            <Scene />
          </SceneContainer>
        </div>

        {/* how to play? instructions? need more content */}
        <div>
          <Link
            href="/game/play"
            className="relative top-[-2rem] px-20 py-1  uppercase duration-100 bg-white border border-gray-300 hover:bg-gray-300 hover:text-white active:bg-gray-300 active:text-white mr-3"
          >
            Start
          </Link>
          <Link
            href="/countries"
            className="relative top-[-2rem] px-10 py-1  uppercase duration-100 bg-white border border-gray-300 hover:bg-gray-300 hover:text-white active:bg-gray-300 active:text-white"
          >
            Review countries
          </Link>
        </div>
      </GameContainer>
    </section>
  );
}
