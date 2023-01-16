import styles from "./Header.module.css";
import todoLogo from "../assets/todo-logo.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="todo logotype" />
    </header>
  );
}
