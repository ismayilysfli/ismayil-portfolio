import { experiences } from "@/data/experience";
import { SectionHeading, Tag } from "./ui";

export function ExperienceSection() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          id="experience-heading"
          title="Applied work, measured carefully."
          description="Startup, internship, and engineering work with an emphasis on practical systems and sound evaluation."
        />
        <div className="experience-list">
          {experiences.map((experience, index) => (
            <article
              className={`experience-card ${experience.featured ? "is-featured" : "is-secondary"}`}
              key={`${experience.organization}-${experience.role}`}
            >
              <div className="experience-marker" aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <i />
              </div>
              <div className="experience-meta">
                <div>
                  <p className="experience-company">{experience.organization}</p>
                  {experience.context ? <span className="context-label">{experience.context}</span> : null}
                </div>
                {experience.location ? <p>{experience.location}</p> : null}
              </div>
              <div className="experience-body">
                <div className="experience-title-row">
                  <h3>{experience.role}</h3>
                  <p className="experience-dates">{experience.dates}</p>
                </div>
                <p className="experience-summary">{experience.summary}</p>
                <ul>
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="tag-list" aria-label="Technologies used">
                  {experience.technologies.map((technology) => (
                    <Tag key={technology}>{technology}</Tag>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
