import dakken_logo from "../assets/dakken_llc_logo.png";
import dakken_home from "../assets/dakken_home_1221.png"
import "../App.css";

export default function HomePage() {
  return (
    <div className="container">
      <img src={dakken_home} className="page_top_image" alt="Top Image" />
    </div>
  );
}
