import Link from 'next/link';
import Date from '../../date';
export default function BlogList({
  categories,
  date,
  img,
  slug,
  title,
}: PostsDataTypes) {
  return (
    <li role="listitem" className="relative mt-6 basis-full first:mt-0">
      <Link
        href={`blog/${slug}`}
        className="relative z-0 flex h-full w-full flex-col overflow-hidden rounded-xl bg-[#FFFFFF]"
      >
        <div className="relative block w-full shrink-[1] grow-0 basis-auto pt-[56.25%]">
          <div
            style={{
              backgroundImage: `url(${img})`,
            }}
            className="absolute left-0 top-0 z-0 block h-full w-full bg-cover bg-scroll bg-clip-border bg-[50%_0%] bg-no-repeat"
          />
        </div>
        <div className="flex flex-col justify-between p-6">
          <div className="mb-2 text-xs font-bold uppercase leading-4">
            {categories}
          </div>
          <h2 className="w-full text-[19px] font-bold leading-[23px] text-[#1B1B1F]">
            {title}
          </h2>
          <div className="mt-2 text-sm font-semibold leading-[18px] text-[#6e6e73]">
            <Date dateString={date} />
          </div>
        </div>
      </Link>
    </li>
  );
}
