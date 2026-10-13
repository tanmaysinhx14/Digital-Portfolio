import type { EducationItem } from "@/data/portfolio";

type EducationProps = {
  education: EducationItem[];
};

const Education = ({ education }: EducationProps) => {
  return (
    <section id="education" className="portfolio-section portfolio-section-education">
      <div className="container portfolio-container">
        <div className="panel-frame">
          <div className="section-content">
            <p className="section-heading section-heading-spaced"><span className="section-heading-number">04</span> Education</p>

            <div className="education-timeline">
              {education.map((item) => (
                <div
                  key={`${item.title}-${item.startYear}-${item.endYear}`}
                  className="education-item row g-3 align-items-start"
                >
                  <span
                    className={`timeline-marker ${
                      item.endYear === "Present" ? "is-live" : ""
                    }`}
                  />

                  <div className="col-12 col-sm-auto timeline-date-col">
                    <p className="mb-0 timeline-date">
                      {item.startYear ? `${item.startYear} - ${item.endYear}` : item.endYear}
                    </p>
                  </div>

                  <div className="col timeline-content-col">
                    <div className="d-flex flex-column gap-2">
                      <h5 className="mb-0 fw-semibold">{item.title}</h5>
                      <p className="mb-0 education-subtitle">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
