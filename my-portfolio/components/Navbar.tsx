"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  // 🔥 Smooth scroll with offset
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileOpen(false);

    const target = document.querySelector(href);
    if (!target) return;

    const yOffset = -110;
    const y =
      target.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrollProgress(
        totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0
      );

      const sections = ["home", ...navLinks.map((l) => l.href.slice(1))];

      let current = "home";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= window.innerHeight * 0.4) {
          current = sectionId;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <>
      {/* Scroll progress */}
      <div className="fixed left-0 top-0 z-[70] h-[2px] w-full bg-transparent">
        <motion.div
          className="h-full bg-accent-main shadow-[0_0_12px_rgba(37,99,235,0.45)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className="fixed left-0 top-4 z-[60] w-full px-4 sm:px-6 lg:px-20">
        <motion.nav
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className={`mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl px-5 transition-all duration-300 ${
            isScrolled || mobileOpen
              ? "border border-border bg-background/80 shadow-[0_10px_35px_rgba(0,0,0,0.08)] backdrop-blur-xl"
              : "border border-transparent bg-background/20 backdrop-blur-sm"
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group relative flex items-center gap-2 text-xl font-bold tracking-tight text-text-primary"
          >
            <span className="relative">
              AS.
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-accent-main transition-all duration-300 group-hover:w-full" />
            </span>

            <span className="hidden h-1.5 w-1.5 rounded-full bg-accent-secondary transition-transform duration-300 group-hover:scale-150 sm:block" />
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-2 rounded-full border border-border bg-surface/60 p-1 md:flex">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = activeSection === id;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-[1px] ${
                    isActive
                      ? "text-accent-main"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-accent-main/10"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={() => setIsDark(!isDark)}
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-text-secondary transition-all duration-300 hover:-translate-y-[1px] hover:rotate-12 hover:text-accent-main hover:shadow-md"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a
              href="/cv.pdf"
              download
              className="group relative flex items-center gap-2 overflow-hidden rounded-lg bg-accent-main px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-[1px] hover:scale-[1.03] hover:shadow-[0_8px_22px_rgba(37,99,235,0.35)]"
            >
              <span className="absolute inset-0 translate-x-[-120%] bg-white/20 transition-transform duration-500 group-hover:translate-x-[120%]" />
              <Download size={16} className="relative z-10" />
              <span className="relative z-10">Download CV</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="group flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-text-primary transition-all duration-300 hover:rotate-6 hover:text-accent-main md:hidden"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </motion.nav>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mx-auto mt-3 max-w-6xl rounded-2xl border border-border bg-background/95 p-4 shadow-2xl backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const id = link.href.slice(1);
                  const isActive = activeSection === id;

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`rounded-xl px-4 py-3 text-sm font-medium ${
                        isActive
                          ? "bg-accent-main/10 text-accent-main"
                          : "text-text-secondary hover:bg-surface hover:text-text-primary"
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}