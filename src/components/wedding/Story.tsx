import { motion } from "motion/react";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/translations";
import { SectionHeading } from "./decor";
import invite1 from "../../assets/invite-1.jpeg";
import invite2 from "../../assets/invite-2.jpeg";

export function Story() {
  const { t, lang } = useLanguage();
  const s = content.story;

  // Get the appropriate invitation image based on language
  const invitationImage = lang === "en" ? invite1 : invite2;

  return (
    <section id="story" className="relative bg-gradient-ivory px-6 py-24">
      <SectionHeading eyebrow={s.subtitle} title={s.title} />

      <motion.div
        className="mx-auto max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Invitation Card Container */}
        <div className="overflow-hidden rounded-[2rem] border-4 border-gold/60 bg-white shadow-2xl">
          {/* Card Header */}
          <div className="border-b-4 border-gold/40 bg-linear-to-r from-gold/10 to-gold/5 px-8 py-6 text-center">
            <h3 className="font-script text-4xl text-gold-deep">{t(s.items[0].title)}</h3>
            {t(s.items[0].text) && (
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                {t(s.items[0].text)}
              </p>
            )}
          </div>

          {/* Invitation Image */}
          <div className="relative overflow-hidden bg-ivory p-6 md:p-8">
            <div className="rounded-xl border-2 border-gold/40 overflow-hidden">
              <img
                src={invitationImage.src}
                alt="Wedding invitation"
                className="h-auto w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Card Footer Accent */}
          <div className="border-t-4 border-gold/40 bg-linear-to-r from-gold/5 to-gold/10 px-8 py-4 text-center">
            <div className="gold-divider mx-auto mb-2 w-20" />
            <p className="text-xs font-semibold uppercase tracking-widest text-gold-deep">
              {lang === "en" ? "With Love & Blessings" : "स्नेह आणि आशीर्वादाने"}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
