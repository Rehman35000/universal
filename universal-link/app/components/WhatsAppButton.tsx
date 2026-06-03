"use client";
import { useState, useEffect } from "react";

const AUTO_MESSAGES = [
  "👋 Hi! Interested in free trial classes?",
  "📚 Ask us about Quran, Math & GCSE prep!",
  "🌍 Join 500+ students learning online!",
  "⏰ Flexible timings available — ask us!",
];

export default function WhatsAppButton() {
  const [showPopup, setShowPopup] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  // Show popup after 4 seconds
  useEffect(() => {
    const showTimer = setTimeout(() => {
      setVisible(true);
      setShowPopup(true);
    }, 4000);
    return () => clearTimeout(showTimer);
  }, []);

  // Rotate messages every 4 seconds while popup is open
  useEffect(() => {
    if (!showPopup) return;
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % AUTO_MESSAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [showPopup]);

  const waMessage = encodeURIComponent(
    "Hi! I'm interested in booking a free trial class. Can you share more details?"
  );

  return (
    <div style={{ position: "fixed", bottom: 24, right: 20, zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>

      {/* Popup bubble */}
      {showPopup && visible && (
        <div
          style={{
            background: "white",
            borderRadius: "16px 16px 4px 16px",
            padding: "12px 16px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
            maxWidth: 240,
            position: "relative",
            animation: "waFadeIn 0.3s ease",
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setShowPopup(false)}
            style={{
              position: "absolute",
              top: 6,
              right: 8,
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 16,
              color: "#94a3b8",
              lineHeight: 1,
              padding: 0,
            }}
          >
            ×
          </button>

          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <div style={{
              width: 32, height: 32, borderRadius: "50%",
              background: "#25d366",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 16, flexShrink: 0,
            }}>
              👩‍🏫
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#1a2e6e" }}>Universal Link Academy</div>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#25d366", display: "inline-block" }} />
                <span style={{ fontSize: 10, color: "#64748b" }}>Online now</span>
              </div>
            </div>
          </div>

          {/* Rotating message */}
          <div style={{
            fontSize: 13,
            color: "#334155",
            lineHeight: 1.5,
            background: "#f1f5f9",
            borderRadius: 10,
            padding: "8px 10px",
            marginBottom: 10,
            minHeight: 40,
            transition: "opacity 0.3s",
          }}>
            {AUTO_MESSAGES[msgIndex]}
          </div>

          {/* Quick reply buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {[
              { label: "📅 Book Free Trial", msg: "Hi! I'd like to book a free trial class." },
              { label: "📚 View Courses", msg: "Hi! Can you tell me about your courses?" },
              { label: "💰 Ask About Pricing", msg: "Hi! I'd like to know about your pricing plans." },
            ].map((item) => (
              <a
                key={item.label}
                href={`https://wa.me/923333993355?text=${encodeURIComponent(item.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  padding: "7px 10px",
                  background: "#f8faff",
                  border: "1px solid #e2e8f0",
                  borderRadius: 8,
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#1a2e6e",
                  textDecoration: "none",
                  textAlign: "center",
                  transition: "background 0.2s",
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Main WhatsApp button */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {/* Label (hidden on mobile) */}
        <a
          href={`https://wa.me/923333993355?text=${waMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="wa-label-btn"
          style={{
            background: "#25d366",
            color: "white",
            padding: "12px 20px",
            borderRadius: "50px",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: 14,
            boxShadow: "0 6px 24px rgba(37,211,102,0.45)",
            display: "flex",
            alignItems: "center",
            gap: 8,
            transition: "all 0.3s ease",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.121 1.535 5.857L.057 23.882a.5.5 0 0 0 .61.61l6.025-1.478A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.371l-.36-.214-3.724.913.932-3.614-.235-.374A9.817 9.817 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" />
          </svg>
          Chat on WhatsApp
        </a>

        {/* Toggle popup button */}
        <button
          onClick={() => setShowPopup((p) => !p)}
          style={{
            width: 52,
            height: 52,
            borderRadius: "50%",
            background: "#25d366",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 6px 24px rgba(37,211,102,0.45)",
            position: "relative",
            flexShrink: 0,
          }}
          aria-label="Toggle WhatsApp chat"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.121 1.535 5.857L.057 23.882a.5.5 0 0 0 .61.61l6.025-1.478A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.371l-.36-.214-3.724.913.932-3.614-.235-.374A9.817 9.817 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" />
          </svg>
          {/* Pulse ring */}
          <span style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "2px solid #25d366",
            animation: "waPulse 2s ease-out infinite",
          }} />
        </button>
      </div>

      <style>{`
        @keyframes waPulse {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes waFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 600px) {
          .wa-label-btn { display: none !important; }
        }
      `}</style>
    </div>
  );
}