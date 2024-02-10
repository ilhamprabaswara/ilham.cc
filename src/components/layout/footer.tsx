import Link from 'next/link'
const Footer = () => {
  return (
    <div className="py-[30px] text-center text-body-base xl:py-10">
      ©2023{' '}
      <Link className="font-bold" href={'#'}>
        Ilham
      </Link>
      . All Rights Reserved.
    </div>
  )
}

export default Footer
