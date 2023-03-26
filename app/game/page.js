import { GameContainer, Intro } from "@/components";

export default function Game() {
  return (
    <section className="w-full border border-red-200 subtract-header-height">
      <GameContainer>
        <Intro />
      </GameContainer>
    </section>
  );
}
