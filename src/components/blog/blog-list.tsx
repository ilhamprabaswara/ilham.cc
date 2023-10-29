import { BlogCard } from './blog-card'

export const BlogList = ({ data }: { data: BlogPostInterface[] }) => {
  return (
    <ul className="grid gap-6 md:grid-cols-3">
      {data?.map(
        ({ slug, category, title, date, image }: BlogPostInterface) => {
          return (
            <li key={slug} className="h-full">
              <BlogCard
                category={category}
                title={title}
                date={date}
                image={image}
                slug={slug}
              />
            </li>
          )
        }
      )}
    </ul>
  )
}
