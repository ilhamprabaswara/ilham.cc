import Link from 'next/link'
export const Footer = () => {
  return (
    <div className="text-center text-body-sm">
      ©2023{' '}
      <Link className="font-bold" href={'#'}>
        Ilham
      </Link>
      . All Rights Reserved.
    </div>
  )
}
