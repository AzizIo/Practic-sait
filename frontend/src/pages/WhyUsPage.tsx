import styles from './Whyus.module.css'
import Navigation from '../components/Navigation'

export default function WhyUs() {
    return (
        <>
            <Navigation />
            <div className={styles.section1}>
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
        </>
    )
}