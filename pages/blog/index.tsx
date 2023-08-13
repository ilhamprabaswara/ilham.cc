import BlogList from "@/components/pages/blog/blogList";
import Layout from "@/components/layout";
import { getSortedPostsData } from "@/lib/posts";
import BlogSection from "@/components/pages/home/blogSection";

export default function Blog({
  allPostsData,
}: {
  allPostsData: PostsDataTypes[];
}) {
  return (
    <Layout>
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
