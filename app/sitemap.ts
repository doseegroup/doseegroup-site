import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  return [
    {
      url: `${baseUrl}/ja`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ja/philosophy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ja/business`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ja/company`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en/philosophy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en/business`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en/company`,
      lastModified: new Date(),
    },
  ];
}