import Layout from "@/components/layout";
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import Date from "@/components/date";

export default function Home({ allPostsData }) {
  allPostsData = allPostsData.slice(0, 3);
  return (
    <>
      <Layout>
        <main className="w-full mx-auto">
          <div className="mb-[50px] md:w-[648px]">
            <img
              className="h-[215px] mb-2.5 object-cover rounded-lg md:h-[325px] md:w-[552px]"
              src="/ilham-avatar-large.png"
            />
            <p className="font-semibold text-xl leading-[1.6em] text-[#1B1B1F] md:text-2xl md:leading-[1.6em]">
              Hi! I’m Ilham — Full time nerd.
            </p>
            <p className="text-sm leading-[1.6em] text-[#45464F] md:text-xl md:leading-[1.6em]">
              A front-end enthusiast from Indonesia. Interested in React, Node,
              visual design, bikes, photography, and music.
            </p>
          </div>
          <div className="blog">
            <div className="font-semibold text-[11px] leading-[1.6em] tracking-[2px] uppercase mb-5">
              Blog
            </div>
            <div className="grid gap-10 mb-10 md:grid-cols-3 md:gap-9">
              {/* <BlogList {...allPostsData} /> */}
              {allPostsData.map(
                ({ categories, date, excerpt, img, slug, title }) => (
                  <article
                    className="bg-white rounded-xl overflow-clip"
                    id={slug}
                  >
                    <img
                      className="rounded md:aspect-[16/9] w-full object-cover"
                      src={img}
                    />
                    <div className="p-6 bg-[#ffffff]">
                      <div className="font-bold uppercase text-xs leading-4 mb-2 text-secondary60">
                        {categories}
                      </div>
                      <h2 className="w-full text-[#1B1B1F] text-[19px] font-bold leading-[23px] mb-2">
                        <Link href={`blog/${slug}`}>{`${title}`}</Link>
                      </h2>
                      <div className="text-sm font-semibold text-secondary60">
                        <Date dateString={date} />
                      </div>
                    </div>
                    {/* <p className="text-[14px] leading-[1.6em]">{excerpt}</p> */}
                  </article>
                )
              )}
            </div>
            <Link href={`/blog`}>
              <div className="inline-block bg-[#004DEB] px-6 py-[10px] rounded-full text-white text-sm">
                {`See all posts ->`}
              </div>
            </Link>
          </div>
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
