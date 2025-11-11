export default function Footer() {
  return (
    <footer className="neu mt-20 p-8 rounded-xl text-center max-w-5xl mx-auto">
      <p className="text-gray-600 dark:text-gray-300 mb-2">
        &copy; {new Date().getFullYear()} MyBlog. All rights reserved.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Built with <span className="font-semibold">Next.js</span> & <span className="font-semibold">Tailwind CSS</span>
      </p>
    </footer>
  );
}
