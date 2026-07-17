import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/education", label: "Education" },
  { to: "/certifications", label: "Certs" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const resumeHref = `${import.meta.env.BASE_URL}Lokesh_Das_Software_Engineer.pdf?v=20260717`;

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/85 backdrop-blur-md">
      <div className="page-shell flex items-center justify-between gap-4 py-4">
        <Link to="/" className="font-display text-xl font-extrabold tracking-tight text-ink md:text-2xl">
          Lokesh<span className="text-teal">.Dev</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `nav-link text-sm ${isActive ? "nav-link-active" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href={resumeHref} target="_blank" rel="noreferrer" className="btn-secondary !py-2 !px-3 text-xs">
            View CV
          </a>
          <a href={resumeHref} download="Lokesh_Das_Software_Engineer.pdf" className="btn-primary !py-2 !px-3 text-xs">
            Download
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
          className="rounded-md border border-line p-2 text-ink lg:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden border-t border-line lg:hidden"
          >
            <div className="page-shell flex flex-col gap-1 py-4">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2.5 text-sm font-medium ${
                      isActive ? "bg-teal-mist text-teal-deep" : "text-ink-soft hover:bg-white/60"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <div className="mt-3 flex gap-2 border-t border-line pt-3">
                <a href={resumeHref} target="_blank" rel="noreferrer" className="btn-secondary flex-1 !py-2 text-xs">
                  View CV
                </a>
                <a href={resumeHref} download="Lokesh_Das_Software_Engineer.pdf" className="btn-primary flex-1 !py-2 text-xs">
                  Download
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
