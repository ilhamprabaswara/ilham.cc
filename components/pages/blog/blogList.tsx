import Link from "next/link";
import Date from "../../date";
export default function BlogList({
  categories,
  date,
  img,
  slug,
  title,
}: PostsDataTypes) {
  return (
    <li role="listitem" className="mt-6 first:mt-0 basis-full relative">
      <Link
        href={`blog/${slug}`}
        className="bg-[#FFFFFF] flex flex-col h-full rounded-xl overflow-hidden relative w-full z-0"
      >
        <div className="block basis-auto grow-0 pt-[56.25%] shrink-[1] w-full relative">
          <div
            style={{
              backgroundImage: `url(${img})`,
            }}
            className="block h-full left-0 absolute top-0 w-full z-0 bg-scroll bg-clip-border bg-[50%_0%] bg-no-repeat bg-cover"
          />
        </div>
        <div className="flex flex-col justify-between p-6">
          <div className="font-bold uppercase text-xs leading-4 mb-2">
            {categories}
          </div>
          <h2 className="w-full text-[#1B1B1F] text-[19px] font-bold leading-[23px]">
            {title}
          </h2>
          <div className="text-sm font-semibold text-[#6e6e73] mt-2 leading-[18px]">
            <Date dateString={date} />
          </div>
        </div>
      </Link>
    </li>
  );
}
