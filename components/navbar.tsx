import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isHidden, setHidden] = useState<boolean>(true);
  const handleHidden = () => {
    setHidden(!isHidden);
  };
  const navLink = [
    { name: "About", url: "/about" },
    { name: "Blog", url: "/blog" },
    { name: "Playground", url: "/playground" },
  ];
  return (
    <>
      <nav className="sticky min-w-[320px] top-0 left-0 h-12 mb-5 md:h-[52px] z-[9997]">
        <div className="absolute top-0 left-0 w-full h-auto min-h-full z-[1]">
          <div
            className={`${
              isHidden ? "h-full" : "h-[100vh]"
            } backdrop-blur-[20px] bg-[rgba(255,255,255,0.9)] min-h-[48px] absolute top-0 w-full z-[1] after:bg-[rgba(0,0,0,0.16)] after:block after:h-[1px] after:absolute after:top-full after:w-full`}
          />
          <div className="items-center max-w-[980px] h-[48px] flex flex-wrap relative justify-between px-4 md:h-[52px] md:mx-auto md:px-[22px] xl:px-0 z-[2]">
            <Link href="/">
              <span className="font-semibold leading-6 font-Raleway text-[19px] whitespace-nowrap md:text-[21px]">
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
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z"
                  fill="#45464F"
                />
              </svg>
            </button>
            {/* <div
              className={`${
                isHidden ? "hidden" : ""
              } w-full md:block md:w-auto`}
              id="navbar-default"
            > */}
            <div
              className={`${
                isHidden ? "hidden" : "block absolute"
              } overflow-y-auto top-[48px] left-0 h-[calc(100vh-48px)] z-[9999] w-full px-10 md:block md:h-auto md:w-auto md:bg-transparent md:p-0`}
              id="navbar-default"
            >
              <ul className="flex flex-col mt-4 md:flex-row md:gap-[30px] md:mt-0 md:text-sm md:border-0">
                {navLink.map((item) => (
                  <Link
                    className="block text-[17px] leading-[25px] transition mb-[15px] text-[#45464F] hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 md:mb-0 md:text-xs md:overflow-hidden md:leading-3"
                    key={item.name}
                    href={item.url}
                  >
                    {item.name}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
