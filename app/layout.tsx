import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import  Footer  from '@/components/Footer';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: {
    default: 'MyBlog — Modern Next.js Blog',
    template: '%s | MyBlog',
  },
  description:
    'A modern, SEO-optimized, accessible blog built with Next.js and Tailwind CSS. Read posts about web dev, performance, and design.',
  metadataBase: new URL('https://yourdomain.com'),
  alternates: {
    canonical: 'https://blog-green-three-97.vercel.app/',
  },
  openGraph: {
    title: 'MyBlog — Modern Next.js Blog',
    description:
      'A modern, SEO-optimized, accessible blog built with Next.js and Tailwind CSS.',
    url: 'https://yourdomain.com',
    siteName: 'MyBlog',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MyBlog — Modern Next.js Blog',
    description:
      'A modern, SEO-optimized, accessible blog built with Next.js and Tailwind CSS.',
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
<body className='' >
      <Navbar />
    <main role="main">{children}</main>
    <footer>
      <Footer />
    </footer>
</body>
    </html>
  );
}
