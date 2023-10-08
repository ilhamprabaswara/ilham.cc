import { BlogCard } from './blog-card'
import Image1 from '@/assets/images/DSC00794-900x600.jpg'
import Image2 from '@/assets/images/DSC03182-copy-900x600.jpg'
import Image3 from '@/assets/images/DSC03195-copy-900x600.jpg'
import { StaticImageData } from 'next/image'

export const BlogList = ({ data }: any) => {
  return (
    <ul className="grid gap-6 md:grid-cols-3">
      {data?.map(({ slug, category, title, date }: BlogDataInterface) => {
        return (
          <li key={slug} className="h-full">
            <BlogCard
              category={category}
              title={title}
              date={date}
              imageSrc={Image1}
              slug={slug}
            />
          </li>
        )
      })}
    </ul>
  )
}
