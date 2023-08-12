import BlogList from "@/components/blogList";
import Layout from "@/components/layout";
import { getSortedPostsData } from "@/lib/posts";

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <div className="grid gap-[60px] md:grid-cols-[1fr_168px] md:gap-6">
        <main className="grid gap-10 md:grid-cols-2 md:gap-x-6 md:gap-y-[50px]">
          <BlogList {...allPostsData} />
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
