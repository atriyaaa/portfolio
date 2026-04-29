import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import CursorGlow from "@/components/CursorGlow";
import ScrollToTop from "@/components/ScrollToTop";
import Certifications from "@/components/Certifications";
import InteractiveDashboard from "@/components/InteractiveDashboard";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-text-primary transition-colors duration-300">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.18]" />
      <div className="pointer-events-none fixed left-1/2 top-0 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent-main/10 blur-3xl" />
      <div className="pointer-events-none fixed bottom-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-accent-secondary/10 blur-3xl" />
      <ScrollToTop />
      <CursorGlow />
      <Navbar />

      <div className="mx-auto max-w-6xl px-6">
        <Hero />
        <Projects />
        <InteractiveDashboard />
        <Skills />
        <Certifications />
        <About />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}