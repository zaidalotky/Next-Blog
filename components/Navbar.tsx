import Link from 'next/link';
import ThemeProvider from './ThemeProvider';

export default function Navbar() {
  return (
      <nav className="space-y-6 flex flex-row bg-white/20 backdrop-blur-lg rounded-2xl px-6 py-3 shadow-lg">
        <Link
          href="/"
          className="btn m-auto no-underline text-white font-semibold px-4 py-2 rounded-md transition-all duration-200 hover:bg-white/30 hover:shadow-lg hover:scale-105 hover:no-underline "
        >
          MyBlog
        </Link>
        <Link
          href="/blog"
          className="btn no-underline m-auto text-white font-semibold rounded-md transition-all duration-300  hover:shadow-lg hover:scale-105 hover:no-underline hover:text-white"
        >
          Blog
        </Link>
        <div className='m-auto space-y-6'>
          <ThemeProvider />
          </div>
      </nav>
  );
}
