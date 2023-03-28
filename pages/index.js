import Head from 'next/head'
import Layout from '@/components/layout'
import NavBar from '@/components/navbar'
import Link from 'next/link'
import { getSortedPostsData } from "@/lib/posts"

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout>
        <NavBar />
        <main>
          <div className='mb-[50px]'>
            <img className='mb-[25px] rounded md:w-[500px]' src='/ilham-avatar-large.png' />
            <p className='font-semibold text-[22px]  text-slate-700 leading-normal'>Hi! I’m Ilham — Full time nerd.</p>
            <p className='text-[16px] max-w-[800px] leading-normal'>A front-end enthusiast from Indonesia. I'm interested in React, Node, visual design, bikes, photography, and music.</p>
          </div>
          <div className='mb-5 uppercase text-[11px] tracking-[2px] font-semibold'>Blog</div>
          <div className="grid gap-10 mb-10 md:grid-cols-3">
            {allPostsData.map(({ date, excerpt, img, slug, title }) => (
              <>
                <article id={slug}>
                  <img className="rounded mb-[10px]" src={img} />
                  <h2 className="mb-[5px] text-xl text-slate-700 font-medium">
                    <Link href={`blog/${slug}`}>{`${title} ->`}</Link>
                  </h2>
                  <div>
                    <p className="text-[14px]">{excerpt}</p>
                  </div>
                </article>
              </>
            ))}
          </div>
        </main>
      </Layout>
    </>
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
