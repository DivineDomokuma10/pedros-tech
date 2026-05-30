"use client";
import { FEATURES } from "@/lib/constants";
import { useEffect, useRef, useState } from "react";
import { FeatureCard } from "./others";

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="max-w-350 mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            What We Offer
          </span>

          <h2
            className={`text-3xl lg:text-5xl flex flex-col space-y-1 md:space-y-3 font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span>Everything you need to grow digitally.</span>

            <span className="text-2xl lg:text-4xl text-muted-foreground">
              Promotion • Crypto • Community
            </span>
          </h2>
        </div>

        <div>
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.number} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
