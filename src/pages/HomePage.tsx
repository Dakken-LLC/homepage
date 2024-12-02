import dakken_logo from "../assets/dakken_llc_logo.png";

export default function HomePage() {
  return (
    <div className="container text-center">
      <h1>Coming Soon …</h1>

      <img src={dakken_logo} className="dakken_logo" />

      <section className="page-section" id="services">
        <div className="service">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">DAkken LLC.</h2>
            <h3 className="section-subheading text-muted mb-5">
              合同会社DA研へようこそ！
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}
