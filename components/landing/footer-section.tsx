"use client";

import { contactConfig } from "@/src/config/contact";
import { AnimatedWave } from "./animated-wave";
import { ArrowUpRight } from "lucide-react";

export function FooterSection() {
  const footerLinks = {
    services: [
      { name: "Product Promotion", href: "#services" },
      { name: "Social Media Marketing", href: "#services" },
      { name: "Community Growth", href: "#services" },
      { name: "Web3 Promotion", href: "#services" },
    ],

    resources: [
      { name: "Crypto Updates", href: "#crypto" },
      { name: "Airdrop Opportunities", href: "#crypto" },
      { name: "Market Insights", href: "#crypto" },
      { name: "Community News", href: "#crypto" },
    ],

    company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Contact", href: "#contact" },
      { name: "Join Our Team", href: "#careers" },
    ],

    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Disclaimer", href: "#" },
    ],
  };

  const socialLinks = [
    {
      name: "X",
      href: contactConfig.social.twitter,
    },
    {
      name: "Telegram",
      href: contactConfig.social.telegram,
    },
    {
      name: "Instagram",
      href: contactConfig.social.instagram,
    },
  ];

  return (
    <footer className="relative border-t border-foreground/10">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>

      <div className="relative z-10 max-w-350 mx-auto px-6 lg:px-12">
        {/* CTA Section */}
        <div className="py-20 border-b border-foreground/10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Let&apos;s Grow Together
            </span>

            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">
              Ready to reach
              <br />
              more people?
            </h2>

            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              From product promotion and community growth to crypto updates and
              ecosystem opportunities, Pedro&apos;s Tech helps brands, creators,
              startups, and Web3 projects expand their reach where it matters
              most.
            </p>
          </div>
        </div>

        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="inline-flex items-center gap-2 mb-6">
                <span className="text-2xl font-display">Pedro&apos;s Tech</span>
              </a>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                Helping brands, creators, startups, and Web3 projects grow
                through strategic social media promotion, audience engagement,
                and timely crypto ecosystem updates.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <span>📧</span>
                  <a
                    href={`mailto:${contactConfig.email}`}
                    className="hover:text-foreground transition-colors"
                  >
                    {contactConfig.email}
                  </a>
                </p>

                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <span>📱</span>
                  <a
                    href={`tel:${contactConfig.phone}`}
                    className="hover:text-foreground transition-colors"
                  >
                    {contactConfig.phone}
                  </a>
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([key, links]) => (
              <div key={key}>
                <h3 className="text-sm font-medium mb-6 capitalize">{key}</h3>

                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pedro&apos;s Tech. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Campaigns running successfully
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
