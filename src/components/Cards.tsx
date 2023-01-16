import trash from "../assets/trash.svg";
import styles from "./Cards.module.css";

export default function Cards() {
  return (
    <section className={styles.card}>
      <input className={styles.radio} type="checkbox" />
      <p>
        Praticar durante 2 horas Typescript e evoluir bastante, testar migrar o
        JS já feito também para otimizar projetos antigos e melhorar o
        portifólio.
      </p>
      <a className={styles.trash} href="">
        <img src={trash} alt="" />
      </a>
    </section>
  );
}
