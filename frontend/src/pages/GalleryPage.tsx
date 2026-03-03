import Navigation from "../components/Navigation";
import styles from "./gallery.module.css";

import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.png";
import g5 from "../assets/g5.png";
import g6 from "../assets/g6.png";

type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  caption: string;
};

const ITEMS: GalleryItem[] = [
  { id: "1", src: g1, alt: "IT.Москва", caption: "Вход в кампус IT.МОСКВА" },
  { id: "2", src: g2, alt: "Сцена", caption: "Мероприятие и выступления" },
  { id: "3", src: g3, alt: "Новый год", caption: "Праздничная атмосфера" },
  { id: "4", src: g4, alt: "Граффити", caption: "Креативная среда" },
  { id: "5", src: g5, alt: "Команда", caption: "Командные проекты и хакатоны" },
  { id: "6", src: g6, alt: "Спикер", caption: "Лекции и мастер-классы" },
];

export default function GalleryPage() {
  return (
    <div className={styles.page}>
      <Navigation />

      <main className={styles.main}>
        <section className={styles.wrap}>
          <h1 className={styles.title}>Галерея</h1>

          <div className={styles.card}>
            <div className={styles.grid}>
              {ITEMS.map((item) => (
                <figure key={item.id} className={styles.item}>
                  <img className={styles.img} src={item.src} alt={item.alt} />
                  <figcaption className={styles.caption}>
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}