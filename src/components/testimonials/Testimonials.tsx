import { siteConfig } from "@/config/site";

export function Testimonials() {
  return (
    <section
      className="testimonials section-shell section-pad"
      aria-labelledby="testimonials-title"
    >
      <header className="testimonials__heading" data-reveal>
        <p className="eyebrow">
          <span>04</span> Kind words
        </p>
        <h2 id="testimonials-title">
          Good work comes from
          <br />
          <em>working well together.</em>
        </h2>
      </header>

      <div className="testimonials__list">
        {siteConfig.testimonials.map((testimonial, index) => (
          <figure className="testimonial" key={index} data-reveal>
            <span className="testimonial__mark" aria-hidden="true">
              “
            </span>
            <blockquote>{testimonial.quote}</blockquote>
            <figcaption>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
