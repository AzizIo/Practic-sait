import styles from '/src/index.module.css'

function nav() {
    return (
        <>
            <nav className={styles.nav}> 
                <div className={styles.nav_logo} >
                    <img src="" alt="logo" />
                </div>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={styles.nav_items} id="navItems">
                    <a className={styles.navs} href="main.html">Главная</a>
                    <a className={styles.navs} href="about.html">Почему мы?</a>
                    <a className={styles.navs} href="specialties.html">Специальности</a>
                    <a className={styles.navs} href="gallery.html">Галерея</a>
                    <a className={styles.navs} href="contacts.html">Контакты</a>
                </div>
            </nav>
        </>
    )
}

export default nav