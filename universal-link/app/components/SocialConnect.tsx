"use client";

const socials = [
  {
    name: "WhatsApp",
    emoji: "💬",
    color: "#25d366",
    shadow: "rgba(37,211,102,0.35)",
    href: "https://whatsapp.com/channel/0029VbCjjwmCMY09BY3ABO1T",
    desc: "Join our channel",
    cta: "Join Channel",
  },
  {
    name: "YouTube",
    emoji: "▶️",
    color: "#ff0000",
    shadow: "rgba(255,0,0,0.3)",
    href: "https://youtube.com/@universallinkonlineeducation",
    desc: "Free edu videos",
    cta: "Subscribe",
  },
  {
    name: "TikTok",
    emoji: "🎵",
    color: "#010101",
    shadow: "rgba(0,0,0,0.25)",
    href: "https://www.tiktok.com/@universal.link3",
    desc: "Short tips & clips",
    cta: "Follow",
  },
  {
    name: "Snapchat",
    emoji: "👻",
    color: "#f7c600",
    shadow: "rgba(247,198,0,0.4)",
    href: "https://www.snapchat.com/add/universallink26",
    desc: "Add us on Snap",
    cta: "Add Friend",
  },
  {
    name: "Facebook",
    emoji: "👍",
    color: "#1877f2",
    shadow: "rgba(24,119,242,0.35)",
    href: "https://www.facebook.com/share/1LTRJtsD5C/",
    desc: "Like our page",
    cta: "Follow Page",
  },
  {
    name: "MS Teams",
    emoji: "🟦",
    color: "#5b5ea6",
    shadow: "rgba(91,94,166,0.35)",
    href: "https://www.microsoft.com/en-us/microsoft-teams/download-app",
    desc: "Join our classes",
    cta: "Download",
  },
];

export default function SocialConnect() {
  return (
    <section id="social" style={{ padding: "88px 0", background: "white", overflow: "hidden" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="section-badge">Stay Connected</span>
          <h2 style={{
            fontSize: "clamp(24px, 3.5vw, 38px)",
            fontWeight: 800,
            color: "#1a2e6e",
            marginBottom: 12,
            lineHeight: 1.2,
          }}>
            Follow Us on Social Media
          </h2>
          <p style={{ color: "#64748b", fontSize: 15, maxWidth: 440, margin: "0 auto", lineHeight: 1.7 }}>
            Stay updated with our latest classes, tips, and announcements.
          </p>
        </div>

        {/* Circle cards row */}
        <div className="social-row" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          gap: 20,
          flexWrap: "wrap",
        }}>
          {socials.map((s, i) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textDecoration: "none",
                width: 160,
                padding: "28px 12px 24px",
                borderRadius: 24,
                background: "#f8faff",
                border: "1.5px solid #e8edf8",
                transition: "transform 0.28s cubic-bezier(.34,1.56,.64,1), box-shadow 0.28s ease",
                animationDelay: `${i * 0.07}s`,
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.transform = "translateY(-10px) scale(1.04)";
                el.style.boxShadow = `0 20px 48px ${s.shadow}`;
                el.style.borderColor = s.color + "60";
                el.style.background = "white";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.transform = "translateY(0) scale(1)";
                el.style.boxShadow = "none";
                el.style.borderColor = "#e8edf8";
                el.style.background = "#f8faff";
              }}
            >
              {/* Circle icon */}
              <div style={{
                width: 76,
                height: 76,
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${s.color}22, ${s.color}44)`,
                border: `3px solid ${s.color}55`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 32,
                marginBottom: 16,
                boxShadow: `0 8px 24px ${s.shadow}`,
                position: "relative",
              }}>
                {s.emoji}
                {/* Outer ring */}
                <div style={{
                  position: "absolute",
                  inset: -6,
                  borderRadius: "50%",
                  border: `2px dashed ${s.color}30`,
                  pointerEvents: "none",
                }} />
              </div>

              {/* Name */}
              <div style={{
                fontWeight: 700,
                fontSize: 15,
                color: "#1a2e6e",
                marginBottom: 4,
                textAlign: "center",
              }}>
                {s.name}
              </div>

              {/* Desc */}
              <div style={{
                fontSize: 12,
                color: "#94a3b8",
                marginBottom: 14,
                textAlign: "center",
                lineHeight: 1.4,
              }}>
                {s.desc}
              </div>

              {/* CTA pill */}
              <span style={{
                background: s.color === "#f7c600" ? "#1a2e6e" : s.color === "#010101" ? "#333" : s.color,
                color: "white",
                padding: "6px 16px",
                borderRadius: 50,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.02em",
                whiteSpace: "nowrap",
              }}>
                {s.cta}
              </span>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .social-card {
          cursor: pointer;
        }
        @media (max-width: 600px) {
          .social-row {
            gap: 12px !important;
          }
          .social-card {
            width: calc(50% - 8px) !important;
            padding: 20px 8px 18px !important;
          }
        }
        @media (max-width: 360px) {
          .social-card {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}