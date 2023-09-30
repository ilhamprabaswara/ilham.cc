import Button from '@/components/ui/button';
import Link from 'next/link';

const BlogSection = ({ children }) => {
  return (
    <section className="blog">
      <h2 className="mb-5 text-[11px] font-semibold uppercase leading-[1.6em] tracking-[2px] text-sys-light-on-background dark:text-sys-dark-on-background">
        Blog
      </h2>
      <ul className="grid gap-6 md:grid-cols-3 md:flex-nowrap md:items-center">
        {children}
      </ul>
      <Button
        className="mt-6 inline-block text-body-base font-medium text-sys-light-on-background outline outline-1 dark:text-sys-dark-on-background"
        href="/blog"
        text="See all posts ->"
      />
    </section>
  );
};

export default BlogSection;
