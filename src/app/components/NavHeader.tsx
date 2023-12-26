import Link from "next/link";

export default function NavHeader() {
  return (
    <div className="relative shadow-md">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"></div>

      <div className="w-full backdrop-blur-sm">
        <div className="relative z-1 h-16 mx-auto py-14 px-5 max-w-7xl flex items-center justify-between text-white">
          <Link
            className="text-3xl sm:text-6xl hover:text-cyan-400 transition-colors text-center font-Caveat"
            href=""
          >
            Gustavo Cintra
          </Link>

          <ul className="flex items-center gap-5">
            <li>
              <Link className="hover:text-cyan-400 transition-colors" href="">
                Soluções
              </Link>
            </li>
            <li>
              <Link className="hover:text-cyan-400 transition-colors" href="">
                Metodologia
              </Link>
            </li>
            <li className="hidden sm:block">
              <Link className="hover:text-cyan-400 transition-colors" href="">
                Quem somos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
