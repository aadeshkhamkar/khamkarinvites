import { motion } from "motion/react";
import { useLanguage } from "@/lib/language-context";

/* Falling floral petals across the page */
export function Petals({ count = 14 }: { count?: number }) {
  const petals = Array.from({ length: count });
  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden" aria-hidden>
      {petals.map((_, i) => {
        const left = (i * 97) % 100;
        const delay = (i % 7) * 1.6;
        const dur = 11 + (i % 5) * 2.5;
        const size = 10 + (i % 4) * 5;
        return (
          <span
            key={i}
            // eslint-disable-next-line react/forbid-dom-props
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animation: `petal-fall ${dur}s linear ${delay}s infinite`,
            }}
            className="absolute top-0 rounded-[60%_40%_60%_40%] bg-gradient-gold opacity-70"
          />
        );
      })}
    </div>
  );
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
