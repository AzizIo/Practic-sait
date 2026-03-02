import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import logo from "../assets/logo.png"; // путь к логотипу

export default function Navigation() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>

      <nav className={styles.nav}>
        <NavLink className={styles.link} to="/">
          Главная
        </NavLink>

        <a className={styles.link} href="#why">
          Почему мы?
        </a>

        <a className={styles.link} href="#spec">
          Специальности
        </a>

        <NavLink className={styles.link} to="/gallery">
          Галерея
        </NavLink>

        <a className={styles.link} href="#contacts">
          Контакты
        </a>
      </nav>
    </header>
  );
}