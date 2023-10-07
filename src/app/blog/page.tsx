import { BlogList } from '@/components/blog/blog-list'

export default function Blog() {
  return (
    <>
      <div className="grid gap-6 mx-auto max-w-[1128px]">
        <BlogList />
        <BlogList />
        <BlogList />
      </div>
    </>
  )
}
