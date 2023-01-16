import add from "../src/assets/add.svg";
import "./global.css";
import styles from "./App.module.css";
import Header from "./components/Headers";
import Input from "./components/Input";
import Button from "./components/Button";
import Cards from "./components/Cards";
import Counter from "./components/Counter";
import EmptyList from "./components/EmptyList";

function App() {
  return (
    <section>
      <Header />

      <div className={styles.wrapper}>
        <Input />
        <Button className={styles.button}>
          Criar
          <img src={add} alt="todo logotype" />
        </Button>
      </div>
      <main>
        <Counter />
        <EmptyList />
        <Cards />
      </main>
    </section>
  );
}

export default App;
