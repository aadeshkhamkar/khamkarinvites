import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Calendar, Clock } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/translations";
import { SectionHeading, GoldDivider } from "./decor";

export function DateReveal() {
  const { t, lang } = useLanguage();
  const r = content.reveal;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const drawing = useRef(false);

  const paintCover = useCallback(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const rect = wrap.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);
    const grad = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    grad.addColorStop(0, "#e8c87a");
    grad.addColorStop(0.5, "#c79a3e");
    grad.addColorStop(1, "#a67c2e");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, rect.width, rect.height);
    ctx.fillStyle = "rgba(255,255,255,0.18)";
    for (let i = 0; i < 60; i++) {
      ctx.beginPath();
      ctx.arc(
        Math.random() * rect.width,
        Math.random() * rect.height,
        Math.random() * 2,
        0,
        Math.PI * 2,
      );
      ctx.fill();
    }
    ctx.fillStyle = "rgba(74,30,24,0.55)";
    ctx.font = "600 16px Jost, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("✦ " + t(r.instruction) + " ✦", rect.width / 2, rect.height / 2);
  }, [t, r.instruction]);

  useEffect(() => {
    if (revealed) return;
    paintCover();
    const onResize = () => paintCover();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [paintCover, revealed, lang]);

  const scratch = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const x = (clientX - rect.left) * dpr;
    const y = (clientY - rect.top) * dpr;
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 26 * dpr, 0, Math.PI * 2);
    ctx.fill();
  };

  const checkProgress = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { width, height } = canvas;
    const data = ctx.getImageData(0, 0, width, height).data;
    let clear = 0;
    for (let i = 3; i < data.length; i += 40) {
      if (data[i] === 0) clear++;
    }
    if (clear / (data.length / 40) > 0.5) setRevealed(true);
  };

  return (
    <section id="date" className="relative bg-secondary/40 px-6 py-24">
      <SectionHeading eyebrow={r.message} title={r.title} />
      <div className="mx-auto max-w-md">
        <div className="relative rounded-[1.8rem] border border-gold/40 bg-card p-2 shadow-card">
          <div
            ref={wrapRef}
            className="relative flex min-h-[20rem] flex-col items-center justify-center overflow-hidden rounded-[1.4rem] bg-gradient-ivory px-6 py-10 text-center"
          >
            {/* hidden content */}
            <Sparkles className="h-7 w-7 text-gold" />
            <p className="mt-3 text-xs uppercase tracking-[0.3em] text-maroon/60">
              {t(r.dateLabel)}
            </p>
            <p className="mt-1 flex items-center gap-2 text-2xl font-medium text-maroon">
              <Calendar className="h-5 w-5 text-gold-deep" />
              {t(r.date)}
            </p>
            <GoldDivider className="my-4" />
            <p className="text-xs uppercase tracking-[0.3em] text-maroon/60">{t(r.muhuratLabel)}</p>
            <p className="mt-1 flex items-center gap-2 text-xl font-medium text-maroon">
              <Clock className="h-5 w-5 text-gold-deep" />
              {t(r.muhurat)}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground/70">
              {t(r.message)}
            </p>

            {/* scratch canvas */}
            {!revealed && (
              <canvas
                ref={canvasRef}
                className="absolute inset-0 z-10 cursor-pointer touch-none"
                onMouseDown={() => (drawing.current = true)}
                onMouseUp={() => {
                  drawing.current = false;
                  checkProgress();
                }}
                onMouseLeave={() => {
                  if (drawing.current) checkProgress();
                  drawing.current = false;
                }}
                onMouseMove={(e) => drawing.current && scratch(e.clientX, e.clientY)}
                onTouchStart={() => (drawing.current = true)}
                onTouchEnd={() => {
                  drawing.current = false;
                  checkProgress();
                }}
                onTouchMove={(e) => {
                  const tch = e.touches[0];
                  scratch(tch.clientX, tch.clientY);
                }}
              />
            )}
          </div>
        </div>

        <AnimatePresence>
          {revealed && (
            <motion.p
              className="mt-5 text-center font-script text-3xl text-gold-deep"
              initial={{ opacity: 0, y: 12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              ✦ {t(r.revealed)} ✦
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* celebratory burst */}
      <AnimatePresence>
        {revealed && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            {Array.from({ length: 24 }).map((_, i) => (
              <motion.span
                key={i}
                className="absolute h-2 w-2 rounded-full bg-gradient-gold"
                initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                animate={{
                  opacity: 0,
                  x: Math.cos((i / 24) * Math.PI * 2) * 220,
                  y: Math.sin((i / 24) * Math.PI * 2) * 220,
                  scale: 0,
                }}
                transition={{ duration: 1.1, ease: "easeOut" }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
