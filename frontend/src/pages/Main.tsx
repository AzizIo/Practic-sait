import styles from '/src/index.module.css'
import Navigation from '../components/Navigation'
function main() {
    return (
        <>
        <Navigation />
            <main>
                <div className={styles.container}>
                    <h1 className={styles.main_title} >
                        Колледж<br />с добрым<br />сердцем!
                    </h1>

                            <h1 className={styles.main_title2}>
                                Колледж с добрым<br />сердцем!
                            </h1>


                            <div className={styles.start_bth}>
                                <a className={styles.bth} href="https://vk.com/@it.moscowpro-kak-podat-elektronnoe-zayavlenie-v-mgkeit" target="_blank">Хочу поступить</a>
                            </div>
                            <div className={styles.soc_seti}>
                                <div className={styles.seti}>
                                    <div className={styles.bt}>
                                        Подпишись<br />на наши соцсети
                                    </div>
                                    <a className={styles.tg} href="https://t.me/your_channel" target="_blank">
                                        <img src="assets/telegram 1.png" alt="Telegram" />
                                    </a>
                                    <a className={styles.vk} href="https://vk.com/your_page" target="_blank">
                                        <img src="assets/vk 1.png" alt="VK" />
                                    </a>
                                </div>
                            </div>
                </div>
            </main>
        </>
    )
}

export default main