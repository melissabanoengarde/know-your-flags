import Link from "next/link";

export default function Footer() {
  const now = new Date();
  return (
    <footer className="fixed left-0 w-full text-xs text-center text-gray-300 uppercase select-none bottom-3 md:bottom-4">
      © {now.getFullYear()} Worldflags, open-sourced on{" "}
      <Link
        href="https://github.com/melissabanoengarde/know-your-flags"
        target="_blank"
        className="hover:text-green-300"
      >
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
