import Link from "next/link";

export default function Intro() {
  return (
    <>
      <div className="border border-green-200 w-[300px] h-[300px] rounded-full bg-green-200" />
      {/* how to play? instructions? need more content */}
      <Link
        href="/game/play"
        className="px-20 py-1 text-gray-400 uppercase duration-100 bg-white border border-gray-300 hover:bg-gray-300 hover:text-white active:bg-gray-300 active:text-white"
      >
        Start
      </Link>
    </>
  );
}
