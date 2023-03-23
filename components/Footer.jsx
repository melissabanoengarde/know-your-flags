import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full absolute bottom-3 md:bottom-4 left-0 text-center text-gray-200 text-xs uppercase select-none ">
      © Worldflags, open-sourced by{" "}
      <Link
        href="https://github.com/melissabanoengarde"
        target="_blank"
        className="hover:text-green-300"
      >
        MBG
      </Link>
    </footer>
  );
}
