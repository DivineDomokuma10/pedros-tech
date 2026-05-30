"use client";

import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "./animated-wave";
import { contactConfig } from "@/src/config/contact";

export function FooterSection() {
  const t = useTranslations();

  const footerLinks = {
    product: [
      { name: t("nav.features"), href: "#features" },
      { name: t("nav.howItWorks"), href: "#how-it-works" },
      { name: t("nav.pricing"), href: "#pricing" },
      { name: t("integrations.title"), href: "#integrations" },
    ],
    developers: [
      { name: "Documentation", href: "#developers" },
      { name: "API Reference", href: "#" },
      { name: "SDK", href: "#developers" },
      { name: "Status", href: "#" },
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: t("nav.contact"), href: "#" },
    ],
    legal: [
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
      { name: t("security.title"), href: "#security" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", href: contactConfig.social.twitter },
    { name: "GitHub", href: contactConfig.social.github },
    { name: "LinkedIn", href: contactConfig.social.linkedin },
  ];

  return (
    <footer className="relative border-t border-foreground/10">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="inline-flex items-center gap-2 mb-6">
                <span className="text-2xl font-display">{contactConfig.company.name}</span>
              </a>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                {contactConfig.company.description}
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <span>📧</span>
                  <a href={`mailto:${contactConfig.email}`} className="hover:text-foreground transition-colors">
                    {contactConfig.email}
                  </a>
                </p>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <span>📱</span>
                  <a href={`tel:${contactConfig.phone}`} className="hover:text-foreground transition-colors">
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

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([key, links]) => (
              <div key={key}>
                <h3 className="text-sm font-medium mb-6 capitalize">
                  {t(`footer.${key as 'product' | 'developers' | 'company' | 'legal'}`)}
                </h3>
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
            {t("footer.rights")}
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
