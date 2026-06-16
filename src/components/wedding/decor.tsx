import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/lib/language-context";
import gsap from "gsap";

/* Falling floral petals across the page */
export function Petals({ count = 30 }: { count?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const w = window.innerWidth;
    const h = window.innerHeight;

    // Fade in over 1s, then fade out after 3.5s so it's gone at 4.5s
    gsap.fromTo(container, { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.to(container, { opacity: 0, duration: 1, delay: 9.5 });

    gsap.set(container, { perspective: 600 });

    const R = (min: number, max: number) => min + Math.random() * (max - min);

    const dots: HTMLDivElement[] = [];
    for (let i = 0; i < count; i++) {
      const div = document.createElement("div");
      div.style.position = "absolute";
      div.style.width = "35px";
      div.style.height = "35px";
      div.style.backgroundImage = "url(https://image.ibb.co/kyUHab/rose.png)";
      div.style.backgroundSize = "100% 100%";
      
      gsap.set(div, { x: R(0, w), y: R(-200, -150), z: R(-200, 200) });
      container.appendChild(div);
      dots.push(div);

      gsap.to(div, {
        y: h + 100,
        ease: "none",
        repeat: -1,
        delay: R(0, 2), // Let them start falling from top randomly instead of popping in instantly
        duration: R(6, 15)
      });
      gsap.to(div, {
        x: "+=100",
        rotationZ: R(0, 180),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: R(4, 8)
      });
      gsap.to(div, {
        rotationX: R(0, 360),
        rotationY: R(0, 360),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: -5,
        duration: R(2, 8)
      });
    }

    return () => {
      gsap.killTweensOf(container);
      dots.forEach(dot => {
        gsap.killTweensOf(dot);
        dot.remove();
      });
    };
  }, [count]);

  return <div ref={containerRef} className="pointer-events-none fixed inset-0 z-20 overflow-hidden" aria-hidden />;
}

/* Ornamental gold divider with a central diamond */
export function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden>
      <span className="gold-divider w-20 sm:w-28" />
      <svg width="26" height="26" viewBox="0 0 24 24" className="text-gold">
        <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" fill="currentColor" />
      </svg>
      <span className="gold-divider w-20 sm:w-28" />
    </div>
  );
}

/* Decorative corner flourish */
export function CornerFlourish({
  position = "tl",
  className = "",
}: {
  position?: "tl" | "tr" | "bl" | "br";
  className?: string;
}) {
  const rot = { tl: "", tr: "scale-x-[-1]", bl: "scale-y-[-1]", br: "scale-[-1]" }[position];
  return (
    <svg viewBox="0 0 100 100" className={`text-gold/50 ${rot} ${className}`} aria-hidden>
      <path
        d="M4 4c30 0 54 8 70 28 8 10 12 24 12 44M4 4c0 24 4 40 14 52 12 14 30 22 56 26M4 4c14 2 26 8 34 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="10" cy="10" r="3" fill="currentColor" />
    </svg>
  );
}

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: { en: string; mr: string };
  title: { en: string; mr: string };
}) {
  const { t } = useLanguage();
  return (
    <motion.div
      className="mb-12 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="font-script text-2xl text-gold-deep sm:text-3xl">{t(eyebrow)}</span>
      <h2 className="mt-1 text-4xl font-medium tracking-tight text-maroon sm:text-5xl">
        {t(title)}
      </h2>
      <GoldDivider className="mt-5" />
    </motion.div>
  );
}

/* Generic reveal wrapper */
export function Reveal({
  children,
  delay = 0,
  y = 36,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
