import { useMemo, useState } from "react";
import Navigation from "../components/Navigation";
import styles from "./gallery.module.css";

type Category = "all" | "study" | "hackathon" | "event";

type Item = {
  id: string;
  title: string;
  category: Exclude<Category, "all">;
};

const TABS: { key: Category; label: string }[] = [
  { key: "all", label: "Все" },
  { key: "study", label: "Учёба" },
  { key: "hackathon", label: "Хакатон" },
  { key: "event", label: "Мероприятие" },
];

const MOCK: Item[] = [
  { id: "1", title: "Описание изображения 1", category: "study" },
  { id: "2", title: "Описание изображения 2", category: "hackathon" },
  { id: "3", title: "Описание изображения 3", category: "event" },
  { id: "4", title: "Описание изображения 4", category: "study" },
  { id: "5", title: "Описание изображения 5", category: "event" },
  { id: "6", title: "Описание изображения 6", category: "hackathon" },
];

export default function GalleryPage() {
  const [active, setActive] = useState<Category>("all");

  const items = useMemo(() => {
    if (active === "all") return MOCK;
    return MOCK.filter((x) => x.category === active);
  }, [active]);

  return (
    <div className={styles.page}>
      <Navigation />

      <main className={styles.container}>
        <h1 className={styles.title}>Галерея</h1>

        <div className={styles.tabs} role="tablist" aria-label="Фильтр галереи">
          {TABS.map((t) => (
            <button
              key={t.key}
              type="button"
              role="tab"
              aria-selected={active === t.key}
              className={`${styles.tab} ${active === t.key ? styles.tabActive : ""}`}
              onClick={() => setActive(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <section className={styles.grid} aria-label="Галерея изображений">
          {items.map((it) => (
            <article key={it.id} className={styles.card}>
              <div className={styles.img} aria-label={it.title}>
                <span className={styles.imgText}>Фото</span>
              </div>

              <div className={styles.caption}>{it.title}</div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}