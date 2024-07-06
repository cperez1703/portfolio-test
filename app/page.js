import styles from "./page.module.css";
import Projects from "@/components/Projects"

export default function Home() {
  return (
    <main className={styles.main}>
      <Projects/>
    </main>
  );
}
