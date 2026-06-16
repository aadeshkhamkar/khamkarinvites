import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/translations";
import ganpati from "@/assets/ganpati.png";
import { GoldDivider } from "./decor";

export function Footer() {
  const { t } = useLanguage();
  const f = content.footer;
  return (
    <footer className="relative overflow-hidden bg-gradient-maroon px-6 py-8 text-center text-ivory">
      <img
        src={ganpati.src}
        alt=""
        aria-hidden
        width={1024}
        height={1024}
        loading="lazy"
        className="mx-auto h-20 w-20 object-contain opacity-90"
      />
      <p className="mt-6 font-script text-3xl text-gold-light">{t(f.love)}</p>
      <p className="mt-1 text-2xl font-medium tracking-wide">{t(f.family)}</p>
      <GoldDivider className="my-7" />
      <p className="text-lg tracking-[0.3em] text-gold-light">{t(f.date)}</p>
      <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-ivory/80">{t(f.thanks)}</p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-ivory/80 sm:flex-row sm:gap-4">
        <span className="flex items-center gap-2">
          <span aria-hidden className="inline-block h-4 w-4 rounded-full bg-gold-light" />© Aadesh
          Khamkar 2026
        </span>
        <a
          href="https://aadeshkhamkar.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-gold-light transition-colors duration-200 hover:text-ivory"
        >
          <span
            aria-hidden
            className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-ivory/10 text-gold-light"
          >
            P
          </span>
          Portfolio Website
        </a>
      </div>
    </footer>
  );
}
