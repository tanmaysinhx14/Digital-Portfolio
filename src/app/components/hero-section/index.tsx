import Image from "next/image";
import Link from "next/link";

import type { HeroData } from "@/data/portfolio";

type HeroSectionProps = {
  hero: HeroData;
};

const HeroSection = ({ hero }: HeroSectionProps) => {
  return (
    <section id="top" className="portfolio-hero-section">
      <div className="container portfolio-container">
        <div className="hero-banner">
          <Image
            src="/images/hero-sec/banner.png"
            alt="Abstract portfolio banner"
            width={1080}
            height={267}
            loading="eager"
          />
        </div>

        <div className="panel-frame hero-panel">
          <div className="section-content hero-card">
            <div className="hero-avatar-wrap">
              <Image
                src="/images/hero-sec/user.jpg"
                alt="Tanmay"
                width={160}
                height={160}
                className="hero-avatar rounded-circle"
              />
            </div>

            <div className="row mt-1 g-4 align-items-start justify-content-between">
              <div className="col-12 col-lg-7">
                <div className="d-flex flex-column gap-4 align-items-center align-items-sm-start text-center text-sm-start">
                  <span className="hero-eyebrow">Portfolio / Systems &amp; product</span>
                  <span className="availability-pill">{hero.availability}</span>

                  <div className="d-flex flex-column gap-3">
                    <h1 className="mb-0 hero-name">{hero.name}</h1>
                    <p className="mb-0 hero-summary">{hero.summary}</p>
                  </div>

                  <div className="d-flex flex-column gap-2 mb-3">
                    <div className="hero-meta">
                      <Image
                        src="/images/icon/educap-icon.svg"
                        alt="education"
                        width={20}
                        height={20}
                        className="mt-1 me-2"
                      />
                      <p className="mb-0">{hero.school}</p>
                    </div>

                    <div className="hero-meta">
                      <Image
                        src="/images/icon/map-icon.svg"
                        alt="location"
                        width={20}
                        height={20}
                        className="mt-1 me-2"
                      />
                      <p className="mb-0">{hero.location}</p>
                    </div>
                  </div>

                  <div className="d-flex flex-wrap justify-content-center justify-content-sm-start gap-3">
                    <Link href={hero.primaryCta.href} className="btn btn-dark hero-cta">
                      {hero.primaryCta.label}
                    </Link>
                    <Link href="#contact" className="btn btn-primary hero-cta">
                      Contact Me
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-4">
                <div className="hero-profile-card d-flex flex-column gap-3 align-items-center">
                  <p className="subcontent-heading">Profiles</p>

                  <div className="d-flex flex-wrap justify-content-center gap-3 p-0">
                    {hero.socialLinks.map((item) => (
                      <Link
                        key={`${item.label}-${item.href}`}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        className="icon-button hero-profile-link text-decoration-none"
                        title={item.label}
                      >
                        <Image
                          src={item.icon}
                          alt=""
                          width={20}
                          height={20}
                          className="hero-profile-icon"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
