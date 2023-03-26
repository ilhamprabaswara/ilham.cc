import Layout from "@/components/layout";
import NavBar from "@/components/navbar";
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <NavBar />
      <div className="grid gap-[60px] md:grid-cols-[1fr_200px]">
        <main className="grid gap-10 md:grid-cols-2">
          {allPostsData.map(({ date, excerpt, img, slug, title }) => (
            <>
              <article id={slug}>
                <img className="rounded mb-[10px]" src={img} />
                <h2 className="mb-[5px] text-slate-700 text-xl font-medium">
                  <Link href={`blog/${slug}`}>{`${title} ->`}</Link>
                </h2>
                <div>
                  <p className="text-[14px]">{excerpt}</p>
                </div>
              </article>
            </>
          ))}
        </main>
        <aside className="">
          <figure>
            <img
              className="rounded aspect-square object-cover mb-[15px]"
              src="/ilham-avatar-large.png"
            ></img>
            <figcaption className="text-[14px]">
              Hi! I'm Ilham - A full time nerd. Based in Indonesia
            </figcaption>
          </figure>
        </aside>
      </div>
    </Layout>
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
