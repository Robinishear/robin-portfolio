/** Dark warm-ember background, matching the skills board. */
export default function Background() {
  return (
    <div className="scene" aria-hidden="true">
      <div className="blob animate-float" style={{ left: "-6%", top: "-4%", width: 520, height: 320, opacity: 0.16 }} />
      <div
        className="blob animate-float"
        style={{ right: "-4%", top: "-2%", width: 460, height: 280, opacity: 0.12, background: "#fb923c", animationDelay: "-5s" }}
      />
      <div
        className="blob animate-float"
        style={{ left: "30%", top: "45%", width: 640, height: 300, opacity: 0.06, animationDelay: "-9s" }}
      />
      <div
        className="blob animate-float"
        style={{ right: "-6%", bottom: "-6%", width: 520, height: 340, opacity: 0.14, animationDelay: "-3s" }}
      />
      <div className="blob animate-float" style={{ left: "-4%", bottom: "-4%", width: 460, height: 260, opacity: 0.11, animationDelay: "-12s" }} />
      <div className="vignette" />
    </div>
  );
}
