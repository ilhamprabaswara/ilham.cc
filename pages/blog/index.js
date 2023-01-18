import Layout from "@/components/layout"
import NavBar from "@/components/navbar"
import { getSortedPostsData } from "@/lib/posts"
import Link from "next/link";

export default function Blog({ allPostsData }) {
    return (
        <Layout>
            <NavBar />
            {allPostsData.map(({ date, title, slug }) => (
                <Link href={`blog/${slug}`}>{title}</Link>
            ))}
        </Layout>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData
        }
    }
}