import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface BlogCardTypes {
  category: string
  title: string
  date: string
  imageSrc: StaticImageData
}
export const BlogCard = ({
  category,
  title,
  date,
  imageSrc,
}: BlogCardTypes) => {
  return (
    <Link
      className="group flex flex-col overflow-hidden rounded-2xl border border-sys-light-outline transition-all duration-[400ms] hover:bg-[#6750A414]"
      href={'#'}
    >
      <div className="h-[180px] md:h-[150px] xl:h-[200px]">
        <div className="h-full overflow-clip">
          <Image
            className="h-full object-cover transition-all duration-[400ms] group-hover:scale-[1.03]"
            src={imageSrc}
            alt="card-image"
          />
        </div>
      </div>
      <div className="flex h-full flex-col justify-between p-6">
        <div className="font-bold">
          <div className="mb-2 text-label-base uppercase">{category}</div>
          <div className="text-title-lg">{title}</div>
        </div>
        <div className="mt-2 font-semibold">{date}</div>
      </div>
    </Link>
  )
}