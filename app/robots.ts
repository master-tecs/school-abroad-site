import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/dashboard/",
          "/api/",
          "/admin/",
          "/_next/",
          "/static/",
        ],
      },
    ],
    sitemap: "https://schoolabroad.org/sitemap.xml",
  };
}

