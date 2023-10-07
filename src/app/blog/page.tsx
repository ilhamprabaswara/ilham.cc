import { BlogList } from '@/components/blog/blog-list'

export default function Blog() {
  return (
    <>
      <div className="mx-auto grid max-w-[1128px] gap-6">
        <BlogList />
        <BlogList />
        <BlogList />
      </div>
    </>
  )
}
