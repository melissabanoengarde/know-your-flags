import Link from "next/link";

export default function Footer() {
  const now = new Date();
  return (
    <footer className="w-full fixed bottom-3 md:bottom-4 left-0 text-center text-gray-200 text-xs uppercase select-none ">
      © {now.getFullYear()} Worldflags, open-sourced on{" "}
      <Link href="#" target="_blank" className="hover:text-green-300">
        GitHub
      </Link>{" "}
      by{" "}
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
