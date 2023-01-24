import Layout from "@/components/layout";
import NavBar from "@/components/navbar";
import { getAllPostSlugs, getPostData } from "@/lib/posts";
import Date from "@/components/date";

export default function Post({ postData }) {
    return (
        <Layout>
            <NavBar />
            <article className="prose">
                <h1 className="font-medium mb-[10px] text-[22px]">{postData.title}</h1>
                <div className="font-medium tracking-[1px] text-[11px] text-slate-400 uppercase">
                    <Date dateString={postData.date} />
                </div>
                <figure>
                    <img className="rounded" src={postData.img} />
                </figure>
                <div className="text-sm text-slate-600 leading-[1.6em]" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostSlugs()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.slug)
    return {
        props: {
            postData
        }
    }
}