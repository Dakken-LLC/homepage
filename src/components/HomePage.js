import React from 'react'
import { Button } from 'react-bootstrap';
import dakken_logo from '../images/dakken_llc_logo.png';

function HomePage() {
  return (
    <div className="container text-center">
      <h1>Coming Soon …</h1>

      <img src={dakken_logo} className="dakken_logo" />

      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">DAkken LLC.</h2>
            <h3 class="section-subheading text-muted mb-5">
              合同会社DA研へようこそ！
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage
