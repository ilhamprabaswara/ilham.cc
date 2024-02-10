import Link from 'next/link';
import Date from '../../date';
import { PostsDataTypes } from '@/interfaces/postData.d';
import { useEffect, useRef } from 'react';
export default function BlogList({
  categories,
  date,
  img,
  slug,
  title,
}: PostsDataTypes) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(cardRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <li
      role="listitem"
      ref={cardRef}
      className="blog-card relative h-full first:mt-0"
    >
      <Link
        href={`blog/${slug}`}
        className="relative z-0 flex h-full w-full flex-col overflow-hidden rounded-xl bg-sys-light-surface-container dark:bg-sys-dark-surface-container"
      >
        <div className="relative block w-full shrink-[1] grow-0 basis-auto pt-[56.25%]">
          <div
            style={{
              backgroundImage: `url(${img})`,
            }}
            className="absolute left-0 top-0 z-0 block h-full w-full bg-cover bg-scroll bg-clip-border bg-[50%_0%] bg-no-repeat"
          />
        </div>
        <div className="flex h-full flex-col justify-between p-6">
          <div>
            <div className="mb-2 text-body-sm font-bold uppercase leading-4 tracking-wide text-sys-light-on-surface-variant dark:text-sys-dark-on-surface-variant">
              {categories}
            </div>
            <h2 className="w-full text-[19px] font-bold leading-[23px] text-sys-light-on-surface dark:text-sys-dark-on-surface">
              {title}
            </h2>
          </div>
          <div className="mt-2 text-sm font-semibold leading-[18px] text-sys-light-on-surface-variant dark:text-sys-dark-on-surface-variant">
            <Date dateString={date} />
          </div>
        </div>
      </Link>
    </li>
  );
}
