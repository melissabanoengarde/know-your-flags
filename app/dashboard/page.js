import { UserCard } from "@/components";
import { UserAuth } from "@/context/AuthContext";

export default function Dashboard() {
  const { user } = UserAuth();

  if (!user) {
    return null;
  }

  return (
    <div>
      <UserCard />
    </div>
  );
}
