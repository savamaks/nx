import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <div>
                <a href="/local">Local</a>
            </div>
            <h1>Main page</h1>
        </main>
    );
}
 