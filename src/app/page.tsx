import { BlogList } from '@/components/blog/blog-list'
import { Headline } from '@/components/landing/headline'
import { getSortedPostsData } from '@/lib/posts'
import Link from 'next/link'

export default function Home() {
  const posts = getSortedPostsData() as BlogPostInterface[]
  return (
    <>
      <Headline />
      <section className="mx-auto max-w-[1128px]">
        <h2 className="mb-5 text-label-sm font-semibold uppercase tracking-[2px] md:mb-[30px]">
          Blog
        </h2>
        <BlogList data={posts} />
        <div className="mt-[30px] rounded-full border border-sys-light-outline px-6 py-[10px] transition duration-[400ms] hover:bg-[#6750A414] xl:mt-[40px]">
          <Link href={'/blog'}>See all posts -&gt;</Link>
        </div>
      </section>
    </>
  )
}
