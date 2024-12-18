import styles from "./Layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className={styles.container}>{children}</section>;
}
