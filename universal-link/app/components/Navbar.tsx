"use client";
import { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "About Us", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      background: "white",
      boxShadow: scrolled ? "0 2px 20px rgba(26,46,110,0.12)" : "0 1px 0 #e2e8f0",
      width: "100%",
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 64,
      }}>
        {/* LOGO */}
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", flexShrink: 0 }}>
          <img src="/logo.png" alt="Universal Link Online Academy" style={{ height: 42 }} />
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ fontWeight: 800, fontSize: 13, color: "#1a2e6e", letterSpacing: "0.05em" }}>UNIVERSAL LINK</div>
            <div style={{ fontSize: 9, fontWeight: 600, color: "#f5a623", letterSpacing: "0.12em" }}>ONLINE ACADEMY</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="desktop-nav" style={{ display: "flex", gap: 2 }}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setActiveLink(link.label)} style={{
              padding: "8px 10px",
              fontSize: 13,
              fontWeight: activeLink === link.label ? 600 : 500,
              color: activeLink === link.label ? "#1a2e6e" : "#475569",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}>
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + Mobile btn */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <a href="#contact" className="desktop-cta" style={{
            padding: "9px 14px",
            background: "#1a2e6e", color: "white",
            borderRadius: 8, textDecoration: "none",
            display: "flex", alignItems: "center", gap: 6,
            fontSize: 13, fontWeight: 600, whiteSpace: "nowrap",
          }}>
            <Calendar size={13} />
            Book Trial
          </a>

          <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} style={{
            display: "none",
            background: "none", border: "none",
            cursor: "pointer", padding: 4, color: "#1a2e6e",
          }}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          padding: "12px 16px 20px",
          borderTop: "1px solid #eee",
          background: "white",
        }}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => { setMenuOpen(false); setActiveLink(link.label); }} style={{
              display: "block",
              padding: "12px 0",
              textDecoration: "none",
              color: "#1a2e6e",
              fontWeight: 500,
              fontSize: 15,
              borderBottom: "1px solid #f1f5f9",
            }}>
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            marginTop: 16,
            padding: "12px 16px",
            background: "#1a2e6e", color: "white",
            borderRadius: 8, textDecoration: "none",
            fontWeight: 600, fontSize: 14,
          }}>
            <Calendar size={15} /> Book Free Trial
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}