import { siteConfig } from "@/config/site";
import { ArrowUpRight, SocialIcon } from "@/components/ui/Icons";
import { MagneticLink } from "@/components/ui/MagneticLink";

export function Contact() {
  return (
    <footer
      className="contact section-shell"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact__top" data-reveal>
        <p className="eyebrow">
          <span>05</span> Contact
        </p>
        <p className="contact__availability">
          <span aria-hidden="true" />
          {siteConfig.availability}
        </p>
      </div>

      <div className="contact__main" data-reveal>
        <h2 id="contact-title">
          Have something
          <br />
          <em>worth making?</em>
        </h2>
        <MagneticLink
          className="contact__email"
          href={`mailto:${siteConfig.email}`}
          data-cursor="Write"
        >
          {siteConfig.email}
          <ArrowUpRight />
        </MagneticLink>
      </div>

      <div className="contact__bottom">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <nav aria-label="Social links">
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
        </nav>
        <a href="#home">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
