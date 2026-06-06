"use client";
import { useState } from "react";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: <Phone size={20} />,
    label: "Phone / WhatsApp",
    value: "+92 333-3993355",
    href: "tel:+923333993355",
    color: "#25d366",
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "universallink.co@gmail.com",
    href: "mailto:universallink.co@gmail.com",
    color: "#1a2e6e",
  },
  {
    icon: <Clock size={20} />,
    label: "Working Hours",
    value: "Mon–Fri: Regular\nSat–Sun: Special\n24/7 Support",
    href: null,
    color: "#6c5ce7",
  },
  {
    icon: <MapPin size={20} />,
    label: "Location",
    value: "Online — Worldwide",
    href: null,
    color: "#e67e22",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", course: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: "", email: "", phone: "", course: "", message: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" style={{ padding: "80px 0", background: "#f8fafc" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="section-badge">Contact Us</span>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 42px)", fontWeight: 800, color: "#1a2e6e", marginBottom: 12 }}>
            Book Your Free Trial Class
          </h2>
          <p style={{ fontSize: 15, color: "#64748b", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            Fill out the form below and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {/* Grid */}
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>

          {/* FORM */}
          <div style={{ background: "white", borderRadius: 20, padding: "28px 24px", boxShadow: "0 4px 24px rgba(26,46,110,0.08)" }}>
            {submitted && (
              <div style={{ background: "#e8fdf5", color: "#00b894", padding: "12px 16px", borderRadius: 10, marginBottom: 16, textAlign: "center" }}>
                ✅ Thank you! We&apos;ll get back to you within 24 hours.
              </div>
            )}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <input name="name" required placeholder="Full Name" onChange={handleChange} className="form-input" />
              <input name="email" required placeholder="Email" onChange={handleChange} className="form-input" />
              <input name="phone" required placeholder="Phone" onChange={handleChange} className="form-input" />
              <select name="course" required onChange={handleChange} className="form-input">
                <option value="">Select Course</option>
                <option>Quran</option>
                <option>English</option>
                <option>Science</option>
                <option>GCSE</option>
                <option>NAPLAN</option>
              </select>
              <textarea name="message" placeholder="Message (optional)" onChange={handleChange} className="form-input" style={{ minHeight: 100, resize: "vertical" }} />
              <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 4 }}>
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="contact-info-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {contactInfo.map((info, i) => (
                <div key={i} className="card-hover" style={{
                  background: "white", borderRadius: 14, padding: 16, border: "1px solid #e2e8f0",
                }}>
                  <div style={{
                    width: 40, height: 40, background: `${info.color}15`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    borderRadius: 10, marginBottom: 10, color: info.color,
                  }}>
                    {info.icon}
                  </div>
                  <div style={{ fontSize: 11, color: "#64748b", marginBottom: 4 }}>{info.label}</div>
                  {info.href ? (
                    <a href={info.href} style={{ fontWeight: 600, color: "#1a2e6e", fontSize: 13, textDecoration: "none", wordBreak: "break-all" }}>
                      {info.value}
                    </a>
                  ) : (
                    <div style={{ fontWeight: 600, fontSize: 13, color: "#1a2e6e", whiteSpace: "pre-line", lineHeight: 1.6 }}>
                      {info.value}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{
              background: "linear-gradient(135deg, #1a2e6e, #2a3f8f)",
              borderRadius: 16, padding: "24px 20px", color: "white",
            }}>
              <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Learn From Anywhere</h3>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", marginBottom: 16, lineHeight: 1.6 }}>
                Join students from 10+ countries. Start your journey today.
              </p>
              <a href="https://wa.me/923333993355" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-block",
                background: "#f5a623", padding: "10px 20px",
                borderRadius: 8, color: "white", textDecoration: "none",
                fontWeight: 600, fontSize: 14,
              }}>
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .contact-info-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 420px) {
          .contact-info-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}