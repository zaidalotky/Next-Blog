'use client'
import { BlogState, getAllPosts } from '@/lib/posts';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default  function BlogIndexPage() {

  const [posts, setPosts] = useState<BlogState[]>([])
  const router = useRouter()
  
  useEffect(() => {
    async function  fetchBlogs() {
      const posts = await getAllPosts();
      setPosts(posts)
    }
    fetchBlogs()
  }, [])

  const handlePostClick = (post: BlogState) => {
    router.push(`/blogs/${post.slug}?title=${encodeURIComponent(post.title)}`)
  }
  
  return (
    <section className="container mx-auto px-4 py-12 ">
      <h1 className="text-4xl font-bold mb-12 text-center">Blog</h1>
      <div className="blogs flex gap-8 max-w-5xl ">
        {posts.map((post) => (
<div key={post.slug} className="glass blogs-pri relative flex flex-col md:flex-row sm:flex-row px-4 py-20 items-center justify-center">

          <Link
          onClick={() => handlePostClick(post)}
            href={`/blog/${post.slug}`}
            className="no-underline hover:no-underline hover:scale-100"
          >
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="description dark:text-gray-400 mb-4">{post.description}</p>
            <span className=" text-gray-400 dark:text-gray-500 flex flex-col">
              By<p className='Myblog'>{post.author}</p>
            </span>
          </Link>

          </div>
        ))}
      </div>
    </section>
  );
}
