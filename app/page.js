//import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello World</h1>
      <h2>My name is Morgane</h2>
      <p>This is my portfolio</p>
      <button className={styles.buttonone}>Button One</button>
      <button className={styles.buttontwo}>Button Two</button>

    </main>
  );
}
