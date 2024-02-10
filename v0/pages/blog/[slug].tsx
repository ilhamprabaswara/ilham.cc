import Layout from '@/components/layout';
import { getAllPostSlugs, getPostData } from '@/lib/posts';
import Date from '@/components/date';

export default function Post({ postData }) {
  return (
    <Layout>
      <article className="prose">
        <h1 className="mb-[10px] text-[22px] font-medium">{postData.title}</h1>
        <div className="text-[11px] font-medium uppercase tracking-[1px] text-slate-400">
          <Date dateString={postData.date} />
        </div>
        <figure>
          <img className="rounded" src={postData.img} />
        </figure>
        <div
          className="text-sm leading-[1.6em]"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}
