import { RegisterForm } from "@/components";
import { GoogleConnectBtn } from "@/components";
import Link from "next/link";

export default function Register() {
  return (
    <section className="flex justify-center w-full subtract-header-height">
      <div className="sm:w-[50%] lg:w-[450px] w-5/6 flex flex-col items-center justify-center gap-3  h-full">
        <h2 className="text-gray-400 uppercase select-none">Register</h2>

        <RegisterForm btnText="Sign up" />

        <small className="text-gray-400">
          Already played?{" "}
          <Link
            href="/login"
            className="border-b-[1px] border-b-green-200 duration-100 hover:text-gray-400 hover:bg-green-100"
          >
            Login
          </Link>
        </small>

        <div className="flex items-center w-full h-[20px] gap-2 py-7">
          <span className="h-[1px] w-full bg-gray-200" />{" "}
          <p className="pb-1 text-sm text-gray-400">or</p>{" "}
          <span className="h-[1px] w-full bg-gray-200" />
        </div>

        <GoogleConnectBtn />
      </div>
    </section>
  );
}
