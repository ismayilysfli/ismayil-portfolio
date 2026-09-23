import { activities, recognition } from "@/data/achievements";
import { site } from "@/data/site";
import { ExperienceSection } from "@/components/experience-section";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  FileIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/icons";
import { Navigation } from "@/components/navigation";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { TrainingSection } from "@/components/training-section";
import { LinkButton, SectionHeading } from "@/components/ui";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navigation />
      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-heading">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="availability"><span aria-hidden="true" /> Open to AI/ML opportunities</p>
              <h1 id="hero-heading">Ismayil Yusifli</h1>
              <p className="hero-role">
                <span>Computer Science Student</span>
                <span>AI/ML Engineering</span>
                <span>Applied AI</span>
              </p>
              <p className="hero-intro">
                I build machine-learning and applied-AI systems across computer vision, model evaluation,
                LLM workflows, and deployment. I&apos;m currently a 4th-year Computer Science student at UFAZ
                and am interested in AI/ML engineering opportunities.
              </p>
              <div className="hero-actions">
                <LinkButton href="#projects" variant="primary">
                  View projects <ArrowRightIcon />
                </LinkButton>
                <LinkButton href={site.github} external>
                  <GithubIcon /> GitHub
                </LinkButton>
                <LinkButton href={site.linkedin} external>
                  <LinkedinIcon /> LinkedIn
                </LinkButton>
                <LinkButton href={site.resumeUrl} download>
                  <FileIcon /> Resume
                </LinkButton>
              </div>
            </div>
            <aside className="hero-brief" aria-label="Profile summary">
              <div className="brief-heading">
                <span>Profile brief</span>
                <span aria-hidden="true">AI / ML</span>
              </div>
              <div className="hero-facts">
                <div className="fact-row"><span>Focus</span><strong>AI/ML Engineering</strong></div>
                <div className="fact-row"><span>Education</span><strong>BSc Computer Science</strong></div>
                <div className="fact-row"><span>Based in</span><strong>Azerbaijan</strong></div>
                <div className="fact-row"><span>Graduating</span><strong>June 2027</strong></div>
              </div>
              <div className="brief-footer" aria-hidden="true">
                <span />
                <span>CV / 2027</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="about section" id="about" aria-labelledby="about-heading">
          <div className="container about-grid">
            <p className="eyebrow">About</p>
            <div>
              <h2 id="about-heading">Learning through practical systems.</h2>
              <p>
                I&apos;m a 4th-year Computer Science student at the French-Azerbaijani University (UFAZ), based
                in Azerbaijan and expecting to graduate in June 2027. My main interests are AI/ML engineering,
                computer vision, applied AI, and LLM systems. I&apos;ve developed hands-on experience through
                student startup work, internships, personal projects, hackathons, and university work.
              </p>
            </div>
          </div>
        </section>

        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />

        <section className="section section-tinted" id="achievements" aria-labelledby="achievements-heading">
          <div className="container">
            <SectionHeading eyebrow="Achievements" id="achievements-heading" title="Selected recognition." />
            <div className="achievement-grid">
              {recognition.map((achievement, index) => (
                <article className="is-recognition" key={achievement.event}>
                  <span className="achievement-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p>{achievement.title}</p>
                    <h3>{achievement.event}</h3>
                    {achievement.detail ? <span>{achievement.detail}</span> : null}
                  </div>
                </article>
              ))}
            </div>
            <div className="activities-block" aria-labelledby="activities-heading">
              <h3 id="activities-heading">Hackathons / Additional Activities</h3>
              {activities.map((activity) => (
                <article key={activity.event}>
                  <h4>{activity.event}</h4>
                  <p>{activity.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <TrainingSection />

        <section className="section education" aria-labelledby="education-heading">
          <div className="container education-grid">
            <div>
              <p className="eyebrow">Education</p>
              <h2 id="education-heading">French-Azerbaijani University <span>(UFAZ)</span></h2>
            </div>
            <div className="education-details">
              <strong>BSc Computer Science</strong>
              <span>2023—2027</span>
              <p>Expected graduation: June 2027</p>
            </div>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-heading">
          <div className="container contact-shell">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 id="contact-heading">Let&apos;s discuss useful work.</h2>
              <p>
                Interested in discussing AI/ML engineering opportunities, internships, or technical projects?
                Feel free to reach out.
              </p>
            </div>
            <div className="contact-links">
              <a href={site.linkedin} target="_blank" rel="noreferrer">
                <LinkedinIcon /> <span>LinkedIn</span> <ArrowUpRightIcon />
              </a>
              <a href={site.github} target="_blank" rel="noreferrer">
                <GithubIcon /> <span>GitHub</span> <ArrowUpRightIcon />
              </a>
              {site.email ? (
                <a href={`mailto:${site.email}`}>
                  <MailIcon /> <span>Email</span> <ArrowUpRightIcon />
                </a>
              ) : null}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Ismayil Yusifli</p>
          <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
          <a href="#top">Back to top <ArrowUpRightIcon /></a>
        </div>
      </footer>
    </>
  );
}
