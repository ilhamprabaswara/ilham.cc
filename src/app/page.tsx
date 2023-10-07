import { BlogList } from '@/components/blog/blog-list'
import { Headline } from '@/components/landing/headline'
import { ButtonOutline } from '@/components/ui/buttons'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Headline />
      <section className='max-w-[1128px] mx-auto'>
        <h2 className="mb-5 text-label-sm font-semibold uppercase tracking-[2px] md:mb-[30px]">
          Blog
        </h2>
        <BlogList />
        <ButtonOutline className="mt-[30px] rounded-full xl:mt-[40px]">
          <Link href={'/blog'}>See all posts -&gt;</Link>
        </ButtonOutline>
      </section>
    </>
  )
}
