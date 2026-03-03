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
            </div>
        </>
    )
}