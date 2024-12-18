import { Link } from "react-router";
import dakken_llc_logo_3_w from "../assets/dakken_llc_logo_3_w.png";
import styles from "./Header.module.css";

const LinkItem = ({ title, to }: { title: string; to: string }) => {
  return (
    <li>
      <Link to={to}>{title}</Link>
    </li>
  );
};

export default function HeaderLayout() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img
            src={dakken_llc_logo_3_w}
            alt="DAkken LLC."
            className="dakken_logo"
          ></img>
        </Link>
      </div>
      <nav>
        <ul className={styles.linkContainer}>
          <LinkItem title="Home" to="/" />
          <LinkItem title="Vision" to="/vision" />
          <LinkItem title="Business" to="/business" />
          <LinkItem title="Member" to="/member" />
          <LinkItem title="Contact" to="/contact" />
        </ul>
      </nav>
    </header>
  );
}
