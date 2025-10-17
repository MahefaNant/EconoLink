import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EconoLink",
    short_name: "EconoLink",
    description: "A personal finance manager that works online and offline.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/images/app-logo/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/app-logo/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/images/app-logo/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
