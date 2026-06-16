import { motion } from "motion/react";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/translations";
import bride from "@/assets/bride.jpg";
import groom from "@/assets/groom.jpg";
import { SectionHeading, Reveal } from "./decor";

function Person({
  img,
  alt,
  role,
  name,
  desc,
  delay,
}: {
  img: string;
  alt: string;
  role: string;
  name: string;
  desc: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay} className="group flex flex-col items-center text-center">
      <div className="relative">
        <div className="absolute -inset-3 rounded-[2rem] border border-gold/40" />
        <div className="overflow-hidden rounded-[1.6rem] shadow-card">
          <img
            src={img}
            alt={alt}
            width={896}
            height={1152}
            loading="lazy"
            className="h-[26rem] w-72 object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[30rem] sm:w-80"
          />
        </div>
      </div>
      <span className="mt-7 font-script text-3xl text-gold-deep">{role}</span>
      <h3 className="text-3xl font-medium text-maroon">{name}</h3>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-foreground/70">{desc}</p>
    </Reveal>
  );
}

export function Couple() {
  const { t } = useLanguage();
  const c = content.couple;
  return (
    <section id="couple" className="relative bg-secondary/40 px-6 py-24">
      <SectionHeading eyebrow={c.subtitle} title={c.title} />
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-16 md:flex-row md:items-start md:gap-10">
        <Person
          img={bride}
          alt="Portrait of the bride"
          role={t(c.brideRole)}
          name={t(c.brideName)}
          desc={t(c.brideDesc)}
          delay={0}
        />
        <motion.div
          className="hidden self-center font-script text-6xl text-gold md:block"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          &amp;
        </motion.div>
        <Person
          img={groom}
          alt="Portrait of the groom"
          role={t(c.groomRole)}
          name={t(c.groomName)}
          desc={t(c.groomDesc)}
          delay={0.15}
        />
      </div>
    </section>
  );
}