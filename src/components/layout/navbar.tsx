import Link from 'next/link'
export const NavBar = () => {
  return (
    <div className="mx-auto flex max-w-[1128px] items-center justify-between py-[10px] md:py-5 xl:py-10">
      <Link className="font-poppins text-headline-sm font-semibold" href={'/'}>
        Ilham
      </Link>
      <div className="text-body-base">
        <ul className="flex gap-6">
          <li>
            <Link href={'/#'}>Work</Link>
          </li>
          <li>
            <Link href={'/blog'}>Blog</Link>
          </li>
          <li>
            <Link href={'/#'}>About</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
