import dakken_logo from "../assets/dakken_llc_logo.png";
import "../App.css";

export default function HomePage() {
  return (
    <div className="container text-center">
      <h1>Coming Soon …</h1>
      <img src={dakken_logo} className="dakken_logo" />
      <section className="page-section" id="services">
        <div className="service">
          <div className="center-text">Welcome to DAkken LLC!</div>
        </div>
      </section>
    </div>
  );
}
