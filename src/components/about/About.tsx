import Image from "next/image";
import { siteConfig } from "@/config/site";
import { StatBlock } from "./StatBlock";

export function About() {
  return (
    <section
      className="about section-shell section-pad"
      id="about"
      aria-labelledby="about-title"
    >
      <header className="section-heading" data-reveal>
        <p className="eyebrow">
          <span>02</span> About me
        </p>
        <h2 id="about-title">
          Engineering with an eye
          <br />
          <em>for the whole experience.</em>
        </h2>
      </header>

      <div className="about__grid">
        <figure className="about__image" data-reveal>
          <Image
            src={siteConfig.portrait.src}
            alt=""
            fill
            sizes="(max-width: 767px) 100vw, 38vw"
          />
          <figcaption>
            Based in {siteConfig.location}
            <span aria-hidden="true">↗</span>
          </figcaption>
        </figure>

        <div className="about__content" data-reveal>
          <p className="about__lead">{siteConfig.bio}</p>
          <p className="about__aside">
            My work sits between robust systems and expressive interfaces. I
            value direct collaboration, measured decisions and the small details
            people feel before they notice.
          </p>

          <div className="about__stats" aria-label="Quick facts">
            {siteConfig.stats.map((stat, index) => (
              <StatBlock
                key={stat.label}
                label={stat.label}
                value={stat.value}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
