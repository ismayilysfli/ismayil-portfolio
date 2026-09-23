import { moreProjects, projects } from "@/data/projects";
import { site } from "@/data/site";
import type { Project } from "@/data/types";
import { ArrowUpRightIcon, GithubIcon } from "./icons";
import { SectionHeading, Tag } from "./ui";

function GuardianEvidence() {
  return (
    <div className="project-evidence evidence-guardian" aria-label="Guardian-X dataset and deployment workflow">
      <div className="evidence-heading">
        <span>Dataset to device</span>
        <span>Model path</span>
      </div>
      <div className="guardian-stats">
        <div><strong>~18K</strong><span>Images</span></div>
        <div><strong>15</strong><span>Classes</span></div>
      </div>
      <div className="pipeline" aria-label="PyTorch to ONNX to TensorFlow Lite">
        <span>PyTorch</span><i aria-hidden="true" /><span>ONNX</span><i aria-hidden="true" /><span>TFLite</span>
      </div>
    </div>
  );
}

function FlyRankEvidence() {
  return (
    <div className="project-evidence evidence-flyrank" aria-label="Precision at 50 improved from 0.24 to 0.74">
      <div className="evidence-heading">
        <span>Precision@50</span>
        <span>Held-out validation</span>
      </div>
      <div className="precision-summary">
        <span>0.24</span><i aria-hidden="true" /><strong>0.74</strong>
      </div>
      <div className="precision-bars" aria-hidden="true">
        <div><span>Baseline</span><i style={{ width: "24%" }} /></div>
        <div><span>Evaluated model</span><i style={{ width: "74%" }} /></div>
      </div>
    </div>
  );
}

function CourseFlowEvidence() {
  return (
    <div
      className="project-evidence evidence-courseflow"
      aria-label="CourseFlow architecture: documents move through LLM understanding to deterministic scheduling"
    >
      <div className="evidence-heading">
        <span>Architecture split</span>
        <span>Predictable by design</span>
      </div>
      <div className="architecture-flow">
        <div><span>01</span><strong>Documents</strong></div>
        <i aria-hidden="true" />
        <div className="is-llm"><span>02</span><strong>LLM understanding</strong></div>
        <i aria-hidden="true" />
        <div className="is-deterministic"><span>03</span><strong>Deterministic schedule</strong></div>
      </div>
    </div>
  );
}

function ProjectEvidence({ index }: { index: number }) {
  if (index === 0) return <GuardianEvidence />;
  if (index === 1) return <FlyRankEvidence />;
  return <CourseFlowEvidence />;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`project-card project-${index + 1}`}>
      <div className="project-topline">
        <span className="project-number">0{index + 1}</span>
        <span className="project-type">Selected project</span>
      </div>

      <div className="project-main">
        <div className="project-copy">
          <div className="project-intro">
            <h3>{project.title}</h3>
            {project.subtitle ? <p className="project-subtitle">{project.subtitle}</p> : null}
          </div>

          <p className="project-description">{project.description}</p>

          <ul className="project-highlights">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
        <ProjectEvidence index={index} />
      </div>

      {project.architecture ? (
        <div className="architecture-note">
          <span>Architecture decision</span>
          <p>{project.architecture}</p>
        </div>
      ) : null}

      <div className="project-footer">
        <div className="tag-list" aria-label="Project technologies">
          {project.technologies.map((technology) => (
            <Tag key={technology}>{technology}</Tag>
          ))}
        </div>
        {project.links ? (
          <div className="project-links">
            {project.links.map((link) => (
              <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                {link.label} <ArrowUpRightIcon />
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section className="section section-tinted" id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Selected work"
          id="projects-heading"
          title="A focused set of projects."
          description="Three systems that show how I approach data, evaluation, architecture, and deployment."
        />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.title} />
          ))}
        </div>

        <div className="more-work">
          <div className="more-work-heading">
            <div>
              <p className="eyebrow">More work</p>
              <h3>Additional technical work</h3>
            </div>
            <a href={site.github} target="_blank" rel="noreferrer">
              <GithubIcon /> Explore more on GitHub <ArrowUpRightIcon />
            </a>
          </div>
          {moreProjects.map((project) => (
            <article className="compact-project" key={project.title}>
              <div>
                <h4>{project.title}</h4>
                {project.subtitle ? <p>{project.subtitle}</p> : null}
              </div>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.technologies.map((technology) => (
                  <Tag key={technology}>{technology}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
