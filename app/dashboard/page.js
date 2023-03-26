"use client";

import { UserCard } from "@/components";
import { ProtectedRoute } from "@/components/ProtectedRoute";

function Dashboard() {
  return (
    <div>
      <UserCard />
    </div>
  );
}

export default ProtectedRoute(Dashboard);
