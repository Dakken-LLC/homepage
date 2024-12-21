import dakken_logo from "../assets/dakken_llc_logo.png";
import dakken_home from "../assets/dakken_home_1221.png";
import "../App.css";

export default function HomePage() {
  return (
    <div className="container text-center">
      <img src={dakken_home} className="page_top_image" alt="Top Image" />
      <div className="page_title">
        <h1>合同会社DA研へようこそ</h1>
        <div className="page_content">
          <h3>WEBアプリ開発・データ加工分析 etc...</h3>
          <br></br>
          <br></br>
          <br></br>
          <h4>
            兵庫県立大学
            社会情報科学部　DA研メンバーの学生たちによって設立されています。
            主に兵庫県内の企業や自治体を中心にシステム開発やデータ分析を行っています。
          </h4>
        </div>
      </div>
    </div>
  );
}
