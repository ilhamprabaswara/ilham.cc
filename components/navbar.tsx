import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
  const [isHidden, setHidden] = useState<boolean>(true);
  const handleHidden = () => {
    setHidden(!isHidden);
  };
  const navLink = [
    { name: 'About', url: '/about' },
    { name: 'Blog', url: '/blog' },
    { name: 'Playground', url: '/playground' },
  ];
  return (
    <>
      <nav className="sticky top-0 left-0 z-[9997] h-12 min-w-[320px] md:h-[52px] md:mix-blend-exclusion">
        <div className="absolute top-0 left-0 z-[1] h-auto min-h-full w-full">
          <div
            className={`${
              isHidden ? 'h-full' : 'h-[100vh] bg-sys-light-background'
            } absolute top-0 z-[1] min-h-[48px] w-full`}
          />
          <div className="relative z-[2] flex h-[48px] max-w-[980px] flex-wrap items-center justify-between bg-sys-light-background px-4 md:mx-auto md:h-[52px] md:bg-transparent md:px-0">
            <Link href="/">
              <span className="whitespace-nowrap font-Poppins text-[19px] font-semibold text-sys-light-on-background md:text-[21px] md:text-sys-light-background">
                Ilham
              </span>
            </Link>
            <button
              onClick={handleHidden}
              data-collapse-toggle="navbar-default"
              type="button"
              className="rounded-lg text-sm hover:bg-gray-100 md:hidden"
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
                  className="fill-sys-light-on-background"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z"
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
                isHidden ? 'hidden' : 'absolute block'
              } top-[48px] left-0 z-[9999] h-[calc(100vh-48px)] w-full overflow-y-auto px-10 md:block md:h-auto md:w-auto md:bg-transparent md:p-0`}
              id="navbar-default"
            >
              <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:gap-[30px] md:border-0 md:text-sm">
                {navLink.map((item) => (
                  <Link
                    className="mb-[15px] block leading-[25px] transition hover:bg-gray-100 md:mb-0 md:overflow-hidden md:border-0 md:p-0 md:text-sys-light-background md:hover:bg-transparent"
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
