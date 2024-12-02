import { Link } from "react-router";

export default function HeaderLayout() {
  return (
    <header>
      <div className="logo">
        <h3>DAkken LLC.</h3>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/business">Business</Link>
          </li>
          <li>
            <a href="member">Member</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
