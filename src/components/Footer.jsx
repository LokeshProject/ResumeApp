import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="page-shell flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-bold tracking-tight">
            Lokesh<span className="text-spark">.Dev</span>
          </p>
          <p className="mt-1 text-sm text-paper/60">
            3+ years of full-stack craft for web &amp; mobile at scale.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-paper/70">
          <Link to="/projects" className="transition hover:text-spark">
            Projects
          </Link>
          <Link to="/experience" className="transition hover:text-spark">
            Experience
          </Link>
          <Link to="/contact" className="transition hover:text-spark">
            Contact
          </Link>
        </div>
        <p className="text-xs text-paper/45">© {year} Lokesh Das</p>
      </div>
    </footer>
  );
}
