import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import logo from "../assets/logo.png"; 

export default function Navigation() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <img className={styles.logo} src={logo} alt="IT.MOSKVA" />
        </div>

        <nav className={styles.nav} aria-label="Главное меню">
          <NavLink className={linkClass} to="/">
            <span className={styles.linkText}>Главная</span>
          </NavLink>

          <a className={styles.link} href="#why">
            <span className={styles.linkText}>Почему мы</span>
          </a>

          <NavLink className={linkClass} to="/centers">
            <span className={styles.linkText}>Специальности</span>
          </NavLink>

          <NavLink className={linkClass} to="/gallery">
            <span className={styles.linkText}>Галерея</span>
          </NavLink>

          <NavLink className={linkClass} to="/contacts">
            <span className={styles.linkText}>Контакты</span>
          </NavLink>
        </nav>

        <div className={styles.spacer} />
      </div>
    </header>
  );
}
