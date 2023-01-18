import Layout from "@/components/layout";
import NavBar from "@/components/navbar";
import { getAllPostSlugs, getPostData } from "@/lib/posts";

export default function Post({ postData }) {
    return (
        <Layout>
            <NavBar />
            {postData.title}
            <br />
            {postData.date}
            <br />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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