import { SITE_URL } from "../config/site.js";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/client-portal/", "/Text"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
