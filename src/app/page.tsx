import { BlogList } from '@/components/blog/blog-list'
import { Headline } from '@/components/landing/headline'
import { ButtonOutline } from '@/components/ui/buttons'
import { getSortedPostsData } from '@/lib/posts'
import Link from 'next/link'

export default function Home() {
  const posts = getSortedPostsData()
  return (
    <>
      <Headline />
      <section className="mx-auto max-w-[1128px]">
        <h2 className="mb-5 text-label-sm font-semibold uppercase tracking-[2px] md:mb-[30px]">
          Blog
        </h2>
        <BlogList data={posts} />
        <ButtonOutline className="mt-[30px] rounded-full xl:mt-[40px]">
          <Link href={'/blog'}>See all posts -&gt;</Link>
        </ButtonOutline>
      </section>
    </>
  )
}
