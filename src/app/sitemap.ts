import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// Single-page site. No lastModified: a build timestamp would claim a content
// change on every deploy.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url, changeFrequency: "monthly", priority: 1 }];
}
