type IconProps = { className?: string };

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" />
    </svg>
  );
}

export function SunIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="3.25" />
      <path d="M10 1.5v2M10 16.5v2M1.5 10h2M16.5 10h2M4 4l1.4 1.4M14.6 14.6 16 16M16 4l-1.4 1.4M5.4 14.6 4 16" />
    </svg>
  );
}

export function MoonIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
      <path d="M16.3 12.8A7 7 0 0 1 7.2 3.7a6.5 6.5 0 1 0 9.1 9.1Z" />
    </svg>
  );
}

export function NavIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    Home: <path d="m3 9 7-6 7 6v8h-5v-5H8v5H3Z" />,
    About: (
      <>
        <circle cx="10" cy="6" r="3" />
        <path d="M4 17c.5-3.2 2.5-5 6-5s5.5 1.8 6 5" />
      </>
    ),
    Work: (
      <>
        <rect x="3" y="5" width="14" height="11" rx="1" />
        <path d="M7 5V3h6v2M3 10h14" />
      </>
    ),
    Contact: (
      <>
        <rect x="3" y="4" width="14" height="12" rx="1" />
        <path d="m4 6 6 5 6-5" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

export function SocialIcon({ name }: { name: "github" | "linkedin" | "x" }) {
  const paths = {
    github: (
      <path d="M10 2.5a7.5 7.5 0 0 0-2.4 14.6c.4.1.5-.2.5-.4v-1.5c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.1-.9-1.1-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.8.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-3.7 0-.8.3-1.5.8-2-.1-.3-.4-1 .1-2.1 0 0 .7-.2 2.1.8a7.2 7.2 0 0 1 3.8 0c1.5-1 2.1-.8 2.1-.8.5 1.1.2 1.9.1 2.1.5.5.8 1.2.8 2 0 2.9-1.8 3.5-3.6 3.7.3.3.5.8.5 1.5v2.2c0 .2.1.5.5.4A7.5 7.5 0 0 0 10 2.5Z" />
    ),
    linkedin: (
      <>
        <rect x="3" y="7.5" width="3" height="9" />
        <circle cx="4.5" cy="4.5" r="1.5" />
        <path d="M9 16.5v-9h3v1.4c.8-1.1 1.8-1.7 3.1-1.7 2.1 0 2.9 1.4 2.9 4v5.3h-3v-4.8c0-1.4-.5-2-1.5-2-1.1 0-1.5.8-1.5 2.3v4.5Z" />
      </>
    ),
    x: <path d="M4 3h3.3l3.4 4.6L14.8 3H17l-5.3 6.2L17 17h-3.3l-3.9-5.3L5.2 17H3l5.8-6.9Z" />,
  };

  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
