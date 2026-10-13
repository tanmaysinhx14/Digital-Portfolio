import type { AboutData } from "@/data/portfolio";

type AboutMeProps = {
  about: AboutData;
};

const AboutMe = ({ about }: AboutMeProps) => {
  return (
    <section id="about" className="portfolio-section portfolio-section-about">
      <div className="container portfolio-container">
        <div className="panel-frame about-surface">
          <div className="section-content-lg">
            <div className="d-flex flex-column gap-5">
              <div className="d-flex flex-column gap-4">
                <p className="section-heading"><span className="section-heading-number">01</span> About</p>
                <h2 className="mb-0">
                  {about.intro}{" "}
                  <span className="highlight-sweep">{about.highlight}</span>{" "}
                  {about.headline}
                </h2>
                <p className="about-copy">{about.focusSummary}</p>
              </div>

              <div className="d-flex flex-column gap-3">
                <p className="section-heading"><span className="section-heading-number">Focus</span> Current Focus</p>
                <div className="d-flex flex-wrap gap-2 gap-sm-3">
                  {about.activeDomains.map((item) => (
                    <span key={item.title} className="portfolio-chip">
                      {item.title}
                    </span>
                  ))}
                </div>
              </div>

              <div className="d-flex flex-column gap-3">
                <p className="section-heading"><span className="section-heading-number">Stack</span> Strengths</p>
                <div className="d-flex flex-wrap gap-2 gap-sm-3">
                  {about.coreExpertise.map((item) => (
                    <span key={item.title} className="portfolio-chip">
                      {item.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
