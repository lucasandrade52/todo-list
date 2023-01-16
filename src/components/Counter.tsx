import styles from "./Counter.module.css";

export default function Counter() {
  return (
    <section className={styles.header}>
      <section className={styles.counter}>
        <h2 className={styles.title}>Tarefas Criadas</h2>
        <p className={styles.count}>5</p>
      </section>
      <section className={styles.counter}>
        <h2 className={styles.concluded}>Concluídas</h2>
        <p className={styles.counted}>3 de 7</p>
      </section>
    </section>
  );
}
