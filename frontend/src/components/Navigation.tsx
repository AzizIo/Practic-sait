import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import logo from "../assets/logo.png";

export default function Navigation() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <img className={styles.logo} src={logo} alt="IT.Moscow" />
      </div>

      <nav className={styles.nav}>
        <NavLink className={styles.link} to="/">Главная</NavLink>
        <a className={styles.link} href="#why">Почему мы</a>
        <a className={styles.link} href="#spec">Специальности</a>
        <NavLink className={styles.link} to="/gallery">Галерея</NavLink>
        <NavLink className={styles.link} to="/contacts">Контакты</NavLink>
      </nav>
    </header>
  );
}