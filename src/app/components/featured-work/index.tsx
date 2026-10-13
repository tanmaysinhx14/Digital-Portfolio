import Image from "next/image";
import Link from "next/link";
import type { FeaturedWorkItem } from "@/data/portfolio";

type FeaturedWorkProps = {
  projects: FeaturedWorkItem[];
};

const FeaturedWork = ({ projects }: FeaturedWorkProps) => {
  return (
    <section id="work" className="portfolio-section portfolio-section-work">
      <div className="container portfolio-container">
        <div className="panel-frame">
          <div className="section-content d-flex flex-column gap-3">
            <p className="section-heading"><span className="section-heading-number">02</span> Featured Work</p>
            <h2 className="mb-0 featured-work-title">
              A few projects that show how I think about systems, usability, and implementation.
            </h2>
            <p className="section-deck">Selected builds, from role-aware web products to real-time vision systems.</p>
          </div>

          <div className="work-grid p-3">
            <div className="row g-2">
              {projects.map((value) => {
                const projectHref = value.link || "#";

                return (
                <div key={value.title} className="col-12 col-md-6">
                    <div className="work-card h-100 d-flex flex-column gap-4">
                      <Link
                        href={projectHref}
                        target={value.link ? "_blank" : undefined}
                        rel={value.link ? "noopener noreferrer" : undefined}
                        className="project-image-link"
                      >
                        <Image
                          src={value.image}
                          alt={value.title}
                          width={720}
                          height={450}
                          className="project-image"
                        />
                      </Link>

                      <div className="d-flex flex-column gap-3 px-md-2">
                        <Link
                          href={projectHref}
                          target={value.link ? "_blank" : undefined}
                          rel={value.link ? "noopener noreferrer" : undefined}
                          className="project-title-link text-decoration-none"
                        >
                          <h4 className="mb-0">{value.title}</h4>
                          <Image
                            src="/images/icon/tile-arrow-icon.svg"
                            alt="open project"
                            width={18}
                            height={18}
                            className="project-title-arrow"
                          />
                        </Link>

                        {value.developmentStatus && (
                          <div>
                            <button
                              className="btn btn-sm rounded-pill bg-success-subtle text-success fw-bold"
                              disabled
                              style={{
                                fontSize: "0.75rem",
                                fontWeight: 500,
                                opacity: 1,
                                pointerEvents: "none",
                              }}
                            >
                              {value.developmentStatus}
                            </button>
                          </div>
                        )}

                        <p className="mb-0">{value.description}</p>

                        <div className="d-flex flex-wrap gap-2">
                          {value.techStack.map((tech) => (
                            <span key={tech} className="portfolio-chip">
                              {tech}
                            </span>
                          ))}
                        </div>
                        {value.title.toLowerCase().includes("academic erp") && (
                          <Link href="/blogs/academic-erp" className="project-notes-link">Read the project note <span aria-hidden="true">↗</span></Link>
                        )}
                        {value.title.toLowerCase().includes("aiproctor") && (
                          <Link href="/blogs/building-ai-proctor" className="project-notes-link">Read the project note <span aria-hidden="true">↗</span></Link>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
