import Link from "next/link"
import { useState } from "react"

export default function NavBar() {
    const [isHidden, setHidden] = useState('false')
    const handleHidden = () => {
        setHidden(!isHidden);
    }
    return (
        <header>
            <nav className="border-b border-gray-200 mb-5 py-2.5 text-slate-700">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <Link href="/" className="flex items-center">
                        <span className="font-Raleway self-center text-xl font-semibold whitespace-nowrap">ilham</span>
                    </Link>
                    <button onClick={handleHidden} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-slate-700 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className={`${isHidden ? "hidden" : ""} w-full md:block md:w-auto`} id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                            {[
                                ['Blog', '/blog'],
                                ['About', '/about'],
                                ['Work', '/work'],
                            ].map(([title, url]) => (
                                <li key={title}>
                                    <Link className="block font-semibold py-2 pl-3 pr-4 text-slate-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0" href={url}>{title}</Link>
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
    )
}