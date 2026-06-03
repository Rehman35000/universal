"use client";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#0f1d4a", color: "white" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 16px 40px" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40 }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <img src="/logo.png" alt="Universal Link" style={{ height: 44, borderRadius: 8 }} />
              <div>
                <div style={{ fontWeight: 800, fontSize: 13, letterSpacing: "0.05em" }}>UNIVERSAL LINK</div>
                <div style={{ fontSize: 9, color: "#f5a623", fontWeight: 600, letterSpacing: "0.12em" }}>ONLINE ACADEMY</div>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, lineHeight: 1.8, maxWidth: 260, marginBottom: 20 }}>
              Connecting students to knowledge worldwide. Quality online education for Quran, English, Sciences, GCSE & NAPLAN.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a href="tel:+923333993355" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: 13, display: "flex", alignItems: "center", gap: 8 }}>
                <Phone size={13} /> +92 333-3993355
              </a>
              <a href="mailto:universallink.co@gmail.com" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: 13, display: "flex", alignItems: "center", gap: 8, wordBreak: "break-all" }}>
                <Mail size={13} /> universallink.co@gmail.com
              </a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: 13, marginBottom: 16, color: "white", textTransform: "uppercase", letterSpacing: "0.08em" }}>Courses</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["Quran Education", "English Language", "Sciences & Maths", "GCSE Preparation", "NAPLAN Preparation"].map((c) => (
                <a key={c} href="#courses" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: 13 }}
                  onMouseOver={e => (e.currentTarget.style.color = "#f5a623")}
                  onMouseOut={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                >{c}</a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: 13, marginBottom: 16, color: "white", textTransform: "uppercase", letterSpacing: "0.08em" }}>Quick Links</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <a key={l.label} href={l.href} style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: 13 }}
                  onMouseOver={e => (e.currentTarget.style.color = "#f5a623")}
                  onMouseOut={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                >{l.label}</a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: 13, marginBottom: 16, color: "white", textTransform: "uppercase", letterSpacing: "0.08em" }}>Follow Us</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "💬 WhatsApp", href: "https://whatsapp.com/channel/0029VbCjjwmCMY09BY3ABO1T" },
                { label: "▶️ YouTube", href: "https://youtube.com/@universallinkonlineeducation" },
                { label: "🎵 TikTok", href: "https://www.tiktok.com/@universal.link3" },
                { label: "👻 Snapchat", href: "https://www.snapchat.com/add/universallink26" },
                { label: "👍 Facebook", href: "https://www.facebook.com/share/1LTRJtsD5C/" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: 13 }}
                  onMouseOver={e => (e.currentTarget.style.color = "#f5a623")}
                  onMouseOut={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                >{s.label}</a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "18px 16px" }}>
        <div className="footer-bottom" style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 12 }}>
            © {year} Universal Link Online Academy. All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 12 }}>
            Made with ❤️ for students worldwide
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 28px !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
}