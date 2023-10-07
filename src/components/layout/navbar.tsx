import Link from 'next/link'
export const NavBar = () => {
  return (
    <div className="py-[10px] px-4 md:py-5 md:px-6 xl:py-10 xl:px-0">
      <Link className="font-poppins text-headline-sm font-semibold" href={'/'}>
        Ilham
      </Link>
    </div>
  )
}
