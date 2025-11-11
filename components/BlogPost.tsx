import { BlogState } from "@/lib/posts";

export default function BlogPost({ title, author, date, description, content }: BlogState) {
  return (
    <article className="container mx-auto px-4 py-12">
      <div className="p-10 rounded-3xl shadow-inner items-center m-auto">
        <header className="mb-6">
          <h1 className="text-5xl font-bold mb-2">{title}</h1>
          <p className="text-gray-400 dark:text-gray-500">
            By {author} — {new Date(date).toLocaleDateString()}
          </p>
          <p className="mt-2 text-gray-500 dark:text-gray-400">{description}</p>
        </header>

        <section className="prose prose-lg md:prose-xl dark:prose-invert leading-relaxed">
          {content}
        </section>
      </div>
    </article>
  );
}
