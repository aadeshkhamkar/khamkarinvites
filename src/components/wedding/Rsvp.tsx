import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Check } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/translations";
import { SectionHeading } from "./decor";

export function Rsvp() {
  const { t } = useLanguage();
  // @ts-ignore
  const r = content.rsvp;
  const [sent, setSent] = useState(false);

  const inputCls =
    "w-full rounded-xl border border-gold/40 bg-ivory/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/30";

  return (
    <section id="rsvp" className="relative bg-gradient-ivory px-6 py-24">
      <SectionHeading eyebrow={r.subtitle} title={r.title} />
      <div className="mx-auto max-w-lg rounded-[1.8rem] border border-gold/40 bg-card p-8 shadow-card">
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="done"
              className="flex flex-col items-center py-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-gold">
                <Check className="h-8 w-8 text-maroon" />
              </span>
              <p className="mt-4 font-script text-3xl text-gold-deep">{t(r.success)}</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              className="flex flex-col gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <input className={inputCls} placeholder={t(r.name)} required />
              <input className={inputCls} type="tel" placeholder={t(r.phone)} required />
              <input
                className={inputCls}
                type="number"
                min={1}
                defaultValue={1}
                placeholder={t(r.guests)}
                required
              />
              <textarea className={inputCls} rows={3} placeholder={t(r.message)} />
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-maroon px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-ivory shadow-gold transition-transform hover:scale-[1.02] active:scale-95"
              >
                <Send className="h-4 w-4" />
                {t(r.submit)}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
