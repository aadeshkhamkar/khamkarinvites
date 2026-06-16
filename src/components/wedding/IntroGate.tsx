import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/translations";
import ganpati from "@/assets/ganpati.png";
import { CornerFlourish, GoldDivider } from "./decor";

export function IntroGate({ open, onOpen }: { open: boolean; onOpen: () => void }) {
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {!open && (
        <motion.div
          className="fixed inset-0 z-50 flex"
          style={{ perspective: 1600 }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 1.1, duration: 0.5 } }}
        >
          {/* Left panel */}
          <motion.div
            className="relative h-full w-1/2 origin-left bg-gradient-maroon"
            exit={{ rotateY: -105, transition: { duration: 1.1, ease: [0.7, 0, 0.3, 1] } }}
          >
            <div className="absolute inset-y-0 right-0 w-px bg-gold/40" />
            <CornerFlourish position="tl" className="absolute left-5 top-5 h-16 w-16" />
            <CornerFlourish position="bl" className="absolute bottom-5 left-5 h-16 w-16" />
          </motion.div>

          {/* Right panel */}
          <motion.div
            className="relative h-full w-1/2 origin-right bg-gradient-maroon"
            exit={{ rotateY: 105, transition: { duration: 1.1, ease: [0.7, 0, 0.3, 1] } }}
          >
            <CornerFlourish position="tr" className="absolute right-5 top-5 h-16 w-16" />
            <CornerFlourish position="br" className="absolute bottom-5 right-5 h-16 w-16" />
          </motion.div>

          {/* Center content */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
            exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.5 } }}
          >
            <motion.span
              className="font-script text-2xl text-gold-light sm:text-3xl"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {t(content.invocation)}
            </motion.span>

            <motion.img
              src={ganpati.src}
              alt="Lord Ganpati"
              width={1024}
              height={1024}
              className="my-3 h-36 w-36 object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)] sm:h-44 sm:w-44"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.p
              className="text-sm uppercase tracking-[0.4em] text-gold-light/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {t(content.surname)}
            </motion.p>

            <motion.h1
              className="mt-4 text-ivory"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.9 }}
            >
              <span className="font-script text-5xl text-gold-light sm:text-6xl">
                {t(content.bride)}
              </span>
              <span className="my-1 block font-script text-3xl text-gold sm:text-4xl">
                {t(content.and)}
              </span>
              <span className="font-script text-5xl text-gold-light sm:text-6xl">
                {t(content.groom)}
              </span>
            </motion.h1>

            <GoldDivider className="my-6 opacity-80" />

            <motion.button
              onClick={onOpen}
              className="rounded-full border border-gold/60 bg-gradient-gold px-9 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-maroon-deep shadow-gold transition-transform hover:scale-105 active:scale-95"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.8 }}
            >
              {t(content.openInvitation)}
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
