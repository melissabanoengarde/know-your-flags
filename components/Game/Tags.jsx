export default function Tags({ name }) {
  return (
    <button className="px-1 py-2 text-sm text-gray-400 uppercase duration-100 border border-gray-300 sm:text-md hover:bg-gray-300 hover:text-white md:text-lg active:bg-gray-300 active:text-white">
      {name}
    </button>
  );
}
