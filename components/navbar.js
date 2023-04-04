import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isHidden, setHidden] = useState("false");
  const handleHidden = () => {
    setHidden(!isHidden);
  };
  return (
    <header>
      <nav className="border-b border-[#C6C5D0] mb-5 py-[11px] text-[#45464F]">
        <div className="flex flex-wrap items-center justify-between">
          <Link href="/">
            <span className="font-bold font-Raleway text-xl whitespace-nowrap">
              Ilham
            </span>
          </Link>
          <button
            onClick={handleHidden}
            data-collapse-toggle="navbar-default"
            type="button"
            className="text-sm rounded-lg md:hidden hover:bg-gray-100"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z"
                fill="#45464F"
              />
            </svg>
          </button>
          <div
            className={`${isHidden ? "hidden" : ""} w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              {[
                ["Work", "/work"],
                ["Blog", "/blog"],
                ["About", "/about"],
              ].map(([title, url]) => (
                <li key={title}>
                  <Link
                    className="block transition font-semibold py-2 pl-3 pr-4 text-slate-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"
                    href={url}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {/* <nav className="box-border flex flex-col items-center ">
                <div>
                    <Link href="/">Ilham</Link>
                </div>
                <div className="p-[5px] bg-black/[.04] rounded-3xl">
                    {[
                        ['Blog', '/blog'],
                        ['About', '/about'],
                        ['Contact', '/contact'],
                    ].map(([title, url]) => (
                        <Link className="px-4" href={url}>{title}</Link>
                    ))}
                </div>
            </nav> */}
    </header>
  );
}
