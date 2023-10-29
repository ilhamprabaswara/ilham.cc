import { BlogList } from '@/components/blog/blog-list'
import { getSortedPostsData } from '@/lib/posts'

export default function Blog() {
  const posts = getSortedPostsData() as BlogPostInterface[]
  return (
    <>
      <div className="mx-auto mt-[30px] grid max-w-[1128px] gap-6">
        <BlogList data={posts} />
      </div>
    </>
  )
}
