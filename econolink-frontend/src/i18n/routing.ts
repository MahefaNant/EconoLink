import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr"],
  defaultLocale: "en",
  pathnames: {
    "/login": {
      en: "/login",
      fr: "/connexion",
    },
    "/register": {
      en: "/register",
      fr: "/inscription",
    },
    "/contact": {
      en: "/contact-me",
      fr: "/contactez-nous",
    },
  },
});

export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
