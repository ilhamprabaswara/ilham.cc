'use client'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import './styles.css'
import Date from '@/utils/date'

export const BlogCard = ({
  category,
  title,
  date,
  imageSrc,
  slug,
}: BlogDataInterface) => {
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-up')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])
  return (
    <Link
      ref={cardRef}
      className="blog-card group flex h-full flex-col overflow-hidden rounded-2xl border border-sys-light-outline transition-all duration-[400ms] hover:bg-[#6750A414]"
      href={`/blog/${slug}`}
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
        <div className="mt-2 font-semibold">
          <Date dateString={date} />
        </div>
      </div>
    </Link>
  )
}
