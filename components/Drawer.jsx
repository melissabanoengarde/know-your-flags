import Link from "next/link";
import { UserAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Drawer({ open }) {
  const { user, logout } = UserAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  return (
    <aside
      className={`md:hidden w-full mt-[40px] fixed top-0 right-0 bg-white border-b-[1px] transition-top ease-in-out duration-500 z-10 text-gray-400
        ${open ? "top-[0px]" : "top-[-1000px]"}`}
    >
      <ul className="text-sm">
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
              <p className="text-xs select-none">{user.displayName}</p>
            </>
          )}
        </li>
        <li className="px-5 py-1 uppercase cursor-pointer hover:bg-green-100 border-b-[1px]">
          <Link href="/countries">Review</Link>
        </li>
        <li className="px-5 py-1 uppercase cursor-pointer hover:bg-green-100">
          <Link href="/about">About</Link>
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
      {/* <p className="text-xs text-center text-gray-400 uppercase">Worldflags</p> */}
    </aside>
  );
}

// backdrop-blur-md bg-white-3/4
