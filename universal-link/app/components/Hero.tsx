"use client";
import { useState } from "react";
import { Calendar, ArrowRight, Play, X } from "lucide-react";

const avatars = ["👩‍🎓", "👦", "👧", "👨‍🎓"];

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    label: "Certified Teachers",
    desc: "Qualified and experienced educators.",
    color: "#1a2e6e",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    label: "Live Classes",
    desc: "Interactive live sessions anytime.",
    color: "#00b894",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Flexible Timings",
    desc: "Choose classes that suit your schedule.",
    color: "#6c5ce7",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "One-to-One Support",
    desc: "Personalized attention for every student.",
    color: "#e67e22",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    label: "Global Learning",
    desc: "Learn from anywhere in the world.",
    color: "#1a2e6e",
  },
];

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="home" style={{ paddingTop: 64, overflowX: "hidden" }}>
      {/* Main Hero */}
      <div style={{
        background: "linear-gradient(135deg, #f8faff 0%, #eef2ff 50%, #f0f9ff 100%)",
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background circles — clipped inside overflow:hidden parent */}
        <div style={{
          position: "absolute", top: -100, right: -100,
          width: 400, height: 400, borderRadius: "50%",
          background: "rgba(26,46,110,0.04)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -80, left: -80,
          width: 300, height: 300, borderRadius: "50%",
          background: "rgba(245,166,35,0.06)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 16px", width: "100%" }}>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>

            {/* Left Content */}
            <div className="animate-slideInLeft hero-text">
              <p style={{ color: "#f5a623", fontWeight: 600, fontSize: 14, marginBottom: 16, letterSpacing: "0.02em" }}>
                Connecting Students to Knowledge Worldwide.
              </p>
              <h1 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(28px, 5vw, 58px)",
                fontWeight: 800,
                lineHeight: 1.15,
                color: "#1a1a2e",
                marginBottom: 20,
              }}>
                Learn Anytime,<br />
                Anywhere —<br />
                <span style={{ color: "#1a2e6e" }}>Build a Brighter Future</span>
              </h1>
              <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.7, marginBottom: 32, maxWidth: 420 }}>
                Live online classes with expert teachers for Quran, English, Math, Science, GCSE &amp; NAPLAN.
              </p>

              {/* CTA Buttons */}
              <div className="hero-cta-row" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 36 }}>
                <a href="#contact" className="btn-primary" style={{ fontSize: 14, padding: "12px 22px" }}>
                  <Calendar size={16} />
                  Book Free Trial
                </a>
                <button onClick={() => setVideoOpen(true)} className="btn-outline" style={{ fontSize: 14, padding: "12px 22px", cursor: "pointer", border: "2px solid #1a2e6e", background: "transparent", color: "#1a2e6e", borderRadius: 10, fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
                  <Play size={16} fill="#1a2e6e" />
                  Start Learning
                </button>
                <a href="#courses" className="btn-outline" style={{ fontSize: 14, padding: "12px 22px" }}>
                  View Courses
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Social Proof */}
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ display: "flex" }}>
                  {avatars.map((avatar, i) => (
                    <div key={i} style={{
                      width: 38, height: 38, borderRadius: "50%",
                      border: "3px solid white",
                      marginLeft: i === 0 ? 0 : -10,
                      background: i % 2 === 0 ? "#eef2ff" : "#fef3c7",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 18,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    }}>
                      {avatar}
                    </div>
                  ))}
                  <div style={{
                    width: 38, height: 38, borderRadius: "50%",
                    border: "3px solid white",
                    marginLeft: -10,
                    background: "#f5a623",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700, fontSize: 11, color: "white",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}>500+</div>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#1a2e6e" }}>500+</div>
                  <div style={{ fontSize: 12, color: "#64748b" }}>Happy Students Worldwide</div>
                </div>
              </div>
            </div>

            {/* Right — Photo */}
            <div className="animate-slideInRight hero-illustration" style={{ position: "relative", display: "flex", justifyContent: "center" }}>
              <div style={{
                background: "white",
                borderRadius: 24,
                padding: 20,
                boxShadow: "0 20px 60px rgba(26,46,110,0.15)",
                position: "relative",
                width: "100%",
                maxWidth: 420,
              }}>
                <div style={{
                  background: "linear-gradient(135deg, #eef2ff, #dbeafe)",
                  borderRadius: 16,
                  height: 300,
                  width: "100%",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  <img
                    src="/hero-student.png"
                    alt="Student reading a book"
                    style={{
                      height: "100%", width: "100%",
                      objectFit: "cover",
                      objectPosition: "center top",
                      borderRadius: 16,
                    }}
                  />

                  <div className="animate-float badge-live" style={{
                    position: "absolute", top: 12, left: 12,
                    background: "#1a2e6e", color: "white",
                    borderRadius: 10, padding: "6px 10px",
                    fontSize: 10, fontWeight: 600,
                    boxShadow: "0 8px 20px rgba(26,46,110,0.3)",
                    display: "flex", alignItems: "center", gap: 6,
                    zIndex: 2,
                  }}>
                    <span className="live-dot" />
                    Live Interactive Classes
                  </div>

                  <div className="animate-float delay-300 badge-certified" style={{
                    position: "absolute", top: 12, right: 12,
                    background: "white",
                    borderRadius: 10, padding: "6px 10px",
                    fontSize: 10, fontWeight: 600, color: "#1a2e6e",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                    zIndex: 2,
                  }}>
                    🎓 Certified Teachers
                  </div>

                  <div className="animate-float delay-200 badge-countries" style={{
                    position: "absolute", bottom: 12, right: 12,
                    background: "white",
                    borderRadius: 10, padding: "6px 10px",
                    fontSize: 10, fontWeight: 600, color: "#1a2e6e",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                    zIndex: 2,
                  }}>
                    🌍 10+ Countries
                  </div>
                </div>
              </div>

              {/* Floating teacher card */}
              <div className="animate-float delay-100 badge-teacher" style={{
                position: "absolute",
                bottom: -16,
                left: 0,
                background: "white",
                borderRadius: 14,
                padding: "10px 14px",
                boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                display: "flex", alignItems: "center", gap: 8,
                zIndex: 2,
              }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#eef2ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
                  👩‍🏫
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#1a2e6e" }}>Expert Teacher</div>
                  <div style={{ fontSize: 10, color: "#64748b" }}>Let's learn together!</div>
                </div>
                <div style={{ width: 24, height: 24, background: "#1a2e6e", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21" /></svg>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Feature strips */}
      <div style={{ background: "white", padding: "28px 0", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
          <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
            {features.map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 6px" }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 10,
                  background: f.color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: `0 4px 12px ${f.color}40`,
                }}>
                  {f.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 12, color: "#1a2e6e", marginBottom: 2 }}>{f.label}</div>
                  <div style={{ fontSize: 11, color: "#64748b", lineHeight: 1.4 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats banner */}
      <div style={{ background: "#1a2e6e", padding: "36px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
          <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
            {[
              { icon: "🎓", number: "500+", label: "Happy Students Worldwide" },
              { icon: "📚", number: "50+", label: "Expert Teachers" },
              { icon: "📹", number: "100+", label: "Live Classes Every Month" },
              { icon: "🌐", number: "10+", label: "Countries Connected" },
            ].map((stat, i) => (
              <div key={i} style={{
                textAlign: "center",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.15)" : "none",
                padding: "0 8px",
              }} className="animate-countUp">
                <div style={{ fontSize: 24, marginBottom: 6 }}>{stat.icon}</div>
                <div style={{ fontSize: 26, fontWeight: 800, color: "white", marginBottom: 4, lineHeight: 1 }}>{stat.number}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", lineHeight: 1.4 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoOpen && (
        <div onClick={() => setVideoOpen(false)} style={{
          position: "fixed", inset: 0, zIndex: 9999,
          background: "rgba(0,0,0,0.8)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: 16,
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            position: "relative", width: "100%", maxWidth: 800,
            background: "#000", borderRadius: 16, overflow: "hidden",
          }}>
            <button onClick={() => setVideoOpen(false)} style={{
              position: "absolute", top: 8, right: 8, zIndex: 10,
              width: 36, height: 36, borderRadius: "50%",
              background: "rgba(0,0,0,0.6)", color: "white",
              border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <X size={18} />
            </button>
            <video controls autoPlay style={{ width: "100%", display: "block" }}>
              <source src="/intro-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .hero-illustration {
            order: -1;
            margin-bottom: 8px;
          }
          .hero-illustration > div {
            max-width: 100% !important;
          }
          .hero-text {
            order: 1;
          }
          .hero-cta-row {
            flex-direction: column !important;
          }
          .hero-cta-row a {
            width: 100% !important;
            justify-content: center !important;
          }
          .features-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .stats-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .stats-grid > div {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.15);
            padding: 16px 8px !important;
          }
          .stats-grid > div:nth-child(odd) {
            border-right: 1px solid rgba(255,255,255,0.15) !important;
          }
          .stats-grid > div:nth-last-child(-n+2) {
            border-bottom: none !important;
          }
          .badge-teacher {
            left: 8px !important;
            bottom: -8px !important;
          }
        }
        @media (max-width: 480px) {
          .features-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}