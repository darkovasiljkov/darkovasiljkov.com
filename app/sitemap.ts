import type { MetadataRoute } from "next";
import { profile } from "./content";
import { siteConfig } from "./site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [`${siteConfig.url}${profile.portrait.src}`],
    },
  ];
}
