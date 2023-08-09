import Link from "next/link";

export default function TopBar() {
  const baseUrl = "/";
  return (
    <header className="h-12 bg-gray-800 flex justify-between items-center z-50">
      <h1 className=" text-2xl p-2 text-gray-300">
        <Link href={baseUrl}>MUTTO</Link>
      </h1>
      <div className="flex items-center text-gray-300">
        <div className="mr-3 text-sm">로그인을 해주세요</div>
        <div className="mr-3">
          <button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            LOGIN
          </button>
        </div>
      </div>
    </header>
  );
}
