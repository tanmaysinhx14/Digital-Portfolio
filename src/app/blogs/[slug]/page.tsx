import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { HTMLAttributes, ReactNode } from "react";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllPostsMeta, getPostBySlug, headingSlug } from "@/lib/mdx";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPostsMeta().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = getPostBySlug(slug);

  return {
    title: meta.title,
    description: meta.summary,
    openGraph: {
      title: meta.title,
      description: meta.summary,
      type: "article",
    },
  };
}

type ShotVariant = "portal" | "records" | "monitoring" | "calibration";

function MetricGrid({ children }: { children: ReactNode }) {
  return <div className="row row-cols-1 row-cols-sm-3 g-3 blog-metrics" aria-label="Project facts">{children}</div>;
}

function Metric({ value, label, note }: { value: string; label: string; note?: string }) {
  return (
    <div className="col">
      <div className="card blog-metric-card h-100">
        <div className="card-body">
          <strong>{value}</strong>
          <span>{label}</span>
          {note && <small>{note}</small>}
        </div>
      </div>
    </div>
  );
}

function ProjectShot({
  title,
  caption,
  src,
  alt,
  variant = "portal",
}: {
  title: string;
  caption?: string;
  src?: string;
  alt?: string;
  variant?: ShotVariant;
}) {
  return (
    <figure className="blog-project-shot" data-variant={variant}>
      <div className="blog-shot-window">
        <div className="blog-shot-chrome" aria-hidden="true">
          <span className="blog-shot-dots"><i /><i /><i /></span>
          <span>PROJECT SCREENSHOT</span>
          <span className="blog-shot-chrome-mark">↗</span>
        </div>
        {src ? (
          <Image src={src} alt={alt ?? title} width={1600} height={900} className="blog-shot-image" />
        ) : (
          <div className="blog-shot-placeholder" aria-label="Screenshot placeholder">
            <div className="blog-shot-mock-sidebar"><span /><span /><span /><span /></div>
            <div className="blog-shot-mock-content">
              <div className="blog-shot-mock-heading"><span /><i /><i /></div>
              <div className="blog-shot-mock-cards"><i /><i /><i /></div>
              <div className="blog-shot-mock-lower"><span /><span /><span /></div>
              <div className="blog-shot-replace">
                <span className="blog-shot-camera" aria-hidden="true">＋</span>
                <strong>Add a real project screenshot</strong>
                <small>Set <code>src=&quot;/images/blogs/your-image.png&quot;</code> on this component</small>
              </div>
            </div>
          </div>
        )}
      </div>
      <figcaption className="blog-shot-caption">
        <strong>{title}</strong>
        {caption && <span>{caption}</span>}
      </figcaption>
    </figure>
  );
}

function Callout({
  title,
  tone = "info",
  children,
}: {
  title: string;
  tone?: "info" | "warning" | "success";
  children: ReactNode;
}) {
  const symbol = tone === "warning" ? "!" : tone === "success" ? "✓" : "i";

  return (
    <div className={`alert alert-${tone} blog-callout`} role="note">
      <span className="blog-callout-mark" aria-hidden="true">{symbol}</span>
      <div>
        <strong className="blog-callout-title">{title}</strong>
        <div>{children}</div>
      </div>
    </div>
  );
}

const mdxComponents = {
  h2: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
    const text = typeof children === "string" ? children : "";
    return <h2 id={headingSlug(text)} {...props}>{children}</h2>;
  },
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => <h3 {...props} />,
  p: (props: HTMLAttributes<HTMLParagraphElement>) => <p {...props} />,
  ul: (props: HTMLAttributes<HTMLUListElement>) => <ul className="blog-list" {...props} />,
  ol: (props: HTMLAttributes<HTMLOListElement>) => <ol className="blog-ordered-list" {...props} />,
  blockquote: (props: HTMLAttributes<HTMLQuoteElement>) => <blockquote className="blog-quote" {...props} />,
  table: (props: HTMLAttributes<HTMLTableElement>) => (
    <div className="table-responsive blog-table-wrap">
      <table className="table align-middle blog-table" {...props} />
    </div>
  ),
  th: (props: HTMLAttributes<HTMLTableCellElement>) => <th scope="col" {...props} />,
  code: (props: HTMLAttributes<HTMLElement>) => <code className="blog-inline-code" {...props} />,
  pre: (props: HTMLAttributes<HTMLPreElement>) => <pre className="blog-code-block" {...props} />,
  hr: () => <hr className="blog-divider" />,
  MetricGrid,
  Metric,
  ProjectShot,
  Callout,
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let post: ReturnType<typeof getPostBySlug>;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const sections = post.meta.sections ?? [];
  const category = post.meta.category ?? "Project journal";
  const topic = category.toLowerCase().includes("vision") ? "vision" : "systems";

  return (
    <main className="portfolio-main blog-main">
      <section className="blog-article-section" data-topic={topic}>
        <div className="container portfolio-container">
          <Link href="/blogs" className="blog-back-link"><span aria-hidden="true">←</span> All field notes</Link>

          <header className="blog-article-hero">
            <div className="blog-article-copy">
              <div className="blog-article-meta">
                <span className="badge blog-topic-badge">{category}</span>
                <span>{post.meta.date}</span>
                <span>{post.meta.readTime ?? "5 min read"}</span>
              </div>
              <h1>{post.meta.title}</h1>
              <p className="blog-article-deck">{post.meta.summary}</p>
              {post.meta.tags?.length ? (
                <div className="blog-tag-row" aria-label="Topics">
                  {post.meta.tags.map((tag) => <span className="blog-tag" key={tag}>{tag}</span>)}
                </div>
              ) : null}
            </div>
            <aside className="blog-hero-note">
              <span className="blog-hero-note-label">Notebook / {topic === "vision" ? "02" : "01"}</span>
              <span className="blog-hero-note-glyph" aria-hidden="true">{topic === "vision" ? "◉" : "⌘"}</span>
              <p>{post.meta.heroNote ?? "Notes from the process of turning an idea into a working system."}</p>
              <span className="blog-hero-note-rule" />
            </aside>
          </header>

          <div className="blog-reading-layout">
            {sections.length > 0 && (
              <nav className="blog-toc" aria-label="In this article">
                <p>In this article</p>
                <ol>
                  {sections.map((section, index) => (
                    <li key={section}>
                      <a href={`#${headingSlug(section)}`}><span>{String(index + 1).padStart(2, "0")}</span>{section}</a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            <article className="blog-content">
              <MDXRemote
                source={post.content}
                components={mdxComponents}
                options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
              />
              <div className="blog-endnote">
                <span aria-hidden="true">✳</span>
                <p>End of this note. The project is still in progress.</p>
              </div>
            </article>
          </div>

          <footer className="blog-article-footer">
            <span>More notes from the build</span>
            <Link href="/blogs">Browse all writing <span aria-hidden="true">↗</span></Link>
          </footer>
        </div>
      </section>
    </main>
  );
}
