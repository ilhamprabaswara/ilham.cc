import Image from 'next/image'
import { BlogCard } from './blog-card'
import Image1 from '@/assets/images/DSC00794-900x600.jpg'
import Image2 from '@/assets/images/DSC03182-copy-900x600.jpg'
import Image3 from '@/assets/images/DSC03195-copy-900x600.jpg'

export const BlogList = () => {
  return (
    <ul className="grid gap-6 md:grid-cols-3">
      <li className="h-full">
        <BlogCard
          category="Review"
          title="The Future of AI in Healthcare: Transforming Medicine with Cutting-Edge Technology"
          date="September 22, 2023"
          imageSrc={Image1}
        />
      </li>
      <li className="h-full">
        <BlogCard
          category="Review"
          title="Blockchain Beyond Cryptocurrency: Exploring Real-World Applications"
          date="September 22, 2023"
          imageSrc={Image2}
        />
      </li>
      <li className="h-full">
        <BlogCard
          category="Development"
          title="5G Revolution: Unleashing the Potential of Hyperconnected Smart Cities"
          date="September 22, 2023"
          imageSrc={Image3}
        />
      </li>
    </ul>
  )
}
