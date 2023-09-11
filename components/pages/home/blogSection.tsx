import Button from '@/components/ui/button';
import Link from 'next/link';

const BlogSection = ({ children }) => {
  return (
    <section className="blog">
      <h2 className="mb-5 text-[11px] font-semibold uppercase leading-[1.6em] tracking-[2px]">
        Blog
      </h2>
      <ul className="flex flex-row flex-wrap items-stretch justify-between">
        {children}
      </ul>
      <Button
        className="mt-6 inline-block text-body-base font-medium tracking-[0.1px] outline outline-1"
        href="/blog"
        text="See all posts ->"
      />
    </section>
  );
};

export default BlogSection;
