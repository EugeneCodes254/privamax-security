import type { MetadataRoute } from "next";

const siteUrl = "https://privamaxsecurity.com";
const lastModified = new Date("2026-09-03T00:00:00+03:00");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/company/about`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/services`, lastModified, changeFrequency: "monthly", priority: 0.95 },
    { url: `${siteUrl}/insurance`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/blog`, lastModified, changeFrequency: "weekly", priority: 0.85 },
    { url: `${siteUrl}/contacts`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/track-cargo`, lastModified, changeFrequency: "weekly", priority: 0.75 },
    { url: `${siteUrl}/company/portfolio`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/company/staff`, lastModified, changeFrequency: "monthly", priority: 0.65 },
    { url: `${siteUrl}/company/gallery`, lastModified, changeFrequency: "monthly", priority: 0.65 },
    { url: `${siteUrl}/company/jobs`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
}
