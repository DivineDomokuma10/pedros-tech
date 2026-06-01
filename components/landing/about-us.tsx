"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 border-t border-foreground/10"
    >
      <div className="max-w-350 mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            About Pedro&apos;s Tech
          </span>

          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Built for visibility.
            <br />
            <span className="text-muted-foreground">Driven by community.</span>
          </h2>
        </div>

        {/* Main Story */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Content */}
          <div
            className={`lg:col-span-7 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
              <p>
                Pedro&apos;s Tech was created to help brands, creators,
                startups, and Web3 projects reach the audiences that matter. In
                an increasingly crowded digital landscape, visibility is no
                longer enough — engagement, trust, and community are what drive
                long-term growth.
              </p>

              <p>
                Through strategic promotion across X, Instagram, Telegram, and
                emerging digital communities, Pedro&apos;s Tech helps clients
                amplify their message, grow their presence, and build meaningful
                connections with their audiences.
              </p>

              <p>
                Beyond promotion, the company serves as a hub for crypto
                insights, ecosystem developments, airdrop opportunities, and
                educational content designed to help people stay informed in a
                rapidly evolving space.
              </p>

              <p className="text-foreground">
                Our mission is simple:
                <br />
                Help good products, strong communities, and innovative ideas get
                the attention they deserve.
              </p>
            </div>
          </div>

          {/* Founder */}
          <div
            className={`lg:col-span-5 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <div className="sticky top-32">
              {/* Image */}
              <div className="relative aspect-4/5 overflow-hidden border border-foreground/10 mb-6">
                <Image
                  src="/images/ceo.jpg"
                  alt="CEO of Pedro's Tech"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Founder Info */}
              <div>
                <p className="text-sm font-mono text-muted-foreground mb-2">
                  Founder & CEO
                </p>

                <h3 className="text-3xl font-display mb-4">Pedro [Surname]</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Building communities, promoting innovation, and helping
                  projects connect with people through strategic digital growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats / Values */}
        <div
          className={`mt-24 pt-12 border-t border-foreground/10 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <span className="text-4xl font-display block mb-3">Growth</span>
              <p className="text-muted-foreground">
                Helping brands and projects expand their digital presence.
              </p>
            </div>

            <div>
              <span className="text-4xl font-display block mb-3">
                Community
              </span>
              <p className="text-muted-foreground">
                Building engaged audiences instead of vanity metrics.
              </p>
            </div>

            <div>
              <span className="text-4xl font-display block mb-3">Insight</span>
              <p className="text-muted-foreground">
                Delivering timely crypto news, opportunities, and updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
