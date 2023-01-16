import empty from "../assets/empty.svg";
import styles from "./EmptyList.module.css";

export default function EmptyList() {
  return (
    <section className={styles.emptyList}>
      <img src={empty} alt="" />
      <h2>Você ainda não tem tarefas cadastradas!</h2>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </section>
  );
}
