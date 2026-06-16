import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/translations";
import ganpati from "@/assets/ganpati.png";
import { GoldDivider, CornerFlourish } from "./decor";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section
      id="hero"
      className="relative flex h-[100dvh] items-center justify-center overflow-hidden bg-gradient-ivory px-6 py-4 md:py-8"
    >
      <CornerFlourish position="tl" className="absolute left-4 top-4 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24" />
      <CornerFlourish position="tr" className="absolute right-4 top-4 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24" />
      <CornerFlourish
        position="bl"
        className="absolute bottom-4 left-4 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24"
      />
      <CornerFlourish
        position="br"
        className="absolute bottom-4 right-4 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24"
      />

      <div className="relative z-10 flex flex-col items-center text-center mt-2">
        <motion.span
          className="font-script text-xl text-gold-deep sm:text-2xl md:text-3xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
        >
          {t(content.invocation)}
        </motion.span>

        <motion.img
          src={ganpati.src}
          alt="Decorative Lord Ganpati artwork"
          width={1024}
          height={1024}
          className="animate-float-slow my-1 h-28 w-28 object-contain sm:h-32 sm:w-32 md:my-1 md:h-36 md:w-36"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.p
          className="text-[10px] uppercase tracking-[0.45em] text-maroon/70 sm:text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.9 }}
        >
          {t(content.surname)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 1 }}
          className="mt-1 md:mt-2"
        >
          <span className="block font-script text-5xl leading-tight text-maroon sm:text-6xl lg:text-7xl">
            {t(content.bride)}
          </span>
          <span className="block text-lg text-gold-deep sm:text-xl md:text-2xl">{t(content.and)}</span>
          <span className="block font-script text-5xl leading-tight text-maroon sm:text-6xl lg:text-7xl">
            {t(content.groom)}
          </span>
        </motion.div>

        <GoldDivider className="my-3 md:my-4" />

        <motion.p
          className="max-w-md text-xs leading-relaxed text-foreground/80 sm:text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {t(content.invite)}
        </motion.p>

        <motion.button
          onClick={() => document.getElementById("couple")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-4 flex cursor-pointer flex-col items-center text-gold-deep transition-colors hover:text-gold md:mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          aria-label="Scroll to next section"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
            <ChevronDown className="h-4 w-4" />
          </motion.span>
        </motion.button>
      </div>
    </section>
  );
}
