import Navigation from "../components/Navigation";

export default function MainPage() {
  return (
    <>
      <Navigation />
      <main className="container">
        <h1 className="main_title">
          Колледж <br />
          с добрым <br />
          сердцем!
        </h1>

        <div className="start_bth">
          <a className="bth" href="#spec">
            Хочу поступить
          </a>
        </div>

        <div className="soc_seti">
          <div className="seti">
            <div className="bt">
              Подпишись <br /> на наши соцсети
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <a className="navs" href="https://t.me" target="_blank" rel="noreferrer">
                TG
              </a>
              <a className="navs" href="https://vk.com" target="_blank" rel="noreferrer">
                VK
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}