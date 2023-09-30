import Link from 'next/link';

export default function Footer() {
  return (
    <div className="mx-auto w-[91.1%] max-w-[1128px] md:w-[94.69%]">
      <div className="mt-10 border-t border-t-sys-light-outline py-8 text-center font-Poppins text-body-sm text-sys-light-on-background dark:border-t-sys-dark-outline dark:text-sys-dark-on-background md:py-10 xl:mt-[60px] xl:py-[60px]">
        ©2023 Ilham
        <br /> Built with{' '}
        <Link
          className="text-sys-light-primary underline dark:text-sys-dark-primary"
          href={'https://nextjs.org/'}
        >
          Next.js
        </Link>
        <br /> Hosted by{' '}
        <Link
          className="text-sys-light-primary underline dark:text-sys-dark-primary"
          href={'https://vercel.com/'}
        >
          Vercel
        </Link>
      </div>
    </div>
  );
}
