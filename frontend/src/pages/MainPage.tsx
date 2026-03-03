import Navigation from "../components/Navigation";
import robotImg from "../assets/evaziz.png";
import tgIcon from "../assets/tg.svg";
import vkIcon from "../assets/vk.svg";

export default function MainPage() {
  return (
    <div>
      <Navigation />

      <main className="heroStripe">
        <section className="heroWrap">
          {/* LEFT */}
          <div className="heroLeft">
            <h1 className="main_title main_titleGradient">
              Колледж <br />
              с добрым <br />
              сердцем!
            </h1>

            <a className="bth" href="#spec">
              Начать экскурсию
            </a>

            {/* SOCIAL */}
            <div className="seti">
              <div className="bt">
                Подпишись <br />
                на наши соцсети
              </div>

              <div className="socialBtns">
                <a
                  className="socialIconBtn"
                  href="https://t.me"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram"
                >
                  <img src={tgIcon} alt="Telegram" />
                </a>

                <a
                  className="socialIconBtn"
                  href="https://vk.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="VK"
                >
                  <img src={vkIcon} alt="VK" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="heroRight">
            <img className="heroArt" src={robotImg} alt="" />
          </div>
        </section>
      </main>
    </div>
  );
}