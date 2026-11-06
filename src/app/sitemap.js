import { SITE_URL } from "../config/site.js";
import { projectsData } from "./components/data/projects.js";
import { blogsData } from "./components/data/blogs.js";

export default function sitemap() {
  const currentDate = new Date().toISOString();

  // Core static pages
  const staticRoutes = [
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/About`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/Projects`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/Blogs`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/Resume`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/Hire`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic project pages
  const projectRoutes = projectsData.map((project) => ({
    url: `${SITE_URL}/Projects/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Dynamic blog pages
  const blogRoutes = blogsData.map((blog) => ({
    url: `${SITE_URL}/Blogs/${blog.slug}`,
    lastModified: blog.datePublished
      ? new Date(blog.datePublished).toISOString()
      : currentDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
