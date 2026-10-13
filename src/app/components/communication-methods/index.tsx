import Image from "next/image";
import Link from "next/link";

import type { ContactData } from "@/data/portfolio";

type CommunicationMethodsProps = {
  contact: ContactData;
};

const CommunicationMethods = ({ contact }: CommunicationMethodsProps) => {
  return (
    <section id="contact" className="portfolio-section portfolio-section-contact">
      <div className="container portfolio-container">
        <div className="panel-frame">
          <div className="section-content">
            <div className="row g-4 align-items-start">
              <div className="col-12 col-lg-5">
                <div className="d-flex flex-column gap-3">
                  <p className="section-heading"><span className="section-heading-number">05</span> Let&apos;s Connect</p>
                  <h2 className="mb-0">{contact.heading}</h2>
                  <p className="contact-copy">{contact.description}</p>

                  <div className="d-flex flex-wrap gap-3 my-4 my-lg-0 mt-lg-3">
                    <Link
                      href={contact.primaryCta.href}
                      className="btn btn-primary hero-cta"
                    >
                      {contact.primaryCta.label}
                    </Link>
                    <Link
                      href={contact.secondaryCta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark hero-cta"
                    >
                      {contact.secondaryCta.label}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-7 pt-lg-5">
                <div className="row row-cols-1 row-cols-md-2 g-3">
                  {contact.links.map((value) => (
                    <div key={value.href} className="col">
                      <Link
                        href={value.href}
                        target={value.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          value.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="social-tile w-100 justify-content-between text-decoration-none"
                      >
                        <span className="d-inline-flex align-items-center gap-2">
                          <Image
                            src={value.icon}
                            alt={`${value.label} icon`}
                            width={20}
                            height={20}
                          />
                          <span>{value.label}</span>
                        </span>

                        <Image
                          src="/images/icon/tile-arrow-icon.svg"
                          alt="open profile"
                          width={18}
                          height={18}
                          className="social-tile-arrow"
                        />
                      </Link>
                    </div>
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

export default CommunicationMethods;
