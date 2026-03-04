import styles from "./Footer.module.css";
import logo from "../assets/logo.png";
import tgIcon from "../assets/tg.svg";
import vkIcon from "../assets/vk.svg";

const COLLEGE_LINKS = [
  { label: "Центр программирования и безопасности", href: "https://vk.com/progsec" },
  { label: "Центр городских технологий", href: "https://vk.com/urbantec" },
  { label: "Центр IT.Бирюлево", href: "https://vk.com/itbiryulevo" },
  { label: "Дизайн колледж", href: "https://vk.com/dsgncollege" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <img className={styles.logo} src={logo} alt="IT.МОСКВА" />

            <p className={styles.subtext}>
              Государственное бюджетное профессиональное
              <br />
              образовательное учреждение города Москвы «IT.МОСКВА»
            </p>

            <div className={styles.socials}>
              <a
                className={styles.socialBtn}
                href="https://vk.com"
                target="_blank"
                rel="noreferrer"
                aria-label="VK"
              >
                <img src={vkIcon} alt="VK" />
              </a>

              <a
                className={styles.socialBtn}
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
              >
                <img src={tgIcon} alt="Telegram" />
              </a>
            </div>
          </div>

          <div className={styles.cols}>
            <div className={styles.col}>
              <div className={styles.colTitle}>Колледж</div>
              <ul className={styles.list}>
                {COLLEGE_LINKS.map((x) => (
                  <li key={x.label}>
                    <a className={styles.link} href={x.href}>
                      {x.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.col}>
              <div className={styles.colTitle}>Контакты</div>

              <div className={styles.contactBlock}>
                <div className={styles.contactTitle}>
                  Адреса и контакты приемной комиссии
                </div>

                <div className={styles.contactText}>
                  Многоканальный телефон и электронный адрес
                </div>

                <a className={styles.contactLink} href="tel:+74996121498">
                  +7 (499) 612-14-98
                </a>

                <a
                  className={styles.contactLink}
                  href="mailto:priem@itmoscow.pro"
                >
                  priem@itmoscow.pro
                </a>

                <div className={styles.contactTitle}>График работы</div>

                <div className={styles.contactText}>
                  ПН – ПТ: 09:00 – 18:00
                  <br />
                  СБ – ВС: ВЫХОДНОЙ
                </div>

                <div className={styles.contactTitleф}>
                  Центр программирования и кибербезопасности
                </div>

                <div className={styles.contactText}>
                  г. Москва, ул. Академика Миллионщикова, д.20
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <div className={styles.copy}>©2026 ГБПОУ IT.МОСКВА</div>
          <div className={styles.rightText}>
            Разработка и дизайн - Студенты колледжа IT.МОСКВЫ
          </div>
        </div>
      </div>
    </footer>
  );
}