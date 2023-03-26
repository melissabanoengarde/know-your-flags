import Link from "next/link";
import { UserAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Menu({ showMenu, user }) {
  const { logout } = UserAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };
  return (
    <>
      {user && (
        <div
          className={`hidden md:block fixed z-10 right-[1rem] duration-700 ease-in-out transition-top ${
            showMenu ? `top-[40px]` : `top-[-1000px]`
          }`}
        >
          <ul className="uppercase text-gray-400 text-sm flex flex-col border-b-[1px] border-l-[1px] border-r-[1px] bg-white">
            <li className="py-1 px-4 text-right border-b-[1px] hover:bg-green-100 cursor-pointer">
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li
              onClick={handleLogout}
              className="py-1 px-4 text-right hover:bg-green-100 cursor-pointer"
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
