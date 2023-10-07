import Link from 'next/link'
export const NavBar = () => {
  return (
    <div className="px-4 py-[10px] md:px-6 md:py-5 xl:px-0 xl:py-10">
      <Link className="font-poppins text-headline-sm font-semibold" href={'/'}>
        Ilham
      </Link>
    </div>
  )
}
