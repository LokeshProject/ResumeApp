import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

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
    const resumeHref = `${import.meta.env.BASE_URL}LokeshDas_Resume.pdf?v=20260408`;

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="sticky top-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
            <div className="max-w-6xl mx-auto px-4 py-4">
                {/* Desktop & Mobile Top Bar */}
                <div className="flex items-center justify-between">
                    <motion.div
                        className="font-extrabold tracking-tight text-lg md:text-2xl"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="text-white">Lokesh</span>
                        <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">.dev</span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex gap-2 text-sm">
                        {links.map((l) => (
                            <NavLink
                                key={l.to}
                                to={l.to}
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-xl transition-all duration-300 border ${isActive
                                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow-lg shadow-purple-500/30"
                                        : "text-white/80 border-white/20 hover:border-white/40 hover:bg-white/5"
                                    }`
                                }
                            >
                                {l.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* CV Buttons - Desktop */}
                    <div className="hidden md:flex gap-2">
                        <motion.a
                            href={resumeHref}
                            download="LokeshDas_Resume.pdf"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/40 transition-all text-sm"
                        >
                            Download CV
                        </motion.a>
                        <motion.a
                            href={resumeHref}
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 rounded-xl border-2 border-white/30 text-white font-semibold hover:border-white/60 hover:bg-white/10 transition-all text-sm"
                        >
                            View CV
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        onClick={toggleMenu}
                        className="md:hidden text-white text-2xl focus:outline-none"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </motion.button>
                </div>

                {/* Mobile Navigation Menu */}
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden mt-4 pb-4"
                    >
                        <div className="flex flex-col gap-2">
                            {links.map((l) => (
                                <NavLink
                                    key={l.to}
                                    to={l.to}
                                    onClick={closeMenu}
                                    className={({ isActive }) =>
                                        `px-4 py-2 rounded-lg transition-all duration-300 border text-sm ${isActive
                                            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent font-semibold"
                                            : "text-white/80 border-white/20 hover:border-white/40 hover:bg-white/5"
                                        }`
                                    }
                                >
                                    {l.label}
                                </NavLink>
                            ))}

                            {/* CV Buttons - Mobile */}
                            <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-white/10">
                                <motion.a
                                    href={resumeHref}
                                    download="LokeshDas_Resume.pdf"
                                    whileHover={{ scale: 1.02 }}
                                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold transition text-sm text-center"
                                >
                                    Download CV
                                </motion.a>
                                <motion.a
                                    href={resumeHref}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ scale: 1.02 }}
                                    className="px-4 py-2 rounded-lg border-2 border-white/30 text-white font-semibold hover:border-white/60 hover:bg-white/10 transition text-sm text-center"
                                >
                                    View CV
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
