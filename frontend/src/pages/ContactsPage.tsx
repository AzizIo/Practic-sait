import styles from './ContactsPage.module.css'
import Navigation from '../components/Navigation'

export default function ContactsPage() {
    return (

        <>
            <Navigation />
            <section className={styles.contacts}>
                <h1 className={styles.contacts_title}>Контактная информация</h1>
                <div className={styles.contact_block}>

                    <div className={styles.contact_card}>
                    <h2 className={styles.contact_card__title}>
                            Центр программирования<br/>и кибербезопасности
                        </h2>

                        <div className={styles.contact_item}>
                            <span className={styles.label}>Руководитель</span>
                            <span className={styles.value}>Велибеков Казихан Исмаилович</span>
                        </div>

                        <div className={styles.contact_item}>
                            <span className={styles.label}>Адрес</span>
                            <span className={styles.value}>
                                г. Москва, ул. Академика Миллионщикова, д. 20
                            </span>
                        </div>

                        <div className={styles.contact_item}>
                            <span className={styles.label}>Телефон</span>
                            <a href="tel:+79853320839" className={`${styles.value} ${styles.link}`}>
                                +7 (985) 332-08-39
                            </a>
                        </div>

                        <div className={styles.contact_item}>
                            <span className={styles.label}>E-mail</span>
                            <a href="mailto:Velibekov_K@itmoscow.pro" className={`${styles.value} ${styles.link}`}>
                                Velibekov_K@itmoscow.pro
                            </a>
                        </div>
                    </div>
                    <div className={`${styles.contact_card} ${styles.contact_card2}`}>
                        <h2 className={styles.contact_card__title}>
                            Digital.Колледж
                        </h2>

                        <div className={styles.contact_item}>
                            <span className={styles.label}>Руководитель</span>
                            <span className={styles.value}>Емельянова Александра Сергеевна</span>
                        </div>

                        <div className={styles.contact_item}>
                            <span className={styles.label}>Адрес</span>
                            <span className={styles.value}>
                                г. Москва, проспект Вернадского, дом 29А
                            </span>
                        </div>

                        <div className={styles.contact_item}>
                            <span className={styles.label}>Телефон</span>
                            <a href="tel:+79268153534" className={`${styles.value} ${styles.link}`}>
                                +7 (926) 815-35-34
                            </a>
                        </div>

                        <div className={styles.contact_item}>
                            <span className={styles.label}>E-mail</span>
                            <a href="mailto:EmelyanovaAS@itmoscow.pro" className={`${styles.value} ${styles.link}`}>
                                EmelyanovaAS@itmoscow.pro
                            </a>
                        </div>
                    </div>
                    <div className={`${styles.contact_card} ${styles.contact_card3}`}>
                        <h2 className={styles.contact_card__title}>
                            IT.Бирюлево
                        </h2>

                        <div className={styles.contact_item}>
                            <span className={styles.label}>Руководитель</span>
                            <span className={styles.value}>Сугатова Анна Юрьевна</span>
                        </div>

                        <div className={styles.contact_item}>
                            <span className={styles.label}>Адрес</span>
                            <span className={styles.value}>
                                г. Москва, проезд Харьковский, дом 5А
                            </span>
                        </div>

                        <div className={styles.contact_item}>
                            <span className={styles.label}>Телефон</span>
                            <a href="tel:+79850175192" className={`${styles.value} ${styles.link}`}>
                                +7 (985) 017-51-92
                            </a>
                        </div>

                        <div className={styles.contact_item}>
                            <span className={styles.label}>E-mail</span>
                            <a href="mailto:sugatova_au@itmoscow.pro" className={`${styles.value} ${styles.link}`}>
                                sugatova_au@itmoscow.pro
                            </a>
                        </div>
                    </div>
                    <div className={`${styles.contact_card} ${styles.contact_card4}`}>
                        <h2 className={styles.contact_card__title}>
                            Центр городских технологий
                        </h2>

                        <div className={styles.contact_item}>
                            <span className={styles.label}>Руководитель</span>
                            <span className={styles.value}>Терехов Евгений Васильевич</span>
                        </div>

                        <div className={styles.contact_item}>
                            <span className={styles.label}>Адрес</span>
                            <span className={styles.value}>
                                г. Москва, улица Судостроительная, дом 48
                            </span>
                        </div>

                        <div className={styles.contact_item}>
                            <span className={styles.label}>Телефон</span>
                            <a href="tel:+79257596092" className={`${styles.value} ${styles.link}`}/>
                                +7 (925) 759-60-92
                        </div>

                        <div className={styles.contact_item}>
                            <span className={styles.label}>E-mail</span>
                            <a href="mailto:terekhov@itmoscow.pro" className={`${styles.value} ${styles.link}`}>
                                terekhov@itmoscow.pro
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}