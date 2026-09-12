"use client";

import { useEffect, useState } from "react";
import { NavIcon } from "@/components/ui/Icons";

const items = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function FloatingNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = items
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "0px 0px -60% 0px", threshold: 0.05 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="floating-nav" aria-label="Primary navigation">
      {items.map((item) => {
        const id = item.href.slice(1);
        const isActive = active === id;
        return (
          <a
            key={id}
            href={item.href}
            className="floating-nav__item"
            onClick={() => setActive(id)}
            aria-label={`Go to ${item.label}`}
            aria-current={isActive ? "location" : undefined}
            data-active={isActive || undefined}
          >
            <NavIcon name={item.label} />
            <span>{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
