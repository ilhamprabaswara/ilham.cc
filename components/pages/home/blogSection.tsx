import Link from "next/link";

const BlogSection = ({ children }) => {
  return (
    <section className="blog">
      <h2 className="font-semibold text-[11px] leading-[1.6em] tracking-[2px] uppercase mb-5">
        Blog
      </h2>
      <ul className="flex flex-wrap flex-row justify-between items-stretch">
        {children}
      </ul>
      <Link href={`/blog`}>
        <div className="inline-block bg-[#004DEB] px-6 py-[10px] rounded-full text-[#FFFFFF] text-sm mt-6">
          {`See all posts ->`}
        </div>
      </Link>
    </section>
  );
};

export default BlogSection;
