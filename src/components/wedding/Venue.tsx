import { MapPin, Navigation } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { content, MAP_EMBED, MAP_DIRECTIONS } from "@/lib/translations";
import venueImg from "@/assets/venue.jpg";
import { SectionHeading, Reveal } from "./decor";

export function Venue() {
  const { t } = useLanguage();
  const v = content.venue;
  return (
    <section id="venue" className="relative bg-secondary/40 px-6 py-24">
      <SectionHeading eyebrow={v.subtitle} title={v.title} />
      <Reveal className="mx-auto max-w-4xl overflow-hidden rounded-[1.8rem] border border-gold/40 bg-card shadow-card">
        <div className="grid md:grid-cols-2">
          <img
            src={venueImg}
            alt="The wedding venue"
            width={1280}
            height={896}
            loading="lazy"
            className="h-64 w-full object-cover md:h-full"
          />
          <div className="flex flex-col justify-center p-8 text-center md:text-left">
            <h3 className="font-script text-4xl text-gold-deep">{t(v.name)}</h3>
            <p className="mt-3 flex items-start justify-center gap-2 text-sm leading-relaxed text-foreground/75 md:justify-start">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
              {t(v.address)}
            </p>
            <a
              href={MAP_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 self-center rounded-full bg-gradient-maroon px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-ivory shadow-gold transition-transform hover:scale-105 md:self-start"
            >
              <Navigation className="h-4 w-4" />
              {t(v.directions)}
            </a>
          </div>
        </div>
        <div className="border-t border-gold/30">
          <iframe
            title="Venue location map"
            src={MAP_EMBED}
            className="h-72 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Reveal>
    </section>
  );
}