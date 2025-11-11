import Link from 'next/link';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Welcome to MyBlog',
  description: 'Explore our modern, SEO-optimized blog about Next.js, Tailwind, and web development.',
  alternates: {
    canonical: 'https://yourdomain.com',
  },
};



export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 z-10"></div>

      {/* Hero Section */}
      <section className="feature hero glass max-w-4xl w-full text-center p-16">
        <h1 className="text-5xl font-extrabold mb-6">
          Welcome to <span className="Myblog text-[var(--accent)]">MyBlog</span>
        </h1>
        <p className="text-lg mb-8 text-gray-200 dark:text-gray-300">
          A modern, SEO-optimized, and accessible blog built with Next.js 14 and Tailwind CSS.
        </p>
        <Link href="/blog" className="ExpolreBtn btn hover:no-underline">
          Explore Blog
        </Link>
      </section>

      {/* Features */}
      <section className="feature-pri grid md:grid-cols-3 gap-8 w-full max-w-5xl">
        {[
          { title: 'SEO Optimized', desc: 'Posts with meta tags, canonical URLs, JSON-LD.' },
          { title: 'Accessible', desc: 'ARIA roles, skip links, and keyboard-friendly.' },
          { title: 'Theme Support', desc: 'Light, Dark, or System theme with smooth transitions.' },
        ].map((feature) => (
          <div key={feature.title} className="glass mb-16 p-6 text-center transition-transform gap-8 hover:scale-100 space-y-6">
            <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-200 dark:text-gray-300">{feature.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
