import Navigation from "../components/Navigation";

export default function MainPage() {
  return (
    <div className="page">
      <Navigation />

      {/* Полоса на всю ширину */}
      <main className="heroStripe">
        {/* Контент по центру */}
        <section className="hero">
          {/* Левая часть */}
          <div className="heroLeft">
            <h1 className="main_title">
              Колледж <br />
              с добрым <br />
              сердцем!
            </h1>

            <a className="bth" href="#spec">
              Начать экскурсию
            </a>

            <div className="seti">
              <div className="bt">
                Подпишись <br />
                на наши соцсети
              </div>

              <div className="socialBtns">
                <a
                  className="socialBtn"
                  href="https://t.me"
                  target="_blank"
                  rel="noreferrer"
                >
                  TG
                </a>

                <a
                  className="socialBtn"
                  href="https://vk.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  VK
                </a>
              </div>
            </div>
          </div>

          {/* Правая часть — место под изображение */}
          <div className="heroRight">
            <div className="imagePlaceholder">
              Место для фото
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}