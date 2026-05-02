import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { getAllNewsPosts } from "@/lib/news";

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

  const staticPages = locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: now,
    }))
  );

  const newsPages = locales.flatMap((locale) =>
    getAllNewsPosts(locale).map((post) => ({
      url: `${baseUrl}/${locale}/news/${post.slug}`,
      lastModified: new Date(post.date),
    }))
  );

  return [...staticPages, ...newsPages];
}
