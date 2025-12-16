"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { useTranslations } from "next-intl";

const footerLinks = {
  product: [
    { label: "footer.links.product.features", href: "/features" },
    { label: "footer.links.product.pricing", href: "/pricing" },
    { label: "footer.links.product.updates", href: "/updates" },
    { label: "footer.links.product.api", href: "/api" },
  ],
  company: [
    { label: "footer.links.company.about", href: "/about" },
    { label: "footer.links.company.blog", href: "/blog" },
    { label: "footer.links.company.careers", href: "/careers" },
    { label: "footer.links.company.press", href: "/press" },
  ],
  support: [
    { label: "footer.links.support.docs", href: "/docs" },
    { label: "footer.links.support.help", href: "/help" },
    { label: "footer.links.support.community", href: "/community" },
    { label: "footer.links.support.contact", href: "/contact" },
  ],
  legal: [
    { label: "footer.links.legal.privacy", href: "/privacy" },
    { label: "footer.links.legal.terms", href: "/terms" },
    { label: "footer.links.legal.cookies", href: "/cookies" },
    { label: "footer.links.legal.security", href: "/security" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
];

export default function Footer() {
  const t = useTranslations("HomePage");

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-2xl font-bold text-white">EconoLink</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4 capitalize">
                {t(`footer.categories.${category}`)}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {t(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} EconoLink. {t("footer.copyright")}
          </p>

          <div className="flex items-center gap-6">
            <select className="bg-transparent text-sm border-none focus:outline-none">
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="es">Español</option>
            </select>

            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-sm text-gray-400">
                {t("footer.status")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
