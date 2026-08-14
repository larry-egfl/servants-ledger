import { ImageResponse } from "next/og";

export const alt = "The Servant's Ledger — Servant of the Lake Guide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", background: "#e7dfc9", color: "#24251e", padding: 70, position: "relative", fontFamily: "Georgia" }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "72%", borderLeft: "10px solid #7e2e2d", paddingLeft: 42 }}>
        <div style={{ fontFamily: "Arial", letterSpacing: 5, fontSize: 20, color: "#7e2e2d" }}>INDEPENDENT FIELD GUIDE · 2026</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 82, lineHeight: 1 }}>
            <span>The Servant’s</span><span>Ledger</span>
          </div>
          <div style={{ fontFamily: "Arial", fontSize: 29, marginTop: 24 }}>Walkthroughs, puzzle answers &amp; verified notes</div>
        </div>
        <div style={{ fontFamily: "Arial", fontSize: 20 }}>SERVANT OF THE LAKE</div>
      </div>
      <div style={{ position: "absolute", right: 70, top: 70, bottom: 70, width: 220, border: "4px solid #24251e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 96, background: "#a6a27c" }}>13</div>
    </div>,
    size,
  );
}
