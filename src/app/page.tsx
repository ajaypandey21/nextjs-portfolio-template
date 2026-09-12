import { About } from "@/components/about/About";
import { Contact } from "@/components/contact/Contact";
import { CustomCursor } from "@/components/cursor/CustomCursor";
import { Hero } from "@/components/hero/Hero";
import { FloatingNav } from "@/components/navigation/FloatingNav";
import { Projects } from "@/components/projects/Projects";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { RevealObserver } from "@/components/ui/RevealObserver";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Go to home">
          {siteConfig.name}
          <span aria-hidden="true">/</span>
          <small>Portfolio</small>
        </a>
        <ThemeToggle />
      </header>

      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Testimonials />
      </main>

      <Contact />
      <FloatingNav />
      <CustomCursor />
      <RevealObserver />
    </>
  );
}
