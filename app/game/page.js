// import { UserAuth } from "@/context/AuthContext";

import { Tags } from "@/components";

export default function Game() {
  // const { user } = UserAuth();

  // if (!user) {
  //   return null;
  // }

  return (
    <div>
      <h2 className="text-6xl">Game</h2>
      <Tags />
    </div>
  );
}
