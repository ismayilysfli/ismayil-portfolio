import { skillGroups } from "@/data/skills";
import { SectionHeading, Tag } from "./ui";

export function SkillsSection() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          id="skills-heading"
          title="Tools I use to build and evaluate."
          description="Grouped by where they fit in my current work, without arbitrary proficiency scores."
        />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-list">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
