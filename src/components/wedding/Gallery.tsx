import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/translations";
import { SectionHeading } from "./decor";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import bride from "@/assets/bride.jpg";
import groom from "@/assets/groom.jpg";

const images = [g2, g1, g3, g4, bride, groom];

export function Gallery() {
  const { t } = useLanguage();
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (active) {
      // Disable scroll while viewing image
      document.body.style.overflow = "hidden";

      // After 3 seconds, scroll back to gallery and close modal
      const timer = setTimeout(() => {
        setActive(null);
        document.body.style.overflow = "unset";
        const gallerySection = document.getElementById("gallery");
        if (gallerySection) {
          gallerySection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 3000);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "unset";
      };
    }
  }, [active]);
  return (
    <section id="gallery" className="relative bg-gradient-ivory px-6 py-24">
      <SectionHeading eyebrow={content.gallery.subtitle} title={content.gallery.title} />
      <div className="mx-auto max-w-6xl space-y-6">
        {/* Main Large Image */}
        <motion.button
          onClick={() => setActive(images[0])}
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="group block w-full overflow-hidden rounded-3xl shadow-2xl"
        >
          <img
            src={images[0]}
            alt="Main pre-wedding moment"
            loading="lazy"
            className="h-96 w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.button>

        {/* Small Square Images */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {images.slice(1, 5).map((img, i) => (
            <motion.button
              key={i + 1}
              onClick={() => setActive(img)}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: (i + 1) * 0.08 }}
              className="group relative aspect-square overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <img
                src={img}
                alt={`Pre-wedding detail ${i + 2}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-maroon-deep/90 p-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              className="absolute right-5 top-5 rounded-full border border-gold/50 p-2 text-ivory transition-colors hover:bg-ivory/10"
              onClick={() => setActive(null)}
              aria-label="Close preview"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              src={active}
              alt="Enlarged pre-wedding photograph"
              className="max-h-[85vh] max-w-full rounded-2xl border-2 border-gold/40 object-contain shadow-gold"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}