import { useMemo, useState, useEffect, useRef } from "react";
import Navigation from "../components/Navigation";
import styles from "./CentersPage.module.css";

type Program = {
  title: string;
  budget?: string;
  paid?: string;
};

type Center = {
  id: string;
  name: string;
  programs: Program[];
};

export default function CentersPage() {
  const centers: Center[] = useMemo(
    () => [
      {
        id: "prog-cyber",
        name: "Центр программирования и кибербезопасности",
        programs: [
          {
            title: "Информационные системы и программирование",
            budget: "Бюджетных мест: 480",
            paid: "Внебюджетных мест: 240 (от 137 092 в год)",
          },
          {
            title:
              "Обеспечение информационной безопасности автоматизированных систем",
            budget: "Бюджетных мест: 180",
            paid: "Внебюджетных мест: 120 (от 141 700 в год)",
          },
          { title: "Веб-разработка", budget: "Бюджетных мест: 60" },
          {
            title:
              "Разработка компьютерных игр, дополненной виртуальной реальности",
            budget: "Бюджетных мест: 90",
          },
        ],
      },
      {
        id: "city-tech",
        name: "Центр городских технологий",
        programs: [
          {
            title: "сетевое и системное администрирование",
            budget: "Бюджетных мест: 120",
            paid: "Внебюджетных мест: 30",
          },
          {
            title: "мастер вертикального транспорта",
            budget: "Бюджетных мест: 120",
            paid: "Внебюджетных мест: 30",
          },
          {
            title: "компьютерные системы и комплексы",
            budget: "Бюджетных мест: 120",
            paid: "Внебюджетных мест: 30",
          },
          {
            title: "интеллектуальные интегрированные системы",
            budget: "Бюджетных мест: 30",
          },
        ],
      },
      {
        id: "it-biryulevo",
        name: "Центр IT.Бирюлево",
        programs: [
          {
            title: "Информационные системы и программирование",
            budget: "Бюджетных мест: 480",
            paid: "Внебюджетных мест: 240 (от 137 092 в год)",
          },
          {
            title:
              "Обеспечение информационной безопасности автоматизированных систем",
            budget: "Бюджетных мест: 180",
            paid: "Внебюджетных мест: 120 (от 141 700 в год)",
          },
        ],
      },
      {
        id: "design",
        name: "Дизайн колледж",
        programs: [
          { title: "Графический дизайнер", budget: "Бюджетных мест: 360" },
          { title: "Веб-дизайн", budget: "Бюджетных мест: 120" },
        ],
      },
    ],
    []
  );

  const [activeId, setActiveId] = useState<string | null>(null);
  const activeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (activeId && activeRef.current) {
      activeRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [activeId]);

  return (
    <div className={styles.page}>
      <Navigation />

      <main className={styles.main}>
        <section className={styles.card}>
          <h1 className={styles.title}>Наши центры</h1>

          <div className={styles.list}>
            {centers.map((c, idx) => {
              const isActive = c.id === activeId;
              const isLast = idx === centers.length - 1;

              return (
                <div
                  key={c.id}
                  ref={isActive ? activeRef : null}
                  className={styles.item}
                >
                  <button
                    type="button"
                    className={`${styles.row} ${
                      isLast ? styles.lastRow : ""
                    } ${isActive ? styles.rowActive : ""}`}
                    onClick={() => setActiveId(isActive ? null : c.id)}
                  >
                    <span className={styles.rowText}>{c.name}</span>

                    <span
                      className={`${styles.arrow} ${
                        isActive ? styles.arrowOpen : ""
                      }`}
                      aria-hidden
                    >
                      {isActive ? "↓" : "↗"}
                    </span>
                  </button>

                  {/* Drawer всегда в DOM -> закрытие плавное */}
                  <div
                    className={`${styles.drawer} ${
                      isActive ? styles.drawerOpen : ""
                    }`}
                    aria-hidden={!isActive}
                  >
                    <div className={styles.drawerInner}>
                      <div className={styles.programList}>
                        {c.programs.map((p) => (
                          <div key={p.title} className={styles.program}>
                            <div className={styles.programTitle}>{p.title}</div>

                            <div className={styles.programMeta}>
                              {p.budget && <div>{p.budget}</div>}
                              {p.paid && <div>{p.paid}</div>}
                            </div>

                            <div className={styles.programLine} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}