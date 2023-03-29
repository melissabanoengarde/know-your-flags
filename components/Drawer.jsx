import Link from "next/link";
import { UserAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

import useFetchUserInfo from "@/hooks/fetchUserInfo";

export default function Drawer({ open, isOpen }) {
  const { user, logout } = UserAuth();
  const router = useRouter();

  const { infos } = useFetchUserInfo();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  return (
    <aside
      className={`md:hidden w-full mt-[40px] fixed top-0 right-0 bg-white border-b-[1px] transition-top ease-in-out duration-500 z-10 text-gray-400
        ${open ? "top-[0px]" : "top-[-1000px]"}`}
    >
      <ul
        className="text-sm"
        onClick={() =>
          setTimeout(() => {
            isOpen(!open);
          }, 500)
        }
      >
        <li
          className={`px-5 py-1 uppercase hover:bg-green-100 cursor-pointer border-b-[1px] ${
            user && `flex items-center justify-between`
          }`}
        >
          {!user ? (
            <Link href="/login">Play</Link>
          ) : (
            <>
              <Link href="/dashboard">Dashboard</Link>{" "}
              <p className="text-xs select-none">{infos.username}</p>
            </>
          )}
        </li>
        {user && (
          <li className="px-5 py-1 uppercase cursor-pointer hover:bg-green-100 border-b-[1px]">
            <Link href="/game">Play</Link>
          </li>
        )}
        <li className="px-5 py-1 uppercase cursor-pointer hover:bg-green-100 border-b-[1px]">
          <Link href="/countries">Countries</Link>
        </li>
        {user && (
          <li
            className="px-5 py-1 uppercase cursor-pointer hover:bg-green-100 border-t-[1px]"
            onClick={handleLogout}
          >
            Logout
          </li>
        )}
      </ul>
    </aside>
  );
}

// backdrop-blur-md bg-white-3/4
