import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/experience", label: "Experience" },
    { to: "/projects", label: "Projects" },
    { to: "/education", label: "Education" },
    { to: "/certifications", label: "Certifications" },
    { to: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="sticky top-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
            <div className="max-w-6xl mx-auto px-4 py-4">
                {/* Desktop & Mobile Top Bar */}
                <div className="flex items-center justify-between">
                    <div className="font-extrabold tracking-tight text-lg md:text-xl">
                        <span className="text-white">Lokesh</span>
                        <span className="text-white/50">.dev</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex gap-3 text-sm">
                        {links.map((l) => (
                            <NavLink
                                key={l.to}
                                to={l.to}
                                className={({ isActive }) =>
                                    `px-3 py-2 rounded-xl transition border ${isActive
                                        ? "bg-white text-black border-white"
                                        : "text-white/80 border-white/10 hover:border-white/30"
                                    }`
                                }
                            >
                                {l.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* CV Buttons - Desktop */}
                    <div className="hidden md:flex gap-2">
                        <a
                            href="/LokeshDas_Resume.pdf"
                            download="LokeshDas_Resume.pdf"
                            className="px-4 py-2 rounded-xl bg-white text-black font-semibold hover:opacity-90 transition text-sm"
                        >
                            Download CV
                        </a>
                        <a
                            href="/LokeshDas_Resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 rounded-xl bg-white text-black font-semibold hover:opacity-90 transition text-sm"
                        >
                            View CV
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-white text-2xl focus:outline-none transition"
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {menuOpen && (
                    <div className="md:hidden mt-4 pb-4 animate-slideDown">
                        <div className="flex flex-col gap-2">
                            {links.map((l) => (
                                <NavLink
                                    key={l.to}
                                    to={l.to}
                                    onClick={closeMenu}
                                    className={({ isActive }) =>
                                        `px-4 py-2 rounded-lg transition border text-sm ${isActive
                                            ? "bg-white text-black border-white font-semibold"
                                            : "text-white/80 border-white/10 hover:border-white/30 hover:bg-white/5"
                                        }`
                                    }
                                >
                                    {l.label}
                                </NavLink>
                            ))}

                            {/* CV Buttons - Mobile */}
                            <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-white/10">
                                <a
                                    href="/LokeshDas_Resume.pdf"
                                    download="LokeshDas_Resume.pdf"
                                    className="px-4 py-2 rounded-lg bg-white text-black font-semibold hover:opacity-90 transition text-sm text-center"
                                >
                                    Download CV
                                </a>
                                <a
                                    href="/LokeshDas_Resume.pdf"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-4 py-2 rounded-lg bg-white text-black font-semibold hover:opacity-90 transition text-sm text-center"
                                >
                                    View CV
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
