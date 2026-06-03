"use client";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Fatima Al-Rashid",
    role: "Quran Student",
    country: "🇸🇦 Saudi Arabia",
    emoji: "👩‍🎓",
    text: "Alhamdulillah! My child has improved so much in Quran recitation. The teacher is very patient, knowledgeable and makes every class engaging. Highly recommend Universal Link!",
    rating: 5,
    course: "Quran Education",
  },
  {
    name: "Ahmed Hassan",
    role: "GCSE Student",
    country: "🇬🇧 United Kingdom",
    emoji: "👨‍🎓",
    text: "The GCSE preparation classes are excellent! My grades improved from C to A in just 3 months. The teachers explain concepts very clearly and provide great study materials.",
    rating: 5,
    course: "GCSE Prep",
  },
  {
    name: "Sarah Mitchell",
    role: "Parent",
    country: "🇦🇺 Australia",
    emoji: "👩",
    text: "My daughter's English has improved dramatically. The flexible timing works perfectly for us in Australia. The teachers are professional and very caring about student progress.",
    rating: 5,
    course: "English Language",
  },
  {
    name: "Muhammad Ali",
    role: "Science Student",
    country: "🇵🇰 Pakistan",
    emoji: "👦",
    text: "Best online academy for sciences! The Physics and Chemistry classes are very interactive. I finally understand concepts I was struggling with for months. Thank you Universal Link!",
    rating: 5,
    course: "Sciences & Maths",
  },
  {
    name: "Aisha Rahman",
    role: "Parent",
    country: "🇺🇸 United States",
    emoji: "👩‍🦱",
    text: "We were looking for online Quran classes for our children and Universal Link exceeded our expectations. The teachers are certified Huffaz and very professional. 5 stars!",
    rating: 5,
    course: "Quran Education",
  },
  {
    name: "James Thompson",
    role: "NAPLAN Student",
    country: "🇦🇺 Australia",
    emoji: "👦‍🦰",
    text: "Amazing NAPLAN preparation! The practice tests and personalized feedback helped me score in the top 10%. The teachers truly care about student success.",
    rating: 5,
    course: "NAPLAN Prep",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "96px 0", background: "white" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-badge">Testimonials</span>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 800,
            color: "#1a2e6e",
            marginBottom: 16,
          }}>
            What Our Students Say
          </h2>
          <p style={{ fontSize: 16, color: "#64748b", maxWidth: 520, margin: "0 auto" }}>
            Real experiences from students and parents across the globe who have transformed their learning journey.
          </p>
          {/* Stars */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 6, marginTop: 20 }}>
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={20} color="#f5a623" fill="#f5a623" />
            ))}
            <span style={{ marginLeft: 8, fontWeight: 700, color: "#1a2e6e", fontSize: 16 }}>5.0</span>
            <span style={{ color: "#64748b", fontSize: 14 }}>Average Rating</span>
          </div>
        </div>

        {/* Cards */}
        <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="card-hover"
              style={{
                background: i % 3 === 0 ? "linear-gradient(135deg, #eef2ff, #e0e7ff)" : "white",
                border: "1px solid #e2e8f0",
                borderRadius: 20,
                padding: 28,
                boxShadow: "0 4px 16px rgba(26,46,110,0.06)",
              }}
            >
              {/* Quote icon */}
              <div style={{ marginBottom: 16 }}>
                <Quote size={28} color="#1a2e6e" style={{ opacity: 0.2 }} />
              </div>

              <p style={{ color: "#374151", fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>
                {t.text}
              </p>

              {/* Stars */}
              <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
                {[1,2,3,4,5].map(s => (
                  <Star key={s} size={14} color="#f5a623" fill="#f5a623" />
                ))}
              </div>

              {/* Profile */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: "#eef2ff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 22,
                    border: "2px solid #c7d2fe",
                  }}>
                    {t.emoji}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#1a2e6e" }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "#64748b" }}>{t.role} · {t.country}</div>
                  </div>
                </div>
                <span style={{
                  background: "#1a2e6e",
                  color: "white",
                  fontSize: 10, fontWeight: 600,
                  padding: "3px 8px", borderRadius: 20,
                  letterSpacing: "0.04em",
                }}>
                  {t.course}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
        @media (max-width: 480px) {
          #testimonials {
            padding: 64px 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
