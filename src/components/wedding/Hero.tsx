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
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-ivory px-6 py-20"
    >
      <CornerFlourish position="tl" className="absolute left-4 top-4 h-24 w-24 sm:h-32 sm:w-32" />
      <CornerFlourish position="tr" className="absolute right-4 top-4 h-24 w-24 sm:h-32 sm:w-32" />
      <CornerFlourish position="bl" className="absolute bottom-4 left-4 h-24 w-24 sm:h-32 sm:w-32" />
      <CornerFlourish position="br" className="absolute bottom-4 right-4 h-24 w-24 sm:h-32 sm:w-32" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.span
          className="font-script text-3xl text-gold-deep sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
        >
          {t(content.invocation)}
        </motion.span>

        <motion.img
          src={ganpati}
          alt="Decorative Lord Ganpati artwork"
          width={1024}
          height={1024}
          className="animate-float-slow my-2 h-40 w-40 object-contain sm:h-52 sm:w-52"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.p
          className="text-sm uppercase tracking-[0.45em] text-maroon/70"
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
          className="mt-3"
        >
          <span className="block font-script text-6xl leading-tight text-maroon sm:text-8xl">
            {t(content.groom)}
          </span>
          <span className="my-1 block text-2xl text-gold-deep sm:text-3xl">{t(content.and)}</span>
          <span className="block font-script text-6xl leading-tight text-maroon sm:text-8xl">
            {t(content.bride)}
          </span>
        </motion.div>

        <GoldDivider className="my-7" />

        <motion.p
          className="max-w-md text-base leading-relaxed text-foreground/80 sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {t(content.invite)}
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col items-center text-gold-deep"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
        >
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}