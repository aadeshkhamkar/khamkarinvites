import { useLanguage } from "@/lib/language-context";

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="fixed right-4 top-4 z-40 flex items-center gap-1 rounded-full border border-gold/40 bg-ivory/80 p-1 shadow-gold backdrop-blur-md sm:right-6 sm:top-6">
      <button
        onClick={() => setLang("en")}
        className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
          lang === "en" ? "bg-gradient-maroon text-ivory" : "text-maroon/70 hover:text-maroon"
        }`}
        aria-pressed={lang === "en"}
      >
        ENG
      </button>
      <button
        onClick={() => setLang("mr")}
        lang="mr"
        className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
          lang === "mr" ? "bg-gradient-maroon text-ivory" : "text-maroon/70 hover:text-maroon"
        }`}
        aria-pressed={lang === "mr"}
      >
        मराठी
      </button>
    </div>
  );
}
