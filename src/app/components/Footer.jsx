export default function Footer() {
  return (
    <footer className="site-footer">
      <a href="/" className="brand"><span>&lt;</span>ahsan<span>/&gt;</span></a>
      <p>© {new Date().getFullYear()} Ahsan Ali Soomro. Built with care.</p>
      <div><a href="/About">About</a><a href="/Hire">Contact</a><a href="/Blogs">Writing</a></div>
    </footer>
  );
}
