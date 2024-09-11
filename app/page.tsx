"use client";

import BodyContent from "@/components/bodyContent";
import Footer from "@/components/Footer";

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import ScrollBar from "@/components/ui/ScrollBar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <>
    <main className="w-full h-full bg-bla-200">
      <div className="h-full w-full flex-col gap-20 block overflow-x-hidden">
        <ScrollBar />
        <FloatingNav navItems={navItems} />
        <Hero />
        <BodyContent />
        <Footer/>
      </div>
    </main>

    </>
  );
}
