import Link from "next/link";
import type { Metadata } from "next";
import { getAllPostsMeta } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Field notes",
  description:
    "Build logs and technical notes on the decisions, trade-offs, and details behind Tanmay's projects.",
  openGraph: {
    title: "Field notes",
    description:
      "Build logs and technical notes on the decisions, trade-offs, and details behind Tanmay's projects.",
  },
};

export default function BlogList() {
  const posts = getAllPostsMeta();

  return (
    <main className="portfolio-main blog-main">
      <section className="blog-index-section">
        <div className="container portfolio-container">
          <header className="blog-index-header">
            <div className="blog-index-copy">
              <p className="blog-eyebrow"><span /> Field notes / 2026</p>
              <h1 className="blog-index-title">Ideas become<br /><em>working systems.</em></h1>
              <p className="blog-index-deck">
                Build logs from the messy middle: the decisions, trade-offs, and small details behind the projects.
              </p>
            </div>
            <aside className="blog-index-aside" aria-label="About these articles">
              <span className="blog-aside-index">A notebook in progress</span>
              <p>Technical stories from projects in computer vision, backend systems, and product design.</p>
              <span className="blog-aside-mark" aria-hidden="true">✳</span>
            </aside>
          </header>

          <div className="blog-index-meta">
            <span>Selected writing</span>
            <span>{String(posts.length).padStart(2, "0")} stories</span>
          </div>

          <div className="row row-cols-1 row-cols-lg-2 g-4 blog-card-grid">
            {posts.map((post, index) => {
              const topic = post.category?.toLowerCase().includes("vision") ? "vision" : "systems";

              return (
                <div key={post.slug} className="col">
                  <Link href={`/blogs/${post.slug}`} className="card blog-post-card h-100" data-topic={topic}>
                    <div className="blog-card-art" aria-hidden="true">
                      <div className="blog-card-orbit blog-card-orbit-one" />
                      <div className="blog-card-orbit blog-card-orbit-two" />
                      <span className="blog-card-art-index">FIELD NOTE&nbsp; / &nbsp;{String(index + 1).padStart(2, "0")}</span>
                      <span className="blog-card-art-glyph">{topic === "vision" ? "◉" : "⌘"}</span>
                      <span className="blog-card-art-caption">{post.category ?? "Project journal"}</span>
                    </div>
                    <div className="card-body blog-card-body">
                      <div className="blog-card-meta">
                        <span className="badge blog-topic-badge">{post.category ?? "Project journal"}</span>
                        <span>{post.date}</span>
                        <span>{post.readTime ?? "5 min read"}</span>
                      </div>
                      <h2 className="blog-card-title">{post.title}</h2>
                      <p className="blog-card-summary">{post.summary}</p>
                      <span className="blog-card-link">Read the story <span aria-hidden="true">↗</span></span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
