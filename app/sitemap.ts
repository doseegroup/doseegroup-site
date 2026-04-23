import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

const pages = [
  "",
  "/philosophy",
  "/business",
  "/business/wellness",
  "/business/globalgrowth",
  "/business/globalgrowth/about",
  "/business/globalgrowth/meo",
  "/business/globalgrowth/consult",
  "/business/globalgrowth/service",
  "/company",
  "/news",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const locales = ["ja", "en"] as const;
  const now = new Date();

  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: now,
    }))
  );
}