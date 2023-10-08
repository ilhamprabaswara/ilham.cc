import { getPostData, getSortedPostsData } from '@/lib/posts'
import Date from '@/utils/date'
import { Metadata, ResolvingMetadata } from 'next'

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params

  const postData: any = await getPostData(slug)
  return (
    <div className="mx-auto mt-[10px] max-w-[1128px] md:mt-5">
      <article className="prose dark:prose-invert">
        <header className="mb-[25px]">
          <h1 className="mb-[10px] text-[22px] font-medium">
            {postData.title}
          </h1>
          <div className="text-[11px] font-medium uppercase tracking-[1px] text-slate-400">
            <Date dateString={postData.date} />
          </div>
        </header>
        <div
          className="text-sm leading-[1.6em]"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </div>
  )
}

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug

  // fetch data
  const product: any = await getPostData(slug)

  return {
    title: product.title,
  }
}
