"use client";

import type { AnchorHTMLAttributes, PointerEvent } from "react";

type MagneticLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  strength?: number;
};

export function MagneticLink({
  children,
  className,
  strength = 10,
  ...props
}: MagneticLinkProps) {
  function move(event: PointerEvent<HTMLAnchorElement>) {
    if (!matchMedia("(pointer: fine)").matches) return;
    const target = event.currentTarget;
    const bounds = target.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * strength;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * strength;
    target.style.setProperty("--magnetic-x", `${x}px`);
    target.style.setProperty("--magnetic-y", `${y}px`);
  }

  function reset(event: PointerEvent<HTMLAnchorElement>) {
    event.currentTarget.style.setProperty("--magnetic-x", "0px");
    event.currentTarget.style.setProperty("--magnetic-y", "0px");
  }

  return (
    <a
      className={className}
      onPointerMove={move}
      onPointerLeave={reset}
      {...props}
    >
      {children}
    </a>
  );
}
