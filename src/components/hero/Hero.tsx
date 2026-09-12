import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, SocialIcon } from "@/components/ui/Icons";
import { MagneticLink } from "@/components/ui/MagneticLink";

export function Hero() {
  return (
    <section className="hero section-shell" id="home" aria-labelledby="hero-title">
      <aside className="social-rail" aria-label="Social links">
        {(
          Object.entries(siteConfig.social) as Array<
            [keyof typeof siteConfig.social, string]
          >
        ).map(([name, href]) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={name}
          >
            <SocialIcon name={name} />
          </a>
        ))}
        <span aria-hidden="true" />
      </aside>

      <div className="hero__grid">
        <div className="hero__copy">
          <p className="eyebrow hero-enter hero-enter--one">Hello, I’m</p>
          <h1 className="hero__title hero-enter hero-enter--two" id="hero-title">
            {siteConfig.name}
            <span className="hero__title-mark" aria-hidden="true">
              .
            </span>
          </h1>
          <div className="hero__role hero-enter hero-enter--three">
            <span>{siteConfig.role}</span>
            <span className="hero__role-line" aria-hidden="true" />
            <span>{siteConfig.location}</span>
          </div>
          <p className="hero__description hero-enter hero-enter--four">
            {siteConfig.description}
          </p>
          <div className="hero__actions hero-enter hero-enter--five">
            <MagneticLink className="button button--primary" href="#work">
              View work <ArrowUpRight />
            </MagneticLink>
            <MagneticLink
              className="button button--text"
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight />
            </MagneticLink>
          </div>
        </div>

        <div className="hero__portrait hero-enter hero-enter--six" data-cursor="">
          <div className="hero__portrait-frame">
            <Image
              src={siteConfig.portrait.src}
              alt={siteConfig.portrait.alt}
              fill
              priority
              sizes="(max-width: 767px) 82vw, (max-width: 1100px) 42vw, 34vw"
            />
          </div>
          <p className="hero__portrait-note">
            <span>Selected portrait</span>
            <span>© {new Date().getFullYear()}</span>
          </p>
        </div>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <span className="scroll-cue__mouse">
          <span />
        </span>
        <span>Scroll down</span>
      </div>
    </section>
  );
}
