import { trainingItems } from "@/data/training";

export function TrainingSection() {
  return (
    <section className="training-section" aria-labelledby="training-heading">
      <div className="container training-layout">
        <h2 id="training-heading">Training &amp; Certifications</h2>
        <div className="training-list">
          {trainingItems.map((item) => (
            <article key={item.title}>
              <div>
                <h3>{item.title}</h3>
                {item.provider ? <p>{item.provider}</p> : null}
              </div>
              {item.status ? <span>Status: {item.status}</span> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
