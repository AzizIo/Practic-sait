import Navigation from "../components/Navigation";
import robotImg from "../assets/evaziz.png";
import tgIcon from "../assets/tg.svg";
import vkIcon from "../assets/vk.svg";

export default function MainPage() {
  return (
    <div>
      <Navigation />

      <main
        style={{
          background: "#F3F2F2",
          width: "100%",
          minHeight: "calc(100vh - 90px)", 
          display: "flex",
          alignItems: "center",
        }}
      >
        <section
          style={{
            width: "min(1200px, 100%)",
            margin: "0 auto",
            padding: "40px 24px",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {/* LEFT */}
          <div style={{ maxWidth: 620 }}>
            <h1
              style={{
                margin: "0 0 26px",
                fontSize: 110,
                lineHeight: 0.95,
                fontWeight: 900,
                letterSpacing: "-0.02em",

                background:
                  "linear-gradient(90deg, #111827 0%, #1D4ED8 60%, #2563EB 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Колледж <br />
              с добрым <br />
              сердцем!
            </h1>

            <a
              href="#spec"
              style={{
                display: "inline-block",
                padding: "22px 56px",
                borderRadius: 999,
                textDecoration: "none",
                color: "#fff",
                fontSize: 24,
                fontWeight: 800,
                background: "linear-gradient(90deg, #020039, #362fff)",
              }}
            >
              Начать экскурсию
            </a>

            {/* SOCIAL (как в макете) */}
            <div
              style={{
                marginTop: 30,
                width: "min(560px, 100%)",
                padding: "22px 22px",
                borderRadius: 18,
                background: "linear-gradient(135deg, #db4500, #ff5a2f)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 20,
                color: "#fff",
                boxShadow: "0 12px 26px rgba(219, 69, 0, 0.35)",
              }}
            >
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  lineHeight: 1.15,
                }}
              >
                Подпишись <br />
                на наши соцсети
              </div>

              <div style={{ display: "flex", gap: 14 }}>
                <a
                  className="socialIconBtn"
                  href="https://t.me"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram"
                  style={{
                    display: "grid",
                    placeItems: "center",
                    width: 64,
                    height: 64,
                    borderRadius: 16,
                    background: "#fff",
                    textDecoration: "none",
                  }}
                >
                  <img
                    src={tgIcon}
                    alt="Telegram"
                    style={{ width: 34, height: 34, display: "block" }}
                  />
                </a>

                <a
                  className="socialIconBtn"
                  href="https://vk.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="VK"
                  style={{
                    display: "grid",
                    placeItems: "center",
                    width: 64,
                    height: 64,
                    borderRadius: 16,
                    background: "#fff",
                    textDecoration: "none",
                  }}
                >
                  <img
                    src={vkIcon}
                    alt="VK"
                    style={{ width: 36, height: 36, display: "block" }}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={robotImg}
              alt=""
              style={{ width: "min(520px, 100%)", height: "auto" }}
            />
          </div>
        </section>
      </main>
    </div>
  );
}