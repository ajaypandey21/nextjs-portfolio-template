"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = matchMedia("(pointer: fine)");
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    document.documentElement.classList.add("has-custom-cursor");
    let pointerX = -100;
    let pointerY = -100;
    let currentX = -100;
    let currentY = -100;
    let frame = 0;

    const render = () => {
      currentX += (pointerX - currentX) * 0.22;
      currentY += (pointerY - currentY) * 0.22;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      frame = requestAnimationFrame(render);
    };

    const onMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      cursor.dataset.visible = "true";
    };
    const onOver = (event: PointerEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>(
        "a, button, [data-cursor]",
      );
      cursor.dataset.state = target ? "active" : "";
      cursor.dataset.label = target?.dataset.cursor ?? "";
    };
    const onLeave = () => {
      cursor.dataset.visible = "false";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return <div className="custom-cursor" ref={cursorRef} aria-hidden="true" />;
}
