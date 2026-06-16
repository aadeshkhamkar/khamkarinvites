import { motion } from "motion/react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/translations";
import { SectionHeading } from "./decor";

export function Events() {
  const { t } = useLanguage();
  const e = content.events;
  return (
    <section id="events" className="relative bg-gradient-ivory px-6 py-24">
      <SectionHeading eyebrow={e.subtitle} title={e.title} />
      <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-7">
        {e.items.map((ev, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, rotateX: 8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
            style={{ perspective: 800 }}
            className="group relative w-full overflow-hidden rounded-2xl border border-gold/40 bg-card p-7 text-center shadow-card sm:w-80"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl border border-gold/20 m-2" />
            <span className="font-script text-3xl text-gold-deep">{t(ev.name)}</span>
            <div className="gold-divider mx-auto my-4 w-16" />
            <ul className="space-y-2 text-sm text-foreground/75">
              <li className="flex items-center justify-center gap-2">
                <Calendar className="h-4 w-4 text-gold-deep" /> {t(ev.date)}
              </li>
              <li className="flex items-center justify-center gap-2">
                <Clock className="h-4 w-4 text-gold-deep" /> {t(ev.time)}
              </li>
              <li className="flex items-center justify-center gap-2">
                <MapPin className="h-4 w-4 text-gold-deep" /> {t(ev.venue)}
              </li>
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
