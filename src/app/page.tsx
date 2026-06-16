"use client";

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

export default function Index() {
  return (
    <LanguageProvider>
      <WeddingPage />
    </LanguageProvider>
  );
}

function WeddingPage() {
  const [opened, setOpened] = useState(false);
  const [showPetals, setShowPetals] = useState(false);

  // Always reset intro state on fresh load so users start from the gate
  useEffect(() => {
    try {
      localStorage.removeItem("wedding-intro-opened");
    } catch (e) {
      // ignore
    }
    setOpened(false);
    setShowPetals(false);
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
    setShowPetals(true);
    
    // Wait for all petals to naturally fall off screen before unmounting (approx 18s total)
    window.setTimeout(() => {
      setShowPetals(false);
    }, 18000);

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
          {showPetals && <Petals />}
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
