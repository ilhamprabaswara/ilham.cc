import Layout from "@/components/layout";
import { getSortedPostsData } from "@/lib/posts";
import BlogList from "@/components/pages/blog/blogList";
import HeroSection from "@/components/pages/home/heroSection";
import BlogSection from "@/components/pages/home/blogSection";

export default function Home({ allPostsData }) {
  console.log(window.location.toString() + `?`);
  allPostsData = allPostsData.slice(0, 3);
  return (
    <>
      <Layout>
        <main className="w-full mx-auto pb-10">
          <HeroSection />
          <BlogSection>
            {allPostsData.map(({ categories, date, img, slug, title }) => (
              <BlogList
                key={slug}
                categories={categories}
                date={date}
                img={img}
                slug={slug}
                title={title}
              />
            ))}
          </BlogSection>
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
