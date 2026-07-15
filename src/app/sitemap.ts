import type { MetadataRoute } from "next";
import { services, siteUrl } from "@/data/site";
import { locales } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/about", "/services", "/contact", "/privacy", "/legal-disclaimer"];
  const servicePaths = services.map((service) => `/services/${service.slug}`);
  const paths = [...staticPaths, ...servicePaths];

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.7
    }))
  );
}
