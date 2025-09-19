import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="pizza-hero">
      <div className="container max-w-[1280px] mx-auto px-4">
        <div className="hero-layout">
          <div className="hero-content">
            <div className="hero-badge">FRESHLY BAKED PIZZA</div>
            <h1 className="hero-title">
              Experience<br/>
              True Pizza<br/>
              <span className="highlight">Happiness</span>
            </h1>
            <p className="hero-description">
              Discover the authentic taste of Italy with our handcrafted pizzas made from the finest ingredients. Every bite is a journey to pizza paradise.
            </p>
            <div className="hero-buttons">
              <Link href="/menu" className="btn-order-now">
                Order Now
              </Link>
            </div>
            
            <div className="achievement-badges">
              <div className="badge-item">
                <div className="badge-icon trophy">
                  <i className="fas fa-trophy"></i>
                </div>
                <div className="badge-text">
                  <div className="badge-title">Best Local Pizza</div>
                  <div className="badge-year">2025</div>
                </div>
              </div>
              
              <div className="badge-item">
                <div className="badge-icon pizza">
                  <i className="fas fa-pizza-slice"></i>
                </div>
                <div className="badge-text">
                  <div className="badge-title">Top Rated</div>
                  <div className="badge-year">Delivery</div>
                </div>
              </div>
              
              <div className="badge-item">
                <div className="badge-icon award">
                  <i className="fas fa-medal"></i>
                </div>
                <div className="badge-text">
                  <div className="badge-title">Customer</div>
                  <div className="badge-year">Choice Award</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="pizza-circle">
              <div className="pizza-person-container">
                {/* Floating Pizza Slices */}
                <div className="floating-pizza slice-1">🍕</div>
                <div className="floating-pizza slice-2">🍕</div>
                <div className="floating-pizza slice-3">🍕</div>
                <div className="floating-pizza slice-4">🍕</div>
                
                {/* Person with Pizza */}
                <div className="pizza-person">
                  <div className="person-avatar">
                    {/* Person's head and face */}
                    <div className="person-head">
                      <div className="hair"></div>
                      <div className="face">
                        <div className="glasses">
                          <div className="glasses-frame left"></div>
                          <div className="glasses-frame right"></div>
                          <div className="glasses-bridge"></div>
                        </div>
                        <div className="eyes">
                          <div className="eye left-eye"></div>
                          <div className="eye right-eye"></div>
                        </div>
                        <div className="mouth surprised"></div>
                      </div>
                    </div>
                    
                    {/* Person's body and pizza */}
                    <div className="person-body">
                      <div className="red-scarf"></div>
                      <div className="white-shirt"></div>
                      <div className="hands">
                        <div className="hand left-hand"></div>
                        <div className="hand right-hand"></div>
                        <div className="pizza-slice-held">🍕</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decorative Elements */}
            <div className="bg-decoration decoration-1"></div>
            <div className="bg-decoration decoration-2"></div>
            <div className="bg-decoration decoration-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
