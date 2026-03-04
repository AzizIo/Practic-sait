import styles from './Whyus.module.css'
import Navigation from '../components/Navigation'
import { useState } from 'react';



export default function WhyUs() {
    const advantages = [
        {
            id: 1,
            title: "Центр карьеры и развития ",
            short: "123",
            content: "1"

        },
        {
            id: 2,
            title: "Современные лаборатории",
            short: "Новейшее оборудование и ПО",
            content: `      
        2
        2
        2
        2
    `
        },
        {
            id: 3,
            title: "Будь среди первых",
            short: "Конкурсы и хакатоны",
            content: `
        3
        3
        3
    `
        },
        {
            id: 4,
            title: "Будь среди первых",
            short: "Конкурсы и хакатоны",
            content: `
        4
        4
        4
    `
        }
    ]
    const [activeId, setActiveId] = useState(2);
    const activeItem = advantages.find(item => item.id === activeId)
    return (
        <>
            <Navigation />
            <div className={styles.section1}>
                <div className={styles.c}>
                    <div className={styles.container}>
                        <div className={styles.us}>
                            Почему именно IT.Москва?
                        </div>
                        <p className={styles.p1} >
                            <span className={styles.p} >IT МОСКВА</span> — Твой апгрейд из студента в профи.<br />Здесь ты получишь не просто «корочку», а востребованную <br /> профессию, окружение единомышленников и прямой выход на <br /> работодателей Москвы.
                        </p>

                    </div>
                    <div className={styles.card_block}>
                        <div className={styles.block}>
                            <h2 className={styles.num}>100%</h2>
                            <p className={styles.text}>
                                ГАРАНТИЯ:<br />
                                Государственный диплом<br />
                                и отсрочка от армии.<br />
                            </p>
                        </div>
                        <div className={styles.block}>
                            <h2 className={styles.num}>70%</h2>
                            <p className={styles.text}>
                                ПРАКТИКИ:<br />
                                Минимум теории, максимум работы<br />
                                в лабораториях и мастерских.<br />
                            </p>
                        </div>
                        <div className={styles.block}>
                            <h2 className={styles.num}>15+</h2>
                            <p className={styles.text}>
                                ПАРТНЕРОВ:<br />
                                Прямые связи и отсрочка от армии<br />
                                с ведущими IT-компаниями<br />
                                и госсектором.<br />
                            </p>
                        </div>
                        <div className={styles.block}>
                            <h2 className={styles.num}>вТОП-10</h2>
                            <p className={styles.text}>
                                Входим в рейтинги лучших<br />
                                колледжей Москвы по качеству<br />
                                подготовки.<br />
                            </p>
                        </div>
                        <div className={styles.block}>
                            <h2 className={styles.num}>10+</h2>
                            <p className={styles.text}>
                                Кружков:<br />
                                Развивайся не только в коде.<br />
                            </p>
                        </div>
                        <div className={styles.block}>
                            <h2 className={styles.num}>30+</h2>
                            <p className={styles.text}>
                                Побед на федеральном уровне<br />
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.section1}>
                <div className={styles.z}>
                    <div className={styles.container}>
                        <div className={styles.header}>
                            Подробнее о наших преимуществах
                        </div>
                        <div className={styles.buttons}>
                            <div onClick={() => setActiveId(1)} className={styles.b1}>Трудоустройство</div>
                            <div onClick={() => setActiveId(2)} className={styles.b1}>Кабинеты</div>
                            <div onClick={() => setActiveId(3)} className={styles.b1}>Доп. Образование</div>
                            <div onClick={() => setActiveId(4)} className={styles.b1}>Мероприятия</div>
                        </div>
                        <div  key={activeId} className={styles.TEXT}>
                                <div className={styles.title}>
                                    {activeItem?.title}
                                </div>
                                <div className={styles.content}>
                                    {activeItem?.content}
                                </div>
                        </div>

                    </div>
                </div>


            </div>
            <div className={styles.section1}>
                <div className={styles.x}>
                    <div className={styles.container}>
                        <div className={styles.us}>
                            Твоя карьера начинается здесь.
                        </div>
                        <div className={styles.p1}>
                            Приемная комиссия уже ждет тебя! <br />
                            Записывайся на онлайн-курсы или приходи на ближайший день <br />
                            открытых дверей, чтобы узнать больше о том, как IT.Москва может стать твоим трамплином в мир IT.
                        </div>
                        <a href="https://vk.com/@itmoscowprivet-itmoskva-school" target='_blank' className={styles.bth1}>
                            Онлайн курсы
                        </a>
                        <a href="https://vk.com/@itmoscowprivet-dod" target='_blank' className={styles.bth2}>
                            День открытых дверей
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}