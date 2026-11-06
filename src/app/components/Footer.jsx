import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { siteConfig } from "@/config/site";

function DevToIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M7.42 10.05c-.18-.12-.46-.23-.84-.23H5.13v4.37h1.43c.39 0 .68-.1.86-.24.23-.17.35-.47.35-.93v-2.04c0-.46-.12-.76-.35-.93zm-1.3 2.99v-1.85h.41c.28 0 .42.14.42.43v.99c0 .29-.14.43-.42.43h-.41zM20.89 3H3.11A2.11 2.11 0 0 0 1 5.11v13.78A2.11 2.11 0 0 0 3.11 21h17.78A2.11 2.11 0 0 0 23 18.89V5.11A2.11 2.11 0 0 0 20.89 3zM8.34 13.91c-.34.49-.9.76-1.63.76H4.13V9.33h2.62c.71 0 1.25.26 1.59.74.27.38.41.9.41 1.55v.74c0 .65-.14 1.17-.41 1.55zm4.84-2.82h-1.92v.87h1.79v.99h-1.79v.91h1.92v1.01h-2.92V9.33h2.92v1.76zm6.69 0l-1.39 3.58h-1.07l-1.39-3.58V14.8h-1.01V9.33h1.49l1.45 3.73 1.45-3.73h1.47v5.47h-1.01v-3.71z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-brand-wrap">
        <a href="/" className="brand" aria-label="Ahsan Ali Soomro Home">
          <span>&lt;</span>ahsan<span>/&gt;</span>
        </a>
        <p>© {new Date().getFullYear()} Ahsan Ali Soomro (Ahsan Soomro). All rights reserved.</p>
      </div>

      <nav className="footer-nav" aria-label="Footer navigation">
        <a href="/About">About</a>
        <a href="/Projects">Projects</a>
        <a href="/Blogs">Journal</a>
        <a href="/Resume">Résumé</a>
        <a href="/Hire">Contact</a>
      </nav>

      <div className="footer-social-links" aria-label="Social and Developer profiles">
        <a
          href={siteConfig.socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile of Ahsan Ali Soomro"
          className="footer-social-item"
        >
          <IconBrandLinkedin size={18} />
          <span>LinkedIn</span>
        </a>
        <a
          href={siteConfig.socialLinks.devto}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="DEV.to profile of Ahsan Ali Soomro"
          className="footer-social-item"
        >
          <DevToIcon size={18} />
          <span>DEV.to</span>
        </a>
        <a
          href={siteConfig.socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile of Ahsan Ali Soomro"
          className="footer-social-item"
        >
          <IconBrandGithub size={18} />
          <span>GitHub</span>
        </a>
      </div>
    </footer>
  );
}
