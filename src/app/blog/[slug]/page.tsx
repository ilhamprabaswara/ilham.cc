import TableOfContent from '@/components/blog/table-of-content'
import { getPostData, getSortedPostsData } from '@/lib/posts'
import Date from '@/utils/date'
import { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'

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
    <div className="mx-auto mt-[10px] flex max-w-[1128px] md:mt-5">
      <article className="prose max-w-none prose-headings:text-sys-light-on-background prose-p:text-sys-light-on-surface-variant dark:prose-headings:text-sys-dark-on-background dark:prose-p:text-sys-dark-on-surface-variant">
        <header className="mx-auto mb-[25px] max-w-[653px]">
          <h1 className="mb-5 text-[22px] text-headline-lg font-bold">
            {postData.title}
          </h1>
          <div className="text-[11px] font-medium uppercase tracking-[1px] dark:text-sys-dark-on-surface">
            <Date dateString={postData.date} />
          </div>
          <div className="text-[11px] font-medium uppercase tracking-[1px] dark:text-sys-dark-on-surface">
            {postData.category}
          </div>
        </header>
        <div className="mb-[25px] h-[200px] w-full md:h-[350px] lg:h-[600px]">
          <Image
            priority
            className="h-full rounded-xl object-cover"
            src={postData.image}
            alt="blog-image"
            width={1128}
            height={600}
          />
        </div>
        <div className="flex gap-2">
          <div
            className="mdx max-w-[700px] text-sm leading-[1.6em]"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
          {/* <div className="not-prose sticky top-2 h-fit">
            <TableOfContent slug={slug} />
          </div> */}
        </div>
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
