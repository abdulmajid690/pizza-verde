import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="new-hero">
      <div className="floating-pizza">🍕</div>
      <div className="floating-pizza">🍕</div>
      <div className="floating-pizza">🍕</div>
      <div className="container max-w-[1280px] mx-auto px-4">
        <div className="hero-content">
          <h1>Artisan Pizza Crafted With Passion</h1>
          <p>
            Try our new Truffle Mushroom Supreme pizza - made with wild mushrooms,
            truffle oil, and three premium cheeses
          </p>
          <Link href="/menu" className="btn-new">
            Order Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
