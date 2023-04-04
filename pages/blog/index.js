import Layout from "@/components/layout";
import NavBar from "@/components/navbar";
import BlogList from "../../components/blogList";
import { getSortedPostsData } from "@/lib/posts";

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <div className="grid gap-[60px] md:grid-cols-[1fr_200px]">
        <main className="grid gap-10 md:grid-cols-2">
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
