import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LanguageProvider } from "@/lib/language-context";
import { IntroGate } from "@/components/wedding/IntroGate";
import { Hero } from "@/components/wedding/Hero";
import { Couple } from "@/components/wedding/Couple";
import { Story } from "@/components/wedding/Story";
import { DateReveal } from "@/components/wedding/DateReveal";
import { Events } from "@/components/wedding/Events";
import { Venue } from "@/components/wedding/Venue";
import { Gallery } from "@/components/wedding/Gallery";
import { FamilyInvite } from "@/components/wedding/FamilyInvite";
import { Rsvp } from "@/components/wedding/Rsvp";
import { Footer } from "@/components/wedding/Footer";
import { LanguageSwitcher } from "@/components/wedding/LanguageSwitcher";
import { Petals } from "@/components/wedding/decor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wedding Invitation | Gawali Family" },
      {
        name: "description",
        content:
          "You are warmly invited to the wedding celebration of Aarti & Akshay. Join the Gawali family on 9th July 2026 in Pimpri Kolandar, Shrigonda, Ahilyanagar for the wedding ceremony and haldi.",
      },
      { property: "og:title", content: "Aarti & Akshay — Wedding Invitation" },
      {
        property: "og:description",
        content:
          "A luxury digital wedding invitation from the Gawali family. 9th July 2026, Pimpri Kolandar, Shrigonda, Ahilyanagar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <WeddingPage />
    </LanguageProvider>
  );
}

function WeddingPage() {
  const [opened, setOpened] = useState(false);

  // Always reset intro state on fresh load so users start from the gate
  useEffect(() => {
    try {
      localStorage.removeItem("wedding-intro-opened");
    } catch (e) {
      // ignore
    }
    setOpened(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  // Ensure the intro gate resets on page unload so reload/close starts at first page
  useEffect(() => {
    const clearIntro = () => {
      try {
        localStorage.removeItem("wedding-intro-opened");
      } catch (e) {
        // ignore
      }
    };
    window.addEventListener("beforeunload", clearIntro);
    return () => window.removeEventListener("beforeunload", clearIntro);
  }, []);

  const handleOpen = () => {
    setOpened(true);
    try {
      localStorage.setItem("wedding-intro-opened", "true");
    } catch (e) {
      // ignore
    }
    window.setTimeout(() => {
      document.getElementById("couple")?.scrollIntoView({ behavior: "smooth" });
    }, 3000);
  };

  return (
    <main className="relative overflow-x-hidden">
      <IntroGate open={opened} onOpen={handleOpen} />
      {opened && (
        <>
          <LanguageSwitcher />
          <Petals />
        </>
      )}
      <Hero />
      <Couple />
      <Story />
      <DateReveal />
      <Events />
      <Venue />
      <Gallery />
      <FamilyInvite />
      {/* <Rsvp /> */}
      <Footer />
    </main>
  );
}
