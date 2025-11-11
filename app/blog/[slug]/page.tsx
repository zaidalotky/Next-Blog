'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import BlogPost from '@/components/BlogPost';
import { getPostBySlug, BlogState } from '@/lib/posts';
export default function BlogPostPage() {

   

  const pathname = usePathname();
  const [post, setPost] = useState<BlogState | null>(null);

  useEffect(() => {
    // router.state is accessible through history.state in browser
    const state = window.history.state?.state;

    if (state && state.slug) {
      // we already have the post data passed from router.push
      setPost(state);
    } else {
      // fallback: fetch from slug if user directly visits the page
      const slug = pathname.split('/').pop();
  getPostBySlug(slug || "").then((p) => {
  if (p) setPost(p);
});
    }
  }, [pathname]);

  if (!post) return <p className="p-8 text-center">Loading...</p>;

  return (
    <BlogPost
    slug={post.slug}
      title={post.title}
      author={post.author}
      date={post.date}
      description={post.description}
      content={post.content}
    />
  );
}
