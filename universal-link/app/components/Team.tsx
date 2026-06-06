"use client";

const team = [
  {
    name: "Asfand yar",
    role: "Chief Executive Officer",
    tag: "CEO",
    photo: "/ceo.png",
    color: "#1a2e6e",
    emoji: "👨‍💼",
  },
  {
    name: "shezail asad",
    role: "HR Manager",
    tag: "HR",
    photo: "/hr-manager.png",
    color: "#00b894",
    emoji: "👩‍💼",
  },
  {
    name: "Usman Tariq",
    role: "Digital Marketing Executive",
    tag: "DME",
    photo: "/digital-marketing.png",
    color: "#f5a623",
    emoji: "👨‍💻",
  },
];

export default function Team() {
  return (
    <section id="team" style={{ background: "#f8faff", padding: "80px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{ color: "#f5a623", fontWeight: 600, fontSize: 13, letterSpacing: "0.08em", marginBottom: 10, textTransform: "uppercase" }}>
            Meet The Team
          </p>
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 800,
            color: "#1a1a2e",
            marginBottom: 14,
            lineHeight: 1.2,
          }}>
            The People Behind{" "}
            <span style={{ color: "#1a2e6e" }}>Universal Link</span>
          </h2>
          <p style={{ fontSize: 15, color: "#64748b", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
            Dedicated professionals committed to delivering world-class online education.
          </p>
        </div>

        {/* Grid */}
        <div className="team-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 28,
          justifyItems: "center",
        }}>
          {team.map((member, i) => (
            <div
              key={i}
              className="team-card"
              style={{
                background: "white",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 4px 24px rgba(26,46,110,0.08)",
                width: "100%",
                maxWidth: 300,
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                cursor: "default",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 40px rgba(26,46,110,0.14)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(26,46,110,0.08)";
              }}
            >
              {/* Photo area */}
              <div style={{
                background: `linear-gradient(135deg, ${member.color}15, ${member.color}30)`,
                height: 220,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}>
                {/* Tag badge */}
                <div style={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  background: member.color,
                  color: "white",
                  fontSize: 10,
                  fontWeight: 700,
                  padding: "4px 10px",
                  borderRadius: 20,
                  letterSpacing: "0.06em",
                }}>
                  {member.tag}
                </div>

                {/* Photo */}
                <img
                  src={member.photo}
                  alt={member.role}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const parent = target.parentElement!;
                    const fallback = document.createElement("div");
                    fallback.style.cssText = `
                      width:90px;height:90px;border-radius:50%;
                      background:white;display:flex;align-items:center;
                      justify-content:center;font-size:44px;
                      box-shadow:0 8px 24px rgba(0,0,0,0.1);
                      margin-bottom:20px;
                    `;
                    fallback.textContent = member.emoji;
                    parent.appendChild(fallback);
                  }}
                />
              </div>

              {/* Info — name removed */}
              <div style={{ padding: "18px 20px 22px" }}>
                <h3 style={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: "#1a1a2e",
                  margin: "0 0 6px",
                  lineHeight: 1.25,
                }}>
                  {member.name}
                </h3>
                <div style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: member.color,
                  letterSpacing: "0.04em",
                }}>
                  {member.role}
                </div>

                {/* Divider */}
                <div style={{
                  marginTop: 12,
                  height: 3,
                  width: 36,
                  borderRadius: 4,
                  background: member.color,
                  opacity: 0.4,
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .team-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 16px !important;
          }
        }
        @media (max-width: 480px) {
          .team-grid {
            grid-template-columns: 1fr !important;
            max-width: 300px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
