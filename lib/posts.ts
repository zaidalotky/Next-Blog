export type Post = {
  title: string;
  author: string;
  date: string;
  description: string;
  content: string;
};

export type BlogState = {
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
};

const posts: BlogState[] = [
  {
    slug: 'nextjs-seo',
    title: 'Mastering SEO in Next.js 14',
    description: 'Learn how to optimize your Next.js 14 website for SEO and accessibility.',
    content: 'This is where your full blog content would go...',
    author: 'Jane Doe',
    date: '2025-11-01',
  },
  {
    slug: 'dark-mode-accessibility',
    title: 'Designing Accessible Dark Modes',
    description: 'How to implement a11y-first dark mode themes without layout shifts.',
    content: 'Dark mode isn’t just an aesthetic—it’s part of accessible design...',
    author: 'John Smith',
    date: '2025-11-05',
  },
];

export async function getAllPosts() {
  return posts;
}

export async function getPostBySlug(slug: string): Promise<BlogState | undefined> {
  return posts.find((post) => post.slug === slug);
}
