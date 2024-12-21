import { Link } from "react-router";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img
            src={dakken_llc_logo_3_w}
            alt="DAkken LLC."
            className="dakken_logo"
          />
        </Link>
      </div>
      <nav>
        <ul
          className={
            isOpen
              ? `${styles.linkContainer} ${styles.active}`
              : styles.linkContainer
          }
        >
          <LinkItem title="Home" to="/" />
          <LinkItem title="Vision" to="/vision" />
          <LinkItem title="Business" to="/business" />
          {/* <LinkItem title="Member" to="/member" /> */}
          <LinkItem title="Contact" to="/contact" />
        </ul>
      </nav>
      <div className={styles.hamburger} onClick={toggleMenu}>
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
    </header>
  );
}
