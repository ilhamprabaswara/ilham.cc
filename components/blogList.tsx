import Link from "next/link";
export default function BlogList(props: any) {
  const allPostsData = Object.values(props);
  return (
    <section>
      {allPostsData.map(({ date, excerpt, img, slug, title }) => (
        <article key={slug} id={slug}>
          <img
            className="rounded mb-[10px] h-[200px] md:h-[250px] w-full object-cover"
            src={img}
          />
          <h2 className="mb-[5px] w-full text-[#1B1B1F] text-xl font-medium leading-[1.4em]">
            <Link href={`blog/${slug}`}>{`${title} ->`}</Link>
          </h2>
          {/* <p className="text-[14px] leading-[1.6em]">{excerpt}</p> */}
        </article>
      ))}
    </section>
  );
}
