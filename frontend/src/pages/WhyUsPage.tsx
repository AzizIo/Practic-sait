import styles from './Whyus.module.css'
import Navigation from '../components/Navigation'
import { useState } from 'react';
import event from "../assets/events.jpg"
import lab from "../assets/lab.jpg"
import ev from "../assets/ev.jpg"
import tr from "../assets/tr.jpg"
import vd from "../assets/vd.MP4"
export default function WhyUs() {
    const advantages = [
        {
            id: 1,
            title: "Центр карьеры и развития",
            short: "Трудоустройство",
            description:
                "Мы сопровождаем студентов от первого курса до выхода на работу.",
            checklist: [
                "Индивидуальные консультации с карьерным экспертом",
                "Помощь в создании резюме и портфолио", 
                "Подготовка к собеседованиям",
                "Стажировки в компаниях-партнёрах", 
                "Мастер-классы от действующих специалистов", 
            ],
            image: tr
        },

        {
            id: 2,
            title: "Современные лаборатории",
            short: "Кабинеты",
            description:
                "Обучение проходит на современном оборудовании с использованием актуального ПО.",
            checklist: [
                "Компьютерные классы с профессиональным софтом", 
                "Практика на реальных проектах",
                "Оборудование последнего поколения",
                "Доступ к лабораториям вне учебных занятий"
            ],
            image: lab
        },

        {
            id: 3,
            title: "Дополнительное образование",
            short: "Доп. образование",
            description:
                "Мы даём больше, чем стандартную программу обучения.",
            checklist: [
                "Хакатоны и IT-соревнования",
                "Проектная деятельность",
                "Работа в командах",
                "Развитие soft skills",
                "Подготовка к олимпиадам"
            ],
            image: event
        },

        {
            id: 4,
            title: "Студенческая жизнь и мероприятия",
            short: "Мероприятия",
            description:
                "Активная студенческая жизнь и возможности для самореализации.",
            checklist: [
                "Форумы и конференции", 
                "Кибер-турниры",
                "Клубы по интересам",
                "Волонтёрские программы"
            ],
            image: ev
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


                    </div>
                    <div key={activeId} className={styles.TEXT}>
                        <div className="left">
                            <div className={styles.title}>
                                {activeItem?.title}
                            </div>

                            <div className={styles.description}>
                                {activeItem?.description}
                            </div>
                            <div className={styles.content}>
                                <ul className={styles.list}>
                                    {activeItem?.checklist.map((item, index) => (
                                        <li key={index} className={styles.item}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="right">
                            <div className={styles.image}>
                                <img className={styles.image} src={activeItem?.image} alt={activeItem?.title} />
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className={styles.ex}>

            <div className={styles.section1}>
                <div className={styles.x}>

                <div className={styles.container}>
                    
                    <div className={styles.header}>
                        Виртуальная экскурсия
                    </div>
                    <div className={styles.vd}>
                        <video className={styles.vd} src={vd} controls></video>
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