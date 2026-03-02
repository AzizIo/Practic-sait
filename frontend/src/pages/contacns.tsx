import styles from '/src/index.module.css'
import Navigation from '../components/Navigation'

function contacns() {
    return (

        <>
            <Navigation />
            <section className={styles.contacts}>
                <h1 className="contacts-title">Контактная информация</h1>
                <div className="contact-block">

                    <div className="contact-card">
                    <h2 className="contact-card__title">
                            Центр программирования<br/>и кибербезопасности
                        </h2>

                        <div className="contact-item">
                            <span className="label">Руководитель</span>
                            <span className="value">Велибеков Казихан Исмаилович</span>
                        </div>

                        <div className="contact-item">
                            <span className="label">Адрес</span>
                            <span className="value">
                                г. Москва, ул. Академика Миллионщикова, д. 20
                            </span>
                        </div>

                        <div className="contact-item">
                            <span className="label">Телефон</span>
                            <a href="tel:+79853320839" className="value link">
                                +7 (985) 332-08-39
                            </a>
                        </div>

                        <div className="contact-item">
                            <span className="label">E-mail</span>
                            <a href="mailto:Velibekov_K@itmoscow.pro" className="value link">
                                Velibekov_K@itmoscow.pro
                            </a>
                        </div>
                    </div>
                    <div className="contact-card2 contact-card ">
                        <h2 className="contact-card__title">
                            Digital.Колледж
                        </h2>

                        <div className="contact-item">
                            <span className="label">Руководитель</span>
                            <span className="value">Емельянова Александра Сергеевна</span>
                        </div>

                        <div className="contact-item">
                            <span className="label">Адрес</span>
                            <span className="value">
                                г. Москва, проспект Вернадского, дом 29А
                            </span>
                        </div>

                        <div className="contact-item">
                            <span className="label">Телефон</span>
                            <a href="tel:+79853320839" className="value link">
                                +7 (926) 815-35-34
                            </a>
                        </div>

                        <div className="contact-item">
                            <span className="label">E-mail</span>
                            <a href="mailto:Velibekov_K@itmoscow.pro" className="value link">
                                EmelyanovaAS@itmoscow.pro
                            </a>
                        </div>
                    </div>
                    <div className="contact-card3 contact-card ">
                        <h2 className="contact-card__title">
                            IT.Бирюлево
                        </h2>

                        <div className="contact-item">
                            <span className="label">Руководитель</span>
                            <span className="value">Сугатова Анна Юрьевна</span>
                        </div>

                        <div className="contact-item">
                            <span className="label">Адрес</span>
                            <span className="value">
                                г. Москва, проезд Харьковский, дом 5А
                            </span>
                        </div>

                        <div className="contact-item">
                            <span className="label">Телефон</span>
                            <a href="tel:+79853320839" className="value link">
                                +7 (985) 017-51-92
                            </a>
                        </div>

                        <div className="contact-item">
                            <span className="label">E-mail</span>
                            <a href="mailto:Velibekov_K@itmoscow.pro" className="value link">
                                sugatova_au@itmoscow.pro
                            </a>
                        </div>
                    </div>
                    <div className="contact-card4 contact-card ">
                        <h2 className="contact-card__title">
                            Центр городских технологий
                        </h2>

                        <div className="contact-item">
                            <span className="label">Руководитель</span>
                            <span className="value">Терехов Евгений Васильевич</span>
                        </div>

                        <div className="contact-item">
                            <span className="label">Адрес</span>
                            <span className="value">
                                г. Москва, улица Судостроительная, дом 48
                            </span>
                        </div>

                        <div className="contact-item">
                            <span className="label">Телефон</span>
                            <a href="tel:+79853320839" className="value link"/>
                                +7 (925) 759-60-92
                        </div>

                        <div className="contact-item">
                            <span className="label">E-mail</span>
                            <a href="mailto:Velibekov_K@itmoscow.pro" className="value link">
                                terekhov@itmoscow.pro
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}