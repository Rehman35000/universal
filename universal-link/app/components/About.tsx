"use client";
import { CheckCircle, ArrowRight } from "lucide-react";

const features = [
  "Expert-certified teachers with years of experience",
  "Live interactive one-on-one and group sessions",
  "Flexible scheduling to fit any timezone",
  "Affordable pricing with no hidden fees",
  "Free trial class for every new student",
  "Regular progress reports for parents",
];

const steps = [
  {
    num: "01",
    title: "Book Free Trial",
    desc: "Fill out our contact form and schedule your free trial class.",
    color: "#1a2e6e",
  },
  {
    num: "02",
    title: "Meet Your Teacher",
    desc: "Get matched with a certified teacher suited to your needs.",
    color: "#00b894",
  },
  {
    num: "03",
    title: "Start Learning",
    desc: "Attend live classes and begin your learning journey.",
    color: "#6c5ce7",
  },
  {
    num: "04",
    title: "Track Progress",
    desc: "Receive regular updates and improve step by step.",
    color: "#f5a623",
  },
];

export default function About() {
  return (
    <>
      {/* About Section */}
      <section id="about" style={{ padding: "72px 0", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
          <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>

            {/* Left */}
            <div>
              <span className="section-badge">About Us</span>
              <h2 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(24px, 3.5vw, 40px)",
                fontWeight: 800,
                color: "#1a2e6e",
                marginBottom: 20,
                lineHeight: 1.2,
              }}>
                Empowering Students Across the Globe
              </h2>
              <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.8, marginBottom: 20 }}>
                Universal Link Online Academy connects students worldwide with highly qualified, experienced teachers. We believe quality education should be accessible to every student regardless of location.
              </p>
              <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.8, marginBottom: 32 }}>
                Founded with a passion for education, we offer live online classes in Quran, English, Sciences, and exam preparation — all from the comfort of your home.
              </p>

              <div className="features-check-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 36 }}>
                {features.map((f, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#374151" }}>
                    <CheckCircle size={16} color="#1a2e6e" style={{ flexShrink: 0, marginTop: 2 }} />
                    {f}
                  </div>
                ))}
              </div>

              <a href="#contact" className="btn-primary">
                Get Started Today <ArrowRight size={16} />
              </a>
            </div>

            {/* Right — Visual */}
            <div style={{ position: "relative" }}>
              <div className="mission-card" style={{
                background: "linear-gradient(135deg, #1a2e6e, #2a3f8f)",
                borderRadius: 24,
                padding: 32,
                color: "white",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", top: -40, right: -40,
                  width: 200, height: 200, borderRadius: "50%",
                  border: "2px solid rgba(255,255,255,0.1)",
                }} />
                <div style={{
                  position: "absolute", top: 20, right: 20,
                  width: 100, height: 100, borderRadius: "50%",
                  border: "2px solid rgba(255,255,255,0.08)",
                }} />

                <div style={{ fontSize: 36, marginBottom: 16 }}>🌟</div>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 10 }}>Our Mission</h3>
                <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7, fontSize: 14 }}>
                  To provide world-class online education that bridges the gap between students and expert teachers, making quality learning accessible from anywhere in the world.
                </p>

                <div className="mission-stats-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 28 }}>
                  {[
                    { num: "500+", label: "Students" },
                    { num: "50+", label: "Teachers" },
                    { num: "10+", label: "Countries" },
                    { num: "5★", label: "Rating" },
                  ].map((s, i) => (
                    <div key={i} style={{
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: 12, padding: "14px",
                      textAlign: "center",
                    }}>
                      <div style={{ fontSize: 22, fontWeight: 800, color: "#f5a623" }}>{s.num}</div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" style={{ padding: "72px 0", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-badge">How It Works</span>
            <h2 style={{
              fontSize: "clamp(24px, 4vw, 42px)",
              fontWeight: 800,
              color: "#1a2e6e",
              marginBottom: 14,
            }}>
              Start Learning in 4 Simple Steps
            </h2>
            <p style={{ fontSize: 15, color: "#64748b", maxWidth: 500, margin: "0 auto" }}>
              Getting started is easy. Book your free trial and begin your learning journey today.
            </p>
          </div>

          <div className="steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {steps.map((step, i) => (
              <div
                key={i}
                className="card-hover"
                style={{
                  background: "white",
                  borderRadius: 20,
                  padding: 28,
                  boxShadow: "0 4px 20px rgba(26,46,110,0.07)",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <div style={{
                  width: 56, height: 56, borderRadius: "50%",
                  background: `${step.color}15`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 16px",
                  border: `2px solid ${step.color}30`,
                }}>
                  <span style={{ fontSize: 18, fontWeight: 800, color: step.color }}>{step.num}</span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a2e", marginBottom: 8 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{
        background: "linear-gradient(135deg, #1a2e6e 0%, #2a3f8f 100%)",
        padding: "64px 16px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ fontSize: 44, marginBottom: 16 }}>🚀</div>
          <h2 style={{
            fontSize: "clamp(22px, 3.5vw, 38px)",
            fontWeight: 800,
            color: "white",
            marginBottom: 14,
          }}>
            Ready to Start Your Learning Journey?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>
            Join 500+ students already learning with Universal Link. Book your free trial class today — no commitment required.
          </p>
          <a href="#contact" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#f5a623", color: "white",
            padding: "14px 32px", borderRadius: 10,
            fontSize: 15, fontWeight: 700, textDecoration: "none",
            transition: "all 0.3s ease",
            boxShadow: "0 8px 24px rgba(245,166,35,0.4)",
          }}>
            Book Free Trial Now <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .features-check-grid {
            grid-template-columns: 1fr !important;
          }
          .steps-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 14px !important;
          }
        }
        @media (max-width: 560px) {
          .mission-stats-grid {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }
        }
        @media (max-width: 480px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
          }
          .mission-card {
            padding: 24px 20px !important;
          }
        }
      `}</style>
    </>
  );
}