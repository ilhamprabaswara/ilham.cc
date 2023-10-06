import Link from 'next/link';
import { useState } from 'react';
import { MenuOpen } from './icons/menuOpen';

export default function NavBar() {
  const [isHidden, setHidden] = useState<boolean>(true);
  const handleHidden = () => {
    setHidden(!isHidden);
  };
  const navLink = [
    { name: 'Work', url: '/work' },
    { name: 'Blog', url: '/blog' },
    { name: 'About', url: '/about' },
  ];
  return (
    <>
      <nav className="sticky top-0 left-0 z-[9997] h-14 min-w-[320px] md:h-[75px] md:mix-blend-exclusion xl:h-[120px]">
        <div className="absolute top-0 left-0 z-[1] h-auto min-h-full w-full">
          <div
            className={`${
              isHidden
                ? 'h-full'
                : 'h-[100vh] bg-sys-light-background dark:bg-sys-dark-background'
            } absolute top-0 z-[1] min-h-[48px] w-full`}
          />
          <div className="relative z-[2] mx-auto flex h-14 w-[91.1%] max-w-[1128px] flex-wrap items-center justify-between bg-sys-light-background dark:bg-sys-dark-background md:h-[75px] md:w-[94.69%] md:bg-transparent md:dark:bg-transparent xl:h-[120px]">
            <Link href="/">
              <span className="whitespace-nowrap font-Poppins text-headline-base font-semibold text-sys-light-on-background dark:text-sys-dark-on-background md:text-sys-light-background">
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
              <MenuOpen className="fill-sys-light-on-background dark:fill-sys-dark-on-background" />
            </button>
            <div
              className={`${
                isHidden ? 'hidden' : 'absolute block'
              } top-[48px] left-0 z-[9999] h-[calc(100vh-48px)] w-full overflow-y-auto px-10 md:block md:h-auto md:w-auto md:bg-transparent md:p-0`}
              id="navbar-default"
            >
              <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:gap-[30px] md:border-0 md:text-sm">
                {navLink.map((item) => (
                  <li key={item.name}>
                    <Link
                      className="mb-[15px] block leading-[25px] transition hover:bg-gray-100 md:mb-0 md:overflow-hidden md:border-0 md:p-0 md:text-sys-light-background md:hover:bg-transparent"
                      key={item.name}
                      href={item.url}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
