import Layout from "@/components/layout";
import NavBar from "@/components/navbar";
import BlogList from "../components/blogList";
import { getSortedPostsData } from "@/lib/posts";

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout>
        <main>
          <div className="mb-[50px]">
            <img
              className="h-[215px] mb-2.5 object-cover rounded-lg md:w-[500px]"
              src="/ilham-avatar-large.png"
            />
            <p className="font-semibold text-xl text-[#1B1B1F] leading-[1.4em]">
              Hi! I’m Ilham — Full time nerd.
            </p>
            <p className="text-[14px] max-w-[800px] leading-[1.6em]">
              A front-end enthusiast from Indonesia. I'm interested in React,
              Node, visual design, bikes, photography, and music.
            </p>
          </div>
          <div className="blog">
            <div className="mb-5 uppercase text-[11px] tracking-[2px] font-semibold">
              Blog
            </div>
            <div className="grid gap-10 mb-10 md:grid-cols-3">
              <BlogList {...allPostsData} />
            </div>
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
