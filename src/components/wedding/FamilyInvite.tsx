import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/translations";
import { SectionHeading, Reveal, GoldDivider } from "./decor";

function FamilyCard({
  family,
  names,
  msg,
  delay,
}: {
  family: string;
  names: string;
  msg: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay} className="relative rounded-2xl border border-gold/40 bg-card p-8 text-center shadow-card">
      <span className="font-script text-4xl text-gold-deep">{family}</span>
      <GoldDivider className="my-4" />
      <p className="text-sm leading-relaxed text-foreground/75">{msg}</p>
      <p className="mt-5 text-base font-medium uppercase tracking-[0.15em] text-maroon">{names}</p>
    </Reveal>
  );
}

export function FamilyInvite() {
  const { t } = useLanguage();
  const f = content.family;
  return (
    <section id="family" className="relative bg-secondary/40 px-6 py-24">
      <SectionHeading eyebrow={f.subtitle} title={f.title} />
      <div className="mx-auto grid max-w-4xl gap-7 md:grid-cols-2">
        <FamilyCard
          family={t(f.brideFamily)}
          names={t(f.brideNames)}
          msg={t(f.brideMsg)}
          delay={0}
        />
        <FamilyCard
          family={t(f.groomFamily)}
          names={t(f.groomNames)}
          msg={t(f.groomMsg)}
          delay={0.15}
        />
      </div>
    </section>
  );
}