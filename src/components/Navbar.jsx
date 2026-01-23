import { NavLink } from "react-router-dom";

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
    return (
        <div className="sticky top-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="font-extrabold tracking-tight">
                    <span className="text-white">Lokesh</span>
                    <span className="text-white/50">.dev</span>
                </div>

                <div className="hidden md:flex gap-4 text-sm">
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

                <a
                    href="/LokeshDasResumes.pdf"
                    download="LokeshDas_Resume.pdf"
                    className="px-4 py-2 rounded-xl bg-white text-black font-semibold hover:opacity-90 transition"
                >
                    Download CV
                </a>
                <a
                    href="/LokeshDasResumes.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-white text-black font-semibold hover:opacity-90 transition"
                >
                    View CV
                </a>
            </div>
        </div>
    );
}
