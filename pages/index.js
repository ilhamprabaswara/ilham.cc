import Head from 'next/head'
import Layout from '@/components/layout'
import NavBar from '@/components/navbar'
import NowPlaying from '@/components/nowPlaying'
import Link from 'next/link'
import { getSortedPostsData } from "@/lib/posts"

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Ilham Prabaswara | Web Developer</title>
        <meta name="description" content="Made with love by Ilham" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <Layout>
        <NavBar />
        <main>
          <div className='mb-[50px]'>
            <img className='mb-[25px] rounded md:w-[500px]' src='/ilham-avatar-large.png' />
            <p className='font-semibold text-[22px]  text-slate-900 leading-normal'>Hi! I’m Ilham — Full time nerd.</p>
            <p className='text-[16px] max-w-[800px] text-slate-500 leading-normal'>A front-end enthusiast from Indonesia. I'm interested in React, Node, visual design, cycling, photography, and music.</p>
          </div>
          <div className='mb-5 uppercase text-[11px] tracking-[2px] font-semibold'>Blog</div>
          <div className="grid gap-10 mb-10 md:grid-cols-3">
            {allPostsData.map(({ date, excerpt, img, slug, title }) => (
              <>
                <article id={slug}>
                  <img className="rounded mb-[10px]" src={img} />
                  <h2 className="mb-[5px] text-xl">
                    <Link href={`blog/${slug}`}>{`${title} ->`}</Link>
                  </h2>
                  <div>
                    <p className="text-[14px] text-slate-600">{excerpt}</p>
                  </div>
                </article>
              </>
            ))}
          </div>
          <NowPlaying />
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
